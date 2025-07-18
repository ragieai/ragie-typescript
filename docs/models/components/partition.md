# Partition

## Example Usage

```typescript
import { Partition } from "ragie/models/components";

let value: Partition = {
  name: "<value>",
  isDefault: false,
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `isDefault`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `limitExceededAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the partition exceeded its limits, if applicable.                              | 2025-06-11T12:00:00Z                                                                          |
| `limits`                                                                                      | [components.PartitionLimits](../../models/components/partitionlimits.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |