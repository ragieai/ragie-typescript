# PartitionStats

## Example Usage

```typescript
import { PartitionStats } from "ragie/models/components";

let value: PartitionStats = {
  pagesProcessedMonthly: 1000,
  pagesHostedMonthly: 1000,
  pagesProcessedTotal: 1000,
  pagesHostedTotal: 1000,
  documentCount: 1000,
  videoProcessedMonthly: 60,
  videoProcessedTotal: 60,
  audioProcessedMonthly: 60,
  audioProcessedTotal: 60,
  mediaStreamedMonthly: 1024,
  mediaStreamedTotal: 1024,
  mediaHostedMonthly: 1024,
  mediaHostedTotal: 1024,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `pagesProcessedMonthly`                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | Number of pages processed in the current month in this partition.                  | 1000                                                                               |
| `pagesHostedMonthly`                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | Number of hosted pages added in the current month in this partition.               | 1000                                                                               |
| `pagesProcessedTotal`                                                              | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of pages processed in this partition.                                 | 1000                                                                               |
| `pagesHostedTotal`                                                                 | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of hosted pages in this partition.                                    | 1000                                                                               |
| `documentCount`                                                                    | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of documents, inclusive of all files types, in this partition.        | 1000                                                                               |
| `videoProcessedMonthly`                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of seconds of video processed in the current month in this partition. | 60                                                                                 |
| `videoProcessedTotal`                                                              | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of seconds of video processed in this partition.                      | 60                                                                                 |
| `audioProcessedMonthly`                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of seconds of audio processed in the current month in this partition. | 60                                                                                 |
| `audioProcessedTotal`                                                              | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of seconds of audio processed in this partition.                      | 60                                                                                 |
| `mediaStreamedMonthly`                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of MBs streamed in the current month in this partition.               | 1024                                                                               |
| `mediaStreamedTotal`                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of MBs streamed in this partition.                                    | 1024                                                                               |
| `mediaHostedMonthly`                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of MBs hosted in the current month in this partition.                 | 1024                                                                               |
| `mediaHostedTotal`                                                                 | *number*                                                                           | :heavy_check_mark:                                                                 | Total number of MBs hosted in this partition.                                      | 1024                                                                               |