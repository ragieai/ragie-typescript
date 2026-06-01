# Formula

## Example Usage

```typescript
import { Formula } from "ragie/models/components";

let value: Formula = {
  content: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `type`                                   | *"Formula"*                              | :heavy_minus_sign:                       | N/A                                      |
| `content`                                | *string*                                 | :heavy_check_mark:                       | The formula as plain text.               |
| `latex`                                  | *string*                                 | :heavy_minus_sign:                       | The LaTeX representation of the formula. |