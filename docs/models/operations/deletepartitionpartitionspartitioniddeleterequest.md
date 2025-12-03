# DeletePartitionPartitionsPartitionIdDeleteRequest

## Example Usage

```typescript
import { DeletePartitionPartitionsPartitionIdDeleteRequest } from "ragie/models/operations";

let value: DeletePartitionPartitionsPartitionIdDeleteRequest = {
  partitionId: "<id>",
  async: true,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `partitionId`                                        | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |                                                      |
| `async`                                              | *boolean*                                            | :heavy_minus_sign:                                   | If true, performs partition deletion asynchronously. | true                                                 |