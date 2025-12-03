# CodeStep

## Example Usage

```typescript
import { CodeStep } from "ragie/models/components";

let value: CodeStep = {
  think: "<value>",
  currentQuestion: "<value>",
  codeIssue: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `type`                                                                | *"code"*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `think`                                                               | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `currentQuestion`                                                     | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `errored`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | N/A                                                                   |
| `codeIssue`                                                           | *string*                                                              | :heavy_check_mark:                                                    | The natural language description of the code issue you need to solve. |
| `code`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | The code you generated to solve the code issue.                       |
| `codeResult`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | The result of the code you generated after executing it.              |