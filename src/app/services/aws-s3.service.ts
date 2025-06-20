import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsS3Service {
  async listObjects(bucket: string, prefix = ''): Promise<string[]> {
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
    return keys.map(key => `https://${bucket}.s3.${region}.amazonaws.com/${key}`);
  }
}
