# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "a0688a42-6f2e-487e-b7b6-ebb5ca32cf79",
        createdAt: new Date("2023-05-17T02:48:20.581Z"),
        updatedAt: new Date("2024-11-09T06:06:22.459Z"),
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