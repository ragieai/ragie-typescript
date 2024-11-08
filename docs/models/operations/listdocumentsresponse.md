# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "fe4f31f3-b0be-4465-bb32-74d38fadfcbf",
        createdAt: new Date("2023-05-11T04:43:03.147Z"),
        updatedAt: new Date("2022-03-19T16:09:31.123Z"),
        status: "<value>",
        name: "<value>",
        metadata: {
          "key": 152354,
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