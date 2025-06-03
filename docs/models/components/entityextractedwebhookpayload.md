# EntityExtractedWebhookPayload

## Example Usage

```typescript
import { EntityExtractedWebhookPayload } from "ragie/models/components";

let value: EntityExtractedWebhookPayload = {
  entityId: "<id>",
  documentId: "<id>",
  instructionId: "<id>",
  documentMetadata: {
    "key": "<value>",
  },
  documentExternalId: "<id>",
  documentName: "<value>",
  partition: "<value>",
  syncId: "<id>",
  data: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `entityId`            | *string*              | :heavy_check_mark:    | N/A                   |
| `documentId`          | *string*              | :heavy_check_mark:    | N/A                   |
| `instructionId`       | *string*              | :heavy_check_mark:    | N/A                   |
| `documentMetadata`    | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `documentExternalId`  | *string*              | :heavy_check_mark:    | N/A                   |
| `documentName`        | *string*              | :heavy_check_mark:    | N/A                   |
| `partition`           | *string*              | :heavy_check_mark:    | N/A                   |
| `syncId`              | *string*              | :heavy_check_mark:    | N/A                   |
| `data`                | Record<string, *any*> | :heavy_check_mark:    | N/A                   |