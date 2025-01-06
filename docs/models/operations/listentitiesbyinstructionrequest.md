# ListEntitiesByInstructionRequest

## Example Usage

```typescript
import { ListEntitiesByInstructionRequest } from "ragie/models/operations";

let value: ListEntitiesByInstructionRequest = {
  instructionId: "00000000-0000-0000-0000-000000000000",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `instructionId`                                                                     | *string*                                                                            | :heavy_check_mark:                                                                  | The ID of the instruction.                                                          | 00000000-0000-0000-0000-000000000000                                                |
| `cursor`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | An opaque cursor for pagination                                                     |                                                                                     |
| `pageSize`                                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | The number of items per page (must be greater than 0 and less than or equal to 100) |                                                                                     |