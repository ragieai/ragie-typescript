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
      "key1": "<value>",
      "key2": "<value>",
    },
    createCount: 577742,
    updateContentCount: 206968,
    updateMetadataCount: 339797,
    deleteCount: 556910,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `nonce`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `payload`                                                                                                        | [components.ConnectionSyncStartedWebhookPayload](../../models/components/connectionsyncstartedwebhookpayload.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |