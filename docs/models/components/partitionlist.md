# PartitionList

## Example Usage

```typescript
import { PartitionList } from "ragie/models/components";

let value: PartitionList = {
  pagination: {},
  partitions: [
    {
      name: "<value>",
      isDefault: false,
      limitExceededAt: new Date("2023-10-06T14:56:53.088Z"),
      limits: {
        pagesProcessedLimitMonthly: 8991.34,
        pagesHostedLimitMonthly: 860.13,
        pagesProcessedLimitMax: 3094.41,
        pagesHostedLimitMax: 7283.47,
      },
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |
| `partitions`                                                   | [components.Partition](../../models/components/partition.md)[] | :heavy_check_mark:                                             | N/A                                                            |