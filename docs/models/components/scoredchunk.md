# ScoredChunk

## Example Usage

```typescript
import { ScoredChunk } from "ragie/models/components";

let value: ScoredChunk = {
  text: "<value>",
  score: 1856.36,
  id: "<id>",
  index: 952792,
  documentId: "<id>",
  documentName: "<value>",
  documentMetadata: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `text`                | *string*              | :heavy_check_mark:    | N/A                   |
| `score`               | *number*              | :heavy_check_mark:    | N/A                   |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `index`               | *number*              | :heavy_check_mark:    | N/A                   |
| `documentId`          | *string*              | :heavy_check_mark:    | N/A                   |
| `documentName`        | *string*              | :heavy_check_mark:    | N/A                   |
| `documentMetadata`    | Record<string, *any*> | :heavy_check_mark:    | N/A                   |