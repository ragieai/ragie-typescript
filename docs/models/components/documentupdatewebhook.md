# DocumentUpdateWebhook

## Example Usage

```typescript
import { DocumentUpdateWebhook } from "ragie/models/components";

let value: DocumentUpdateWebhook = {
  nonce: "<value>",
  payload: {
    documentId: "<id>",
    status: "failed",
    partition: "<value>",
    metadata: {},
    externalId: "<id>",
    syncId: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `nonce`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [components.Type](../../models/components/type.md)                                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `payload`                                                                                          | [components.DocumentUpdateWebhookPayload](../../models/components/documentupdatewebhookpayload.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |