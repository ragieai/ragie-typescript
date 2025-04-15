# DocumentChunk

## Example Usage

```typescript
import { DocumentChunk } from "ragie/models/components";

let value: DocumentChunk = {
  id: "acc9963a-0538-46b3-957f-f757d942f89b",
  text: "<value>",
  links: {
    "key": {
      href: "<value>",
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `index`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `text`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `metadata`                                                         | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_check_mark:                                                 | N/A                                                                |