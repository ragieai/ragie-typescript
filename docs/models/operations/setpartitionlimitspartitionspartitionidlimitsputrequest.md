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
    videoProcessedLimitMonthly: 3600,
    videoProcessedLimitMax: 3600,
    audioProcessedLimitMonthly: 3600,
    audioProcessedLimitMax: 3600,
    mediaStreamedLimitMonthly: 1024,
    mediaStreamedLimitMax: 1024,
    mediaHostedLimitMonthly: 1024,
    mediaHostedLimitMax: 1024,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `partitionId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `partitionLimitParams`                                                             | [components.PartitionLimitParams](../../models/components/partitionlimitparams.md) | :heavy_check_mark:                                                                 | N/A                                                                                |