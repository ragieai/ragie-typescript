# Partition

## Example Usage

```typescript
import { Partition } from "ragie/models/components";

let value: Partition = {
  name: "<value>",
  isDefault: false,
  limitExceededAt: new Date("2025-04-25T22:48:45.167Z"),
  limits: {
    pagesProcessedLimitMonthly: 5401.94,
    pagesHostedLimitMonthly: 5582.05,
    pagesProcessedLimitMax: 1088.01,
    pagesHostedLimitMax: 9255.76,
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