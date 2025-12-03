# PublicBackblazeConnection

## Example Usage

```typescript
import { PublicBackblazeConnection } from "ragie/models/components";

let value: PublicBackblazeConnection = {
  provider: "backblaze",
  data: {
    bucket: "<value>",
  },
  credentials: {
    keyId: "<id>",
    applicationKey: "<value>",
    region: "<value>",
    endpoint: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `provider`                                                                         | *"backblaze"*                                                                      | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [components.BucketData](../../models/components/bucketdata.md)                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `credentials`                                                                      | [components.BackblazeCredentials](../../models/components/backblazecredentials.md) | :heavy_check_mark:                                                                 | N/A                                                                                |