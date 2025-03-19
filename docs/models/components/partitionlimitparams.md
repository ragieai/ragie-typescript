# PartitionLimitParams

## Example Usage

```typescript
import { PartitionLimitParams } from "ragie/models/components";

let value: PartitionLimitParams = {
  pagesHostedLimitMonthly: 1000,
  pagesProcessedLimitMonthly: 1000,
  pagesHostedLimitMax: 1000,
  pagesProcessedLimitMax: 1000,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `pagesHostedLimitMonthly`    | *number*                     | :heavy_minus_sign:           | N/A                          | 1000                         |
| `pagesProcessedLimitMonthly` | *number*                     | :heavy_minus_sign:           | N/A                          | 1000                         |
| `pagesHostedLimitMax`        | *number*                     | :heavy_minus_sign:           | N/A                          | 1000                         |
| `pagesProcessedLimitMax`     | *number*                     | :heavy_minus_sign:           | N/A                          | 1000                         |