# DocumentMetadataUpdate

## Example Usage

```typescript
import { DocumentMetadataUpdate } from "ragie/models/components";

let value: DocumentMetadataUpdate = {
  metadata: {
    "editors": [
      "Alice",
      "Bob",
    ],
    "title": "declassified report",
    "unchanged_key": "unchanged_value",
    "updated_at": 1714491736216,
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                         | Record<string, *components.DocumentMetadataUpdateMetadata*>                                                                        | :heavy_check_mark:                                                                                                                 | The full document metadata inclusive of the update.                                                                                | {<br/>"editors": [<br/>"Alice",<br/>"Bob"<br/>],<br/>"title": "declassified report",<br/>"unchanged_key": "unchanged_value",<br/>"updated_at": 1714491736216<br/>} |