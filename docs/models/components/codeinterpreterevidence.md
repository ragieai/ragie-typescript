# CodeInterpreterEvidence

## Example Usage

```typescript
import { CodeInterpreterEvidence } from "ragie/models/components";

let value: CodeInterpreterEvidence = {
  text: "<value>",
  code: "<value>",
  codeIssue: "<value>",
  codeResult: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `type`                                        | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `text`                                        | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `code`                                        | *string*                                      | :heavy_check_mark:                            | The code that was executed.                   |
| `codeIssue`                                   | *string*                                      | :heavy_check_mark:                            | The issue that the code was written to solve. |
| `codeResult`                                  | *string*                                      | :heavy_check_mark:                            | The result of the code that was executed.     |