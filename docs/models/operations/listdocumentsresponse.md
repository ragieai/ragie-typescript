# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "319baf0a-99f0-4bd8-a5c1-78b1369e92fd",
        createdAt: new Date("2025-10-07T21:26:28.728Z"),
        updatedAt: new Date("2024-08-16T08:28:49.436Z"),
        status: "<value>",
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