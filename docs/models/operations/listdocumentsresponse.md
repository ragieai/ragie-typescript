# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "0be465b3-274d-438f-badf-cbff71426296",
        createdAt: new Date("2024-11-26T16:52:15.770Z"),
        updatedAt: new Date("2023-08-23T09:15:37.633Z"),
        status: "<value>",
        name: "<value>",
        metadata: {
          "key": 592231,
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