# ConnectionLimitExceededWebhookPayload

## Example Usage

```typescript
import { ConnectionLimitExceededWebhookPayload } from "ragie/models/components";

let value: ConnectionLimitExceededWebhookPayload = {
  connectionId: "<id>",
  partition: "<value>",
  connectionMetadata: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `connectionId`        | *string*              | :heavy_check_mark:    | N/A                   |
| `partition`           | *string*              | :heavy_check_mark:    | N/A                   |
| `connectionMetadata`  | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `limitType`           | *string*              | :heavy_check_mark:    | N/A                   |