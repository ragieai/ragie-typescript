# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "6f42e7e2-a71b-4300-80eb-ea84f576f25a",
        createdAt: new Date("2024-10-27T13:05:15.123Z"),
        updatedAt: new Date("2024-06-07T12:00:49.002Z"),
        status: "<value>",
        name: "<value>",
        metadata: {
          "key": 238413,
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