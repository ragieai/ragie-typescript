# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "0594319b-af0a-499f-a0bd-85c178b1369e",
        createdAt: new Date("2023-05-27T06:34:13.913Z"),
        updatedAt: new Date("2025-12-10T17:10:47.327Z"),
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