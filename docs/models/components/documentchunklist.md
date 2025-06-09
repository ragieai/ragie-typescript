# DocumentChunkList

## Example Usage

```typescript
import { DocumentChunkList } from "ragie/models/components";

let value: DocumentChunkList = {
  pagination: {
    totalCount: 878808,
  },
  chunks: [
    {
      id: "16094143-d9d4-4094-a6e2-2a0629bb470c",
      text: "<value>",
      links: {},
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |
| `chunks`                                                               | [components.DocumentChunk](../../models/components/documentchunk.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |