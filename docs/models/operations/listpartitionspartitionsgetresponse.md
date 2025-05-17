# ListPartitionsPartitionsGetResponse

## Example Usage

```typescript
import { ListPartitionsPartitionsGetResponse } from "ragie/models/operations";

let value: ListPartitionsPartitionsGetResponse = {
  result: {
    pagination: {
      totalCount: 736695,
    },
    partitions: [
      {
        name: "<value>",
        isDefault: false,
        limitExceededAt: new Date("2023-11-24T08:25:22.454Z"),
        limits: {
          pagesProcessedLimitMonthly: 3745.4,
          pagesHostedLimitMonthly: 8199.74,
          pagesProcessedLimitMax: 5185.83,
          pagesHostedLimitMax: 7443.46,
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