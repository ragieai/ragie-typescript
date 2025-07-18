# ListPartitionsPartitionsGetResponse

## Example Usage

```typescript
import { ListPartitionsPartitionsGetResponse } from "ragie/models/operations";

let value: ListPartitionsPartitionsGetResponse = {
  result: {
    pagination: {
      totalCount: 878808,
    },
    partitions: [
      {
        name: "<value>",
        isDefault: true,
        limitExceededAt: new Date("2025-06-11T12:00:00Z"),
        limits: {
          pagesProcessedLimitMonthly: 1000,
          pagesHostedLimitMonthly: 1000,
          pagesProcessedLimitMax: 1000,
          pagesHostedLimitMax: 1000,
          videoProcessedLimitMonthly: 60,
          videoProcessedLimitMax: 60,
          audioProcessedLimitMonthly: 60,
          audioProcessedLimitMax: 60,
          mediaStreamedLimitMonthly: 1024,
          mediaStreamedLimitMax: 1024,
          mediaHostedLimitMonthly: 1024,
          mediaHostedLimitMax: 1024,
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