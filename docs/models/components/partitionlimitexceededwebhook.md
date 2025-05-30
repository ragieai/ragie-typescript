# PartitionLimitExceededWebhook

## Example Usage

```typescript
import { PartitionLimitExceededWebhook } from "ragie/models/components";

let value: PartitionLimitExceededWebhook = {
  nonce: "<value>",
  payload: {
    partition: "<value>",
    limitType: "pages_hosted_limit_monthly",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `nonce`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `payload`                                                                                                          | [components.PartitionLimitExceededWebhookPayload](../../models/components/partitionlimitexceededwebhookpayload.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |