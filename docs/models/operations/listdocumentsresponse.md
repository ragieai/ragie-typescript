# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {
      totalCount: 18197,
    },
    documents: [
      {
        status: "<value>",
        id: "08ad32d2-d65d-47f3-bdf4-475a654a2355",
        createdAt: new Date("2024-06-20T22:49:52.888Z"),
        updatedAt: new Date("2025-05-02T15:35:12.818Z"),
        name: "<value>",
        metadata: {
          "key": 704761,
        },
        partition: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `result`                                                           | [components.DocumentList](../../models/components/documentlist.md) | :heavy_check_mark:                                                 | N/A                                                                |