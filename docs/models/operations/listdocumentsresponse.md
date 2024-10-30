# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "688a426f-2e87-4e7b-b6eb-b5ca32cf79d7",
        createdAt: new Date("2023-09-24T00:33:30.839Z"),
        updatedAt: new Date("2024-06-18T13:27:30.035Z"),
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