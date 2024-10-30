# DocumentDeleteWebhook

## Example Usage

```typescript
import { DocumentDeleteWebhook } from "ragie/models/components";

let value: DocumentDeleteWebhook = {
  nonce: "<value>",
  payload: {
    documentId: "<id>",
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
| `type`                                                                                             | [components.DocumentDeleteWebhookType](../../models/components/documentdeletewebhooktype.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `payload`                                                                                          | [components.DocumentDeleteWebhookPayload](../../models/components/documentdeletewebhookpayload.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |