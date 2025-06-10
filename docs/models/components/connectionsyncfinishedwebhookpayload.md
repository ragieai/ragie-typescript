# ConnectionSyncFinishedWebhookPayload

## Example Usage

```typescript
import { ConnectionSyncFinishedWebhookPayload } from "ragie/models/components";

let value: ConnectionSyncFinishedWebhookPayload = {
  connectionId: "<id>",
  syncId: "<id>",
  partition: "<value>",
  connectionMetadata: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `connectionId`        | *string*              | :heavy_check_mark:    | N/A                   |
| `syncId`              | *string*              | :heavy_check_mark:    | N/A                   |
| `partition`           | *string*              | :heavy_check_mark:    | N/A                   |
| `connectionMetadata`  | Record<string, *any*> | :heavy_check_mark:    | N/A                   |