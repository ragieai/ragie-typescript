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
    createCount: 414857,
    createdCount: 360545,
    updateContentCount: 828657,
    updatedContentCount: 924967,
    updateMetadataCount: 46007,
    updatedMetadataCount: 232627,
    deleteCount: 348519,
    deletedCount: 814967,
    erroredCount: 985492,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `nonce`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [components.ConnectionSyncProgressWebhookType](../../models/components/connectionsyncprogresswebhooktype.md)       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `payload`                                                                                                          | [components.ConnectionSyncProgressWebhookPayload](../../models/components/connectionsyncprogresswebhookpayload.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |