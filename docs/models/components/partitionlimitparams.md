# PartitionLimitParams

## Example Usage

```typescript
import { PartitionLimitParams } from "ragie/models/components";

let value: PartitionLimitParams = {
  pagesHostedLimitMonthly: 1000,
  pagesProcessedLimitMonthly: 1000,
  pagesHostedLimitMax: 1000,
  pagesProcessedLimitMax: 1000,
  videoProcessedLimitMonthly: 3600,
  videoProcessedLimitMax: 3600,
  audioProcessedLimitMonthly: 3600,
  audioProcessedLimitMax: 3600,
  mediaStreamedLimitMonthly: 1024,
  mediaStreamedLimitMax: 1024,
  mediaHostedLimitMonthly: 1024,
  mediaHostedLimitMax: 1024,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `pagesHostedLimitMonthly`                                                  | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit of hosted pages added in the current month in the partition. | 1000                                                                       |
| `pagesProcessedLimitMonthly`                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in pages, for processed documents in the partition.         | 1000                                                                       |
| `pagesHostedLimitMax`                                                      | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in pages, for hosted documents in the partition.            | 1000                                                                       |
| `pagesProcessedLimitMax`                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in pages, for processed documents in the partition.         | 1000                                                                       |
| `videoProcessedLimitMonthly`                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in minutes, for video processing in the partition.          | 3600                                                                       |
| `videoProcessedLimitMax`                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in minutes, for video processing in the partition.          | 3600                                                                       |
| `audioProcessedLimitMonthly`                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in minutes, for audio processing in the partition.          | 3600                                                                       |
| `audioProcessedLimitMax`                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in minutes, for audio processing in the partition.          | 3600                                                                       |
| `mediaStreamedLimitMonthly`                                                | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in MBs, for media streamed from the partition.              | 1024                                                                       |
| `mediaStreamedLimitMax`                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in MBs, for media streamed from the partition.              | 1024                                                                       |
| `mediaHostedLimitMonthly`                                                  | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in MBs, for media hosted in the partition.                  | 1024                                                                       |
| `mediaHostedLimitMax`                                                      | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in MBs, for media hosted in the partition.                  | 1024                                                                       |