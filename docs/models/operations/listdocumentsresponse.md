# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "8b986a7e-f6c8-49e1-910d-cdfc7c1a2f86",
        createdAt: new Date("2024-04-28T13:26:34.681Z"),
        updatedAt: new Date("2023-05-15T22:34:42.019Z"),
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