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
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `name`                       | *string*                     | :heavy_check_mark:           | N/A                          |                              |
| `pagesHostedLimitMonthly`    | *number*                     | :heavy_minus_sign:           | N/A                          | 1000                         |
| `pagesProcessedLimitMonthly` | *number*                     | :heavy_minus_sign:           | N/A                          | 1000                         |
| `pagesHostedLimitMax`        | *number*                     | :heavy_minus_sign:           | N/A                          | 1000                         |
| `pagesProcessedLimitMax`     | *number*                     | :heavy_minus_sign:           | N/A                          | 1000                         |