# Partition

## Example Usage

```typescript
import { Partition } from "ragie/models/components";

let value: Partition = {
  name: "<value>",
  isDefault: false,
  limitExceededAt: new Date("2024-01-02T00:36:42.947Z"),
  limits: {
    pagesProcessedLimitMonthly: 7908.4,
    pagesHostedLimitMonthly: 972.43,
    pagesProcessedLimitMax: 4420.36,
    pagesHostedLimitMax: 5199.52,
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