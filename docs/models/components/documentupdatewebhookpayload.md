# DocumentUpdateWebhookPayload

## Example Usage

```typescript
import { DocumentUpdateWebhookPayload } from "ragie/models/components";

let value: DocumentUpdateWebhookPayload = {
  documentId: "<id>",
  status: "failed",
  partition: "<value>",
  metadata: {},
  externalId: "<id>",
  syncId: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `documentId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `status`                                                                                                           | *components.Status*                                                                                                | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `partition`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `metadata`                                                                                                         | [components.DocumentUpdateWebhookPayloadMetadata](../../models/components/documentupdatewebhookpayloadmetadata.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `externalId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `syncId`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |