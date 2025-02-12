# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "f0a99f0b-d85c-4178-bb13-69e92fd8e8ed",
        createdAt: new Date("2025-10-05T01:58:01.397Z"),
        updatedAt: new Date("2023-02-09T11:50:00.721Z"),
        status: "<value>",
        name: "<value>",
        metadata: {
          "key": "<value>",
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