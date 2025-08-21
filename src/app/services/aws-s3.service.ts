import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsS3Service {
  private objectCache = new Map<string, string[]>();
  private albumCache = new Map<string, string[]>();

  async listObjects(bucket: string, prefix = ''): Promise<string[]> {
    const cacheKey = `${bucket}|${prefix}`;
    const cached = this.objectCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const region = environment.aws.region;
    const url = `https://${bucket}.s3.${region}.amazonaws.com?list-type=2&prefix=${encodeURIComponent(prefix)}`;
    const response = await fetch(url);
    const text = await response.text();
    const keys: string[] = [];
    const regex = /<Key>(.*?)<\/Key>/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      const key = match[1];
      if (!key.endsWith('/')) {
        keys.push(key);
      }
    }
    const urls = keys.map(key => `https://${bucket}.s3.${region}.amazonaws.com/${key}`);
    this.objectCache.set(cacheKey, urls);
    return urls;
  }

  async listAlbums(bucket: string): Promise<string[]> {
    const cached = this.albumCache.get(bucket);
    if (cached) {
      return cached;
    }

    const region = environment.aws.region;
    const url = `https://${bucket}.s3.${region}.amazonaws.com?list-type=2&delimiter=/`;
    const response = await fetch(url);
    const text = await response.text();
    const albums: string[] = [];
    const regex = /<Prefix>(.*?)<\/Prefix>/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      const prefix = match[1];
      if (prefix && prefix !== '/' && prefix.endsWith('/')) {
        albums.push(prefix.slice(0, -1));
      }
    }
    this.albumCache.set(bucket, albums);
    return albums;
  }
}
