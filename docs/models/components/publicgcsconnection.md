# PublicGCSConnection

## Example Usage

```typescript
import { PublicGCSConnection } from "ragie/models/components";

let value: PublicGCSConnection = {
  data: {
    bucket: "<value>",
  },
  credentials: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `provider`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.BucketData](../../models/components/bucketdata.md) | :heavy_check_mark:                                             | N/A                                                            |
| `credentials`                                                  | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |