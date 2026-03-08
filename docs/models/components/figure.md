# Figure

## Example Usage

```typescript
import { Figure } from "ragie/models/components";

let value: Figure = {
  content: "<value>",
  description: "indeed next in festival which t-shirt shovel quiet",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | *"Figure"*                                         | :heavy_minus_sign:                                 | N/A                                                |
| `content`                                          | *string*                                           | :heavy_check_mark:                                 | The text visible inside the visual (OCR)           |
| `description`                                      | *string*                                           | :heavy_check_mark:                                 | A detailed description of what the visual depicts. |
| `base64Data`                                       | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |