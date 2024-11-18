# ConnectionSyncProgressWebhook

## Example Usage

```typescript
import { ConnectionSyncProgressWebhook } from "ragie/models/components";

let value: ConnectionSyncProgressWebhook = {
  nonce: "<value>",
  payload: {
    connectionId: "<id>",
    syncId: "<id>",
    partition: "<value>",
    connectionMetadata: {},
    createCount: 828657,
    createdCount: 924967,
    updateContentCount: 46007,
    updatedContentCount: 232627,
    updateMetadataCount: 348519,
    updatedMetadataCount: 814967,
    deleteCount: 985492,
    deletedCount: 968972,
    erroredCount: 904949,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `nonce`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [components.ConnectionSyncProgressWebhookType](../../models/components/connectionsyncprogresswebhooktype.md)       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `payload`                                                                                                          | [components.ConnectionSyncProgressWebhookPayload](../../models/components/connectionsyncprogresswebhookpayload.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |