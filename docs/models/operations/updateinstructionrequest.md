# UpdateInstructionRequest

## Example Usage

```typescript
import { UpdateInstructionRequest } from "ragie/models/operations";

let value: UpdateInstructionRequest = {
  instructionId: "<INSTRUCTION_ID>",
  updateInstructionParams: {
    active: true,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `instructionId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of the instruction.                                                               | <INSTRUCTION_ID>                                                                         |
| `updateInstructionParams`                                                                | [components.UpdateInstructionParams](../../models/components/updateinstructionparams.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |