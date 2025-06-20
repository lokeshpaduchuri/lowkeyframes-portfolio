import { Injectable } from '@angular/core';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

@Injectable({
  providedIn: 'root'
})
export class AwsS3Service {
  private client: S3Client;

  constructor() {
    this.client = new S3Client({
      region: process.env['AWS_REGION'],
      credentials: {
        accessKeyId: process.env['AWS_ACCESS_KEY_ID'] || '',
        secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'] || ''
      }
    });
  }

  async listObjects(bucket: string, prefix = ''): Promise<string[]> {
    const command = new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix });
    const result = await this.client.send(command);
    const region = process.env['AWS_REGION'];
    return (result.Contents || []).map(obj => `https://${bucket}.s3.${region}.amazonaws.com/${obj.Key}`);
  }
}
