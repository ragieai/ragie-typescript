# ConnectionSyncStartedWebhookPayload

## Example Usage

```typescript
import { ConnectionSyncStartedWebhookPayload } from "ragie/models/components";

let value: ConnectionSyncStartedWebhookPayload = {
  connectionId: "<id>",
  syncId: "<id>",
  partition: "<value>",
  connectionMetadata: {},
  createCount: 989410,
  updateContentCount: 65304,
  updateMetadataCount: 783235,
  deleteCount: 288398,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `connectionId`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `syncId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `partition`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `connectionMetadata`                                                           | [components.ConnectionMetadata](../../models/components/connectionmetadata.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createCount`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateContentCount`                                                           | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateMetadataCount`                                                          | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `deleteCount`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |