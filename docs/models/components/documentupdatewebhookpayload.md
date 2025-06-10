# DocumentUpdateWebhookPayload

## Example Usage

```typescript
import { DocumentUpdateWebhookPayload } from "ragie/models/components";

let value: DocumentUpdateWebhookPayload = {
  documentId: "<id>",
  partition: "<value>",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
  },
  externalId: "<id>",
  name: "<value>",
  connectionId: "<id>",
  syncId: "<id>",
  error: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `documentId`          | *string*              | :heavy_check_mark:    | N/A                   |
| `status`              | *string*              | :heavy_check_mark:    | N/A                   |
| `partition`           | *string*              | :heavy_check_mark:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `externalId`          | *string*              | :heavy_check_mark:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `connectionId`        | *string*              | :heavy_check_mark:    | N/A                   |
| `syncId`              | *string*              | :heavy_check_mark:    | N/A                   |
| `error`               | *string*              | :heavy_check_mark:    | N/A                   |