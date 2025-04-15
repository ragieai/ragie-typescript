# DocumentChunkList

## Example Usage

```typescript
import { DocumentChunkList } from "ragie/models/components";

let value: DocumentChunkList = {
  pagination: {},
  chunks: [
    {
      id: "e1609414-3d9d-4409-b46e-22a0629bb470",
      text: "<value>",
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |
| `chunks`                                                               | [components.DocumentChunk](../../models/components/documentchunk.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |