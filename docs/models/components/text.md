# Text

## Example Usage

```typescript
import { Text } from "ragie/models/components";

let value: Text = {
  content: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `type`                               | *"Text"*                             | :heavy_minus_sign:                   | N/A                                  |
| `content`                            | *string*                             | :heavy_check_mark:                   | The text content                     |
| `handwritten`                        | *boolean*                            | :heavy_minus_sign:                   | True if handwritten, false otherwise |