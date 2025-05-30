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
    connectionMetadata: {
      "key": "<value>",
    },
    createCount: 906164,
    updateContentCount: 577742,
    updateMetadataCount: 206968,
    deleteCount: 339797,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `nonce`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `payload`                                                                                                        | [components.ConnectionSyncStartedWebhookPayload](../../models/components/connectionsyncstartedwebhookpayload.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |