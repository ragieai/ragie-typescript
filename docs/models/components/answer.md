# Answer

## Example Usage

```typescript
import { Answer } from "ragie/models/components";

let value: Answer = {
  text: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `text`                                  | *string*                                | :heavy_check_mark:                      | An answer to a question.                |
| `evidence`                              | *string*[]                              | :heavy_minus_sign:                      | The evidence used to derive the answer. |