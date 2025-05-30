# DocumentUpdateWebhook

## Example Usage

```typescript
import { DocumentUpdateWebhook } from "ragie/models/components";

let value: DocumentUpdateWebhook = {
  nonce: "<value>",
  payload: {
    documentId: "<id>",
    partition: "<value>",
    metadata: {
      "key": "<value>",
    },
    externalId: "<id>",
    name: "<value>",
    connectionId: "<id>",
    syncId: "<id>",
    error: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `nonce`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `payload`                                                                                          | [components.DocumentUpdateWebhookPayload](../../models/components/documentupdatewebhookpayload.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |