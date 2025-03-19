# SetPartitionLimitsPartitionsPartitionIdLimitsPutRequest

## Example Usage

```typescript
import { SetPartitionLimitsPartitionsPartitionIdLimitsPutRequest } from "ragie/models/operations";

let value: SetPartitionLimitsPartitionsPartitionIdLimitsPutRequest = {
  partitionId: "<id>",
  partitionLimitParams: {
    pagesHostedLimitMonthly: 1000,
    pagesProcessedLimitMonthly: 1000,
    pagesHostedLimitMax: 1000,
    pagesProcessedLimitMax: 1000,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `partitionId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `partitionLimitParams`                                                             | [components.PartitionLimitParams](../../models/components/partitionlimitparams.md) | :heavy_check_mark:                                                                 | N/A                                                                                |