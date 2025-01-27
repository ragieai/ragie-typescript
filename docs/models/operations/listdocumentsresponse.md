# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "ragie/models/operations";

let value: ListDocumentsResponse = {
  result: {
    pagination: {},
    documents: [
      {
        id: "0a99f0bd-85c1-478b-b136-9e92fd8e8edf",
        createdAt: new Date("2023-02-09T11:50:00.721Z"),
        updatedAt: new Date("2023-07-11T13:12:10.070Z"),
        status: "<value>",
        name: "<value>",
        metadata: {
          "key": 952143,
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