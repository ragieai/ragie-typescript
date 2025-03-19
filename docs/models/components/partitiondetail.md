# PartitionDetail

## Example Usage

```typescript
import { PartitionDetail } from "ragie/models/components";

let value: PartitionDetail = {
  name: "<value>",
  isDefault: false,
  limitExceededAt: new Date("2024-11-14T03:08:35.085Z"),
  limits: {
    pagesProcessedLimitMonthly: 8869.61,
    pagesHostedLimitMonthly: 6188.26,
    pagesProcessedLimitMax: 1334.61,
    pagesHostedLimitMax: 9805.81,
  },
  stats: {
    pagesProcessedMonthly: 8717.86,
    pagesHostedMonthly: 5027.21,
    pagesProcessedTotal: 9223.48,
    pagesHostedTotal: 5413.81,
    documentCount: 923306,
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