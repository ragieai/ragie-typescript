# UpdateInstructionParams

## Example Usage

```typescript
import { UpdateInstructionParams } from "ragie/models/components";

let value: UpdateInstructionParams = {
  active: true,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                            | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | Whether the instruction is active. Active instructions are applied to documents when they're created or when their file is updated. | true                                                                                                                                |