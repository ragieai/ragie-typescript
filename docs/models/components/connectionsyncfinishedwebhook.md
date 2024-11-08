# ConnectionSyncFinishedWebhook

## Example Usage

```typescript
import { ConnectionSyncFinishedWebhook } from "ragie/models/components";

let value: ConnectionSyncFinishedWebhook = {
  nonce: "<value>",
  payload: {
    connectionId: "<id>",
    syncId: "<id>",
    partition: "<value>",
    connectionMetadata: {},
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `nonce`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [components.ConnectionSyncFinishedWebhookType](../../models/components/connectionsyncfinishedwebhooktype.md)       | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `payload`                                                                                                          | [components.ConnectionSyncFinishedWebhookPayload](../../models/components/connectionsyncfinishedwebhookpayload.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |