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
    connectionMetadata: {
      "key": "<value>",
    },
    createCount: 379432,
    createdCount: 757125,
    updateContentCount: 233157,
    updatedContentCount: 260501,
    updateMetadataCount: 43790,
    updatedMetadataCount: 120497,
    deleteCount: 989841,
    deletedCount: 381029,
    erroredCount: 504776,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `nonce`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `payload`                                                                                                          | [components.ConnectionSyncProgressWebhookPayload](../../models/components/connectionsyncprogresswebhookpayload.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |