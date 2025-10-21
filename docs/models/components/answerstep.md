# AnswerStep

## Example Usage

```typescript
import { AnswerStep } from "ragie/models/components";

let value: AnswerStep = {
  think: "<value>",
  currentQuestion: "<value>",
  answer: {
    text: "<value>",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `type`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `think`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `currentQuestion`                                                                                 | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `errored`                                                                                         | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `otherResolvedQuestionIds`                                                                        | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | A list of question ids that are no longer relevant to the current answer referenced by their IDs. |
| `answer`                                                                                          | [components.Answer](../../models/components/answer.md)                                            | :heavy_check_mark:                                                                                | N/A                                                                                               |