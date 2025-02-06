# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "99f0bd85-c178-4b13-869e-92fd8e8edfe0",
        createdAt: new Date("2024-03-02T11:47:54.767Z"),
        updatedAt: new Date("2025-11-09T13:09:41.435Z"),
        status: "<value>",
        name: "<value>",
        metadata: {
          "key": 160467,
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