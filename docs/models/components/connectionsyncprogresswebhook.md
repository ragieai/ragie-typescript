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
    createCount: 241418,
    createdCount: 662505,
    updateContentCount: 246063,
    updatedContentCount: 665859,
    updateMetadataCount: 517309,
    updatedMetadataCount: 424089,
    deleteCount: 554688,
    deletedCount: 287051,
    erroredCount: 706575,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `nonce`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [components.ConnectionSyncProgressWebhookType](../../models/components/connectionsyncprogresswebhooktype.md)       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `payload`                                                                                                          | [components.ConnectionSyncProgressWebhookPayload](../../models/components/connectionsyncprogresswebhookpayload.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |