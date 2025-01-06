# DocumentChunkList

## Example Usage

```typescript
import { DocumentChunkList } from "ragie/models/components";

let value: DocumentChunkList = {
  pagination: {},
  chunks: [
    {
      id: "b8fa6904-a496-4249-899a-a6e56ecb1ebf",
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