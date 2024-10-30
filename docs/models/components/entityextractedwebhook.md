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
    documentMetadata: {},
    documentExternalId: "<id>",
    partition: "<value>",
    syncId: "<id>",
    data: {},
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `nonce`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `type`                                                                                               | [components.EntityExtractedWebhookType](../../models/components/entityextractedwebhooktype.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `payload`                                                                                            | [components.EntityExtractedWebhookPayload](../../models/components/entityextractedwebhookpayload.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |