# SurrenderStep

## Example Usage

```typescript
import { SurrenderStep } from "ragie/models/components";

let value: SurrenderStep = {
  think: "<value>",
  currentQuestion: "<value>",
  partialAnswer: {
    text: "<value>",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `think`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `currentQuestion`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `partialAnswer`                                        | [components.Answer](../../models/components/answer.md) | :heavy_check_mark:                                     | N/A                                                    |