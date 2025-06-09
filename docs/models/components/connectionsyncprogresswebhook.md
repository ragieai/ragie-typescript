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
    createCount: 757125,
    createdCount: 233157,
    updateContentCount: 260501,
    updatedContentCount: 43790,
    updateMetadataCount: 120497,
    updatedMetadataCount: 989841,
    deleteCount: 381029,
    deletedCount: 504776,
    erroredCount: 701098,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `nonce`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `payload`                                                                                                          | [components.ConnectionSyncProgressWebhookPayload](../../models/components/connectionsyncprogresswebhookpayload.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |