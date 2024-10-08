# ListEntitiesByInstructionRequest

## Example Usage

```typescript
import { ListEntitiesByInstructionRequest } from "ragie/models/operations";

let value: ListEntitiesByInstructionRequest = {
  instructionId: "<INSTRUCTION_ID>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `instructionId`                                                                     | *string*                                                                            | :heavy_check_mark:                                                                  | The ID of the instruction.                                                          | <INSTRUCTION_ID>                                                                    |
| `cursor`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | An opaque cursor for pagination                                                     |                                                                                     |
| `pageSize`                                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | The number of items per page (must be greater than 0 and less than or equal to 100) |                                                                                     |