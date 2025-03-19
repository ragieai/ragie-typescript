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
        limitExceededAt: new Date("2025-02-22T19:07:41.165Z"),
        limits: {
          pagesProcessedLimitMonthly: 5580.51,
          pagesHostedLimitMonthly: 7049.48,
          pagesProcessedLimitMax: 4186.37,
          pagesHostedLimitMax: 53.1,
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