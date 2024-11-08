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
    createCount: 409054,
    updateContentCount: 162954,
    updateMetadataCount: 638762,
    deleteCount: 490305,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `nonce`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [components.ConnectionSyncStartedWebhookType](../../models/components/connectionsyncstartedwebhooktype.md)       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `payload`                                                                                                        | [components.ConnectionSyncStartedWebhookPayload](../../models/components/connectionsyncstartedwebhookpayload.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |