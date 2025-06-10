# ConnectionSyncStartedWebhookPayload

## Example Usage

```typescript
import { ConnectionSyncStartedWebhookPayload } from "ragie/models/components";

let value: ConnectionSyncStartedWebhookPayload = {
  connectionId: "<id>",
  syncId: "<id>",
  partition: "<value>",
  connectionMetadata: {
    "key": "<value>",
    "key1": "<value>",
  },
  createCount: 624513,
  updateContentCount: 236069,
  updateMetadataCount: 517010,
  deleteCount: 309000,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `connectionId`        | *string*              | :heavy_check_mark:    | N/A                   |
| `syncId`              | *string*              | :heavy_check_mark:    | N/A                   |
| `partition`           | *string*              | :heavy_check_mark:    | N/A                   |
| `connectionMetadata`  | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `createCount`         | *number*              | :heavy_check_mark:    | N/A                   |
| `updateContentCount`  | *number*              | :heavy_check_mark:    | N/A                   |
| `updateMetadataCount` | *number*              | :heavy_check_mark:    | N/A                   |
| `deleteCount`         | *number*              | :heavy_check_mark:    | N/A                   |