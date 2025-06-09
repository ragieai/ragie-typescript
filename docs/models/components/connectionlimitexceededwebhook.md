# ConnectionLimitExceededWebhook

## Example Usage

```typescript
import { ConnectionLimitExceededWebhook } from "ragie/models/components";

let value: ConnectionLimitExceededWebhook = {
  nonce: "<value>",
  payload: {
    connectionId: "<id>",
    partition: "<value>",
    connectionMetadata: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `nonce`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `payload`                                                                                                            | [components.ConnectionLimitExceededWebhookPayload](../../models/components/connectionlimitexceededwebhookpayload.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |