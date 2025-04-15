# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        status: "<value>",
        id: "008ad32d-2d65-4d7f-93df-4475a654a235",
        createdAt: new Date("2025-04-14T07:27:02.537Z"),
        updatedAt: new Date("2024-06-20T22:49:52.888Z"),
        name: "<value>",
        metadata: {
          "key": [
            "<value>",
          ],
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