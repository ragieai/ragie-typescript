# Partition

## Example Usage

```typescript
import { Partition } from "ragie/models/components";

let value: Partition = {
  name: "<value>",
  isDefault: false,
  limitExceededAt: new Date("2024-09-03T19:01:30.335Z"),
  limits: {
    pagesProcessedLimitMonthly: 9255.76,
    pagesHostedLimitMonthly: null,
    pagesProcessedLimitMax: 2806.97,
    pagesHostedLimitMax: 1160.63,
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