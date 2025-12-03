# PublicS3CompatibleConnection

## Example Usage

```typescript
import { PublicS3CompatibleConnection } from "ragie/models/components";

let value: PublicS3CompatibleConnection = {
  provider: "s3",
  data: {
    bucket: "<value>",
  },
  credentials: {
    accessKeyId: "<id>",
    secretAccessKey: "<value>",
    region: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `provider`                                                                               | *"s3"*                                                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [components.BucketData](../../models/components/bucketdata.md)                           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `credentials`                                                                            | [components.S3CompatibleCredentials](../../models/components/s3compatiblecredentials.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |