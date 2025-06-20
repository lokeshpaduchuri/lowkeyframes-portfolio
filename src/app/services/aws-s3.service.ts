import { Injectable } from '@angular/core';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsS3Service {
  private client: S3Client;

  constructor() {
    this.client = new S3Client({
      region: environment.aws.region,
      credentials: {
        accessKeyId: environment.aws.accessKeyId,
        secretAccessKey: environment.aws.secretAccessKey,
      },
    });
  }

  async listObjects(bucket: string, prefix = ''): Promise<string[]> {
    const command = new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix });
    const result = await this.client.send(command);
    const region = environment.aws.region;
    return (result.Contents || []).map(obj => `https://${bucket}.s3.${region}.amazonaws.com/${obj.Key}`);
  }
}
