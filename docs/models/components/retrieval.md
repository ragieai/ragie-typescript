# Retrieval

## Example Usage

```typescript
import { Retrieval } from "ragie/models/components";

let value: Retrieval = {
  scoredChunks: [
    {
      text: "<value>",
      score: 2691.35,
      id: "<id>",
      index: 522812,
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
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `scoredChunks`                                                     | [components.ScoredChunk](../../models/components/scoredchunk.md)[] | :heavy_check_mark:                                                 | N/A                                                                |