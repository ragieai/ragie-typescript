# DocumentChunkList

## Example Usage

```typescript
import { DocumentChunkList } from "ragie/models/components";

let value: DocumentChunkList = {
  pagination: {},
  chunks: [
    {
      id: "904a4962-4999-4aa6-be56-ecb1ebf2d291",
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |
| `chunks`                                                               | [components.DocumentChunk](../../models/components/documentchunk.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |