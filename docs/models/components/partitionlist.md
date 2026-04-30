# PartitionList

## Example Usage

```typescript
import { PartitionList } from "ragie/models/components";

let value: PartitionList = {
  pagination: {
    totalCount: 18197,
  },
  partitions: [],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |
| `partitions`                                                   | [components.Partition](../../models/components/partition.md)[] | :heavy_check_mark:                                             | N/A                                                            |