# DocumentList

## Example Usage

```typescript
import { DocumentList } from "ragie/models/components";

let value: DocumentList = {
  pagination: {
    totalCount: 878808,
  },
  documents: [
    {
      status: "<value>",
      id: "c9fa669e-2e04-4b1b-aee1-aae2e77822dd",
      createdAt: new Date("2023-01-16T04:16:13.143Z"),
      updatedAt: new Date("2024-12-22T21:06:26.072Z"),
      name: "<value>",
      metadata: {
        "key": "<value>",
      },
      partition: "<value>",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |
| `documents`                                                    | [components.Document](../../models/components/document.md)[]   | :heavy_check_mark:                                             | N/A                                                            |