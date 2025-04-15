# ListPartitionsPartitionsGetResponse

## Example Usage

```typescript
import { ListPartitionsPartitionsGetResponse } from "ragie/models/operations";

let value: ListPartitionsPartitionsGetResponse = {
  result: {
    pagination: {},
    partitions: [
      {
        name: "<value>",
        isDefault: false,
        limitExceededAt: new Date("2025-03-18T10:00:46.466Z"),
        limits: {
          pagesProcessedLimitMonthly: 2986.78,
          pagesHostedLimitMonthly: 3745.4,
          pagesProcessedLimitMax: 8199.74,
          pagesHostedLimitMax: 5185.83,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.PartitionList](../../models/components/partitionlist.md) | :heavy_check_mark:                                                   | N/A                                                                  |