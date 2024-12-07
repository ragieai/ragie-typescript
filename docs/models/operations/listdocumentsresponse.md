# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "3a3a8684-b65d-4e03-95df-fe4f31f3b0be",
        createdAt: new Date("2023-02-20T10:42:45.340Z"),
        updatedAt: new Date("2023-02-15T05:29:12.502Z"),
        status: "<value>",
        name: "<value>",
        metadata: {
          "key": false,
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