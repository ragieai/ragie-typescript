# PartitionLimitExceededWebhookPayload

## Example Usage

```typescript
import { PartitionLimitExceededWebhookPayload } from "ragie/models/components";

let value: PartitionLimitExceededWebhookPayload = {
  partition: "<value>",
  limitType: "pages_processed_limit_max",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `partition`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `limitType`                                                  | [components.LimitType](../../models/components/limittype.md) | :heavy_check_mark:                                           | N/A                                                          |