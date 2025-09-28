# FinalAnswer

## Example Usage

```typescript
import { FinalAnswer } from "ragie/models/components";

let value: FinalAnswer = {
  text: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `text`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The final answer to the question.                                                                |
| `evidence`                                                                                       | *components.Evidence*[]                                                                          | :heavy_minus_sign:                                                                               | The evidence used to derive the answer.                                                          |
| `steps`                                                                                          | *components.Steps*[]                                                                             | :heavy_minus_sign:                                                                               | The steps that led to the answer.                                                                |
| `usage`                                                                                          | [components.AgentHoppsModelsModelsUsage](../../models/components/agenthoppsmodelsmodelsusage.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |