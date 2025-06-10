# EntityExtractedWebhook

## Example Usage

```typescript
import { EntityExtractedWebhook } from "ragie/models/components";

let value: EntityExtractedWebhook = {
  nonce: "<value>",
  payload: {
    entityId: "<id>",
    documentId: "<id>",
    instructionId: "<id>",
    documentMetadata: {
      "key": "<value>",
      "key1": "<value>",
    },
    documentExternalId: "<id>",
    documentName: "<value>",
    partition: "<value>",
    syncId: "<id>",
    data: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `nonce`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `payload`                                                                                            | [components.EntityExtractedWebhookPayload](../../models/components/entityextractedwebhookpayload.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |