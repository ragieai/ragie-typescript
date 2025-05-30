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
  },
  createCount: 931246,
  createdCount: 778083,
  updateContentCount: 195425,
  updatedContentCount: 721162,
  updateMetadataCount: 897540,
  updatedMetadataCount: 627520,
  deleteCount: 603451,
  deletedCount: 975724,
  erroredCount: 896780,
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