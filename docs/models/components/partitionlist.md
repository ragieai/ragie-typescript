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
      limitExceededAt: new Date("2025-11-21T04:42:37.776Z"),
      limits: {
        pagesProcessedLimitMonthly: 168.71,
        pagesHostedLimitMonthly: 6964.83,
        pagesProcessedLimitMax: 8136.79,
        pagesHostedLimitMax: 5098.07,
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