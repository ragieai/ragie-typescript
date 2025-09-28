# EvaluatedAnswerStep

## Example Usage

```typescript
import { EvaluatedAnswerStep } from "ragie/models/components";

let value: EvaluatedAnswerStep = {
  think: "<value>",
  currentQuestion: "<value>",
  answer: {
    text: "<value>",
  },
  evalPassed: true,
  evalReason: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `think`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `currentQuestion`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `answer`                                                                                           | [components.Answer](../../models/components/answer.md)                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `otherResolvedQuestionIds`                                                                         | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | A list of questions ids that are no longer relevant to the current answer referenced by their IDs. |
| `evalPassed`                                                                                       | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `evalReason`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |