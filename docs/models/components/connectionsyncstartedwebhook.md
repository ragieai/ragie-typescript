# ConnectionSyncStartedWebhook

## Example Usage

```typescript
import { ConnectionSyncStartedWebhook } from "ragie/models/components";

let value: ConnectionSyncStartedWebhook = {
  nonce: "<value>",
  payload: {
    connectionId: "<id>",
    syncId: "<id>",
    partition: "<value>",
    connectionMetadata: {},
    createCount: 662505,
    updateContentCount: 246063,
    updateMetadataCount: 665859,
    deleteCount: 517309,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `nonce`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [components.ConnectionSyncStartedWebhookType](../../models/components/connectionsyncstartedwebhooktype.md)       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `payload`                                                                                                        | [components.ConnectionSyncStartedWebhookPayload](../../models/components/connectionsyncstartedwebhookpayload.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |