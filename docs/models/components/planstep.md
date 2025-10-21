# PlanStep

## Example Usage

```typescript
import { PlanStep } from "ragie/models/components";

let value: PlanStep = {
  think: "<value>",
  currentQuestion: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `type`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `think`                                                                 | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `currentQuestion`                                                       | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `errored`                                                               | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `questionsToAnswer`                                                     | *string*[]                                                              | :heavy_minus_sign:                                                      | The questions that need to be answered to answer the original question. |