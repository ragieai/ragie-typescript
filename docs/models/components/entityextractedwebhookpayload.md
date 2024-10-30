# EntityExtractedWebhookPayload

## Example Usage

```typescript
import { EntityExtractedWebhookPayload } from "ragie/models/components";

let value: EntityExtractedWebhookPayload = {
  entityId: "<id>",
  documentId: "<id>",
  instructionId: "<id>",
  documentMetadata: {},
  documentExternalId: "<id>",
  partition: "<value>",
  syncId: "<id>",
  data: {},
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `entityId`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentId`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `instructionId`                                                                                                                      | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentMetadata`                                                                                                                   | [components.EntityExtractedWebhookPayloadDocumentMetadata](../../models/components/entityextractedwebhookpayloaddocumentmetadata.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentExternalId`                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `partition`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `syncId`                                                                                                                             | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `data`                                                                                                                               | [components.EntityExtractedWebhookPayloadData](../../models/components/entityextractedwebhookpayloaddata.md)                         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |