# Retrieval

## Example Usage

```typescript
import { Retrieval } from "ragie/models/components";

let value: Retrieval = {
  scoredChunks: [
    {
      text: "<value>",
      score: 5013.24,
      documentId: "<id>",
      documentMetadata: {
        "key": "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `scoredChunks`                                                     | [components.ScoredChunk](../../models/components/scoredchunk.md)[] | :heavy_check_mark:                                                 | N/A                                                                |