# PartitionList

## Example Usage

```typescript
import { PartitionList } from "ragie/models/components";

let value: PartitionList = {
  pagination: {
    totalCount: 254218,
  },
  partitions: [
    {
      name: "<value>",
      isDefault: false,
      limitExceededAt: new Date("2025-09-12T10:48:16.840Z"),
      limits: {
        pagesProcessedLimitMonthly: 860.13,
        pagesHostedLimitMonthly: 3094.41,
        pagesProcessedLimitMax: 7283.47,
        pagesHostedLimitMax: 3512.28,
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