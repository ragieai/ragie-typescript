# PartitionDetail

## Example Usage

```typescript
import { PartitionDetail } from "ragie/models/components";

let value: PartitionDetail = {
  name: "<value>",
  isDefault: true,
  limitExceededAt: new Date("2025-06-11T12:00:00Z"),
  limits: {
    pagesProcessedLimitMonthly: 1000,
    pagesHostedLimitMonthly: 1000,
    pagesProcessedLimitMax: 1000,
    pagesHostedLimitMax: 1000,
    videoProcessedLimitMonthly: 60,
    videoProcessedLimitMax: 60,
    audioProcessedLimitMonthly: 60,
    audioProcessedLimitMax: 60,
    mediaStreamedLimitMonthly: 1024,
    mediaStreamedLimitMax: 1024,
    mediaHostedLimitMonthly: 1024,
    mediaHostedLimitMax: 1024,
  },
  stats: {
    pagesProcessedMonthly: 1000,
    pagesHostedMonthly: 1000,
    pagesProcessedTotal: 1000,
    pagesHostedTotal: 1000,
    documentCount: 1000,
    videoProcessedMonthly: 60,
    videoProcessedTotal: 60,
    audioProcessedMonthly: 60,
    audioProcessedTotal: 60,
    mediaStreamedMonthly: 1024,
    mediaStreamedTotal: 1024,
    mediaHostedMonthly: 1024,
    mediaHostedTotal: 1024,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `isDefault`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `limitExceededAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the partition exceeded its limits, if applicable.                              | 2025-06-11T12:00:00Z                                                                          |
| `limits`                                                                                      | [components.PartitionLimits](../../models/components/partitionlimits.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `stats`                                                                                       | [components.PartitionStats](../../models/components/partitionstats.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |