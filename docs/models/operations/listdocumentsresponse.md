# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "e465b327-4d38-4fad-afcb-ff71426296ef",
        createdAt: new Date("2022-10-29T04:57:33.054Z"),
        updatedAt: new Date("2023-10-12T02:01:44.166Z"),
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