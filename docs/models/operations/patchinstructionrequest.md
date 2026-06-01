# PatchInstructionRequest

## Example Usage

```typescript
import { PatchInstructionRequest } from "ragie/models/operations";

let value: PatchInstructionRequest = {
  instructionId: "00000000-0000-0000-0000-000000000000",
  patchInstructionParams: {
    name: "Find all pizzas",
    active: true,
    scope: "document",
    prompt: "Find all pizzas described in the text.",
    contextTemplate: "Document: {{document.name}} {{document.metadata.key_foo}}",
    filter: {
      "toppings": {
        "$in": [
          "pizza",
          "mushrooms",
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `instructionId`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the instruction.                                                             | 00000000-0000-0000-0000-000000000000                                                   |
| `patchInstructionParams`                                                               | [components.PatchInstructionParams](../../models/components/patchinstructionparams.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |