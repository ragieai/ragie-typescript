# ConnectionSyncProgressWebhookPayload

## Example Usage

```typescript
import { ConnectionSyncProgressWebhookPayload } from "ragie/models/components";

let value: ConnectionSyncProgressWebhookPayload = {
  connectionId: "<id>",
  syncId: "<id>",
  partition: "<value>",
  connectionMetadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  createCount: 778083,
  createdCount: 195425,
  updateContentCount: 721162,
  updatedContentCount: 897540,
  updateMetadataCount: 627520,
  updatedMetadataCount: 603451,
  deleteCount: 975724,
  deletedCount: 896780,
  erroredCount: 59173,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `connectionId`         | *string*               | :heavy_check_mark:     | N/A                    |
| `syncId`               | *string*               | :heavy_check_mark:     | N/A                    |
| `partition`            | *string*               | :heavy_check_mark:     | N/A                    |
| `connectionMetadata`   | Record<string, *any*>  | :heavy_check_mark:     | N/A                    |
| `createCount`          | *number*               | :heavy_check_mark:     | N/A                    |
| `createdCount`         | *number*               | :heavy_check_mark:     | N/A                    |
| `updateContentCount`   | *number*               | :heavy_check_mark:     | N/A                    |
| `updatedContentCount`  | *number*               | :heavy_check_mark:     | N/A                    |
| `updateMetadataCount`  | *number*               | :heavy_check_mark:     | N/A                    |
| `updatedMetadataCount` | *number*               | :heavy_check_mark:     | N/A                    |
| `deleteCount`          | *number*               | :heavy_check_mark:     | N/A                    |
| `deletedCount`         | *number*               | :heavy_check_mark:     | N/A                    |
| `erroredCount`         | *number*               | :heavy_check_mark:     | N/A                    |