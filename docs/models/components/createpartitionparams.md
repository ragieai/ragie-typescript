# CreatePartitionParams

## Example Usage

```typescript
import { CreatePartitionParams } from "ragie/models/components";

let value: CreatePartitionParams = {
  name: "<value>",
  pagesHostedLimitMonthly: 1000,
  pagesProcessedLimitMonthly: 1000,
  pagesHostedLimitMax: 1000,
  pagesProcessedLimitMax: 1000,
  audioProcessedLimitMonthly: 60,
  audioProcessedLimitMax: 60,
  videoProcessedLimitMonthly: 60,
  videoProcessedLimitMax: 60,
  mediaStreamedLimitMonthly: 1024,
  mediaStreamedLimitMax: 1024,
  mediaHostedLimitMonthly: 1024,
  mediaHostedLimitMax: 1024,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `pagesHostedLimitMonthly`                                                  | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit of hosted pages added in the current month in the partition. | 1000                                                                       |
| `pagesProcessedLimitMonthly`                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in pages, for processed documents in the partition.         | 1000                                                                       |
| `pagesHostedLimitMax`                                                      | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in pages, for hosted documents in the partition.            | 1000                                                                       |
| `pagesProcessedLimitMax`                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in pages, for processed documents in the partition.         | 1000                                                                       |
| `audioProcessedLimitMonthly`                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in minutes, for audio processing in the partition.          | 60                                                                         |
| `audioProcessedLimitMax`                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in minutes, for audio processing in the partition.          | 60                                                                         |
| `videoProcessedLimitMonthly`                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in minutes, for video processing in the partition.          | 60                                                                         |
| `videoProcessedLimitMax`                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in minutes, for video processing in the partition.          | 60                                                                         |
| `mediaStreamedLimitMonthly`                                                | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in MBs, for media streamed from the partition.              | 1024                                                                       |
| `mediaStreamedLimitMax`                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in MBs, for media streamed from the partition.              | 1024                                                                       |
| `mediaHostedLimitMonthly`                                                  | *number*                                                                   | :heavy_minus_sign:                                                         | Monthly limit, in MBs, for media hosted in the partition.                  | 1024                                                                       |
| `mediaHostedLimitMax`                                                      | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum limit, in MBs, for media hosted in the partition.                  | 1024                                                                       |