# Retrieval

## Example Usage

```typescript
import { Retrieval } from "ragie/models/components";

let value: Retrieval = {
  scoredChunks: [
    {
      text: "<value>",
      score: 2735.42,
      id: "<id>",
      index: 798047,
      documentId: "<id>",
      documentName: "<value>",
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