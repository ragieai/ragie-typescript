# ScoredChunk

## Example Usage

```typescript
import { ScoredChunk } from "ragie/models/components";

let value: ScoredChunk = {
  text: "<value>",
  score: 670.96,
  id: "<id>",
  index: 476984,
  documentId: "<id>",
  documentName: "<value>",
  documentMetadata: {
    "key": "<value>",
  },
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
| `text`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `score`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `index`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `metadata`                                                         | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |
| `documentId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `documentName`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `documentMetadata`                                                 | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_check_mark:                                                 | N/A                                                                |