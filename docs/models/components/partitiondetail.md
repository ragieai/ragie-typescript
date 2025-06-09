# PartitionDetail

## Example Usage

```typescript
import { PartitionDetail } from "ragie/models/components";

let value: PartitionDetail = {
  name: "<value>",
  isDefault: true,
  limitExceededAt: new Date("2025-09-13T15:13:01.622Z"),
  limits: {
    pagesProcessedLimitMonthly: 9255.76,
    pagesHostedLimitMonthly: null,
    pagesProcessedLimitMax: 2806.97,
    pagesHostedLimitMax: 1160.63,
  },
  stats: {
    pagesProcessedMonthly: 9246.23,
    pagesHostedMonthly: 9599.05,
    pagesProcessedTotal: 4315.89,
    pagesHostedTotal: 5076.26,
    documentCount: 930151,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isDefault`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limitExceededAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limits`                                                                                      | [components.PartitionLimits](../../models/components/partitionlimits.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `stats`                                                                                       | [components.PartitionStats](../../models/components/partitionstats.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |