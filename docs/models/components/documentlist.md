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
      id: "9fa669e2-e04b-41be-8e1a-ae2e77822ddb",
      createdAt: new Date("2025-12-22T21:06:26.072Z"),
      updatedAt: new Date("2024-01-05T00:35:31.377Z"),
      name: "<value>",
      metadata: {
        "key": true,
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