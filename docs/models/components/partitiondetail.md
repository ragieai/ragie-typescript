# PartitionDetail

## Example Usage

```typescript
import { PartitionDetail } from "ragie/models/components";

let value: PartitionDetail = {
  name: "<value>",
  isDefault: false,
  limitExceededAt: new Date("2023-05-03T00:00:03.241Z"),
  limits: {
    pagesProcessedLimitMonthly: 8331.52,
    pagesHostedLimitMonthly: 9002.14,
    pagesProcessedLimitMax: 9246.23,
    pagesHostedLimitMax: 9599.05,
  },
  stats: {
    pagesProcessedMonthly: 4315.89,
    pagesHostedMonthly: 5076.26,
    pagesProcessedTotal: 9301.51,
    pagesHostedTotal: 6751.33,
    documentCount: 624393,
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