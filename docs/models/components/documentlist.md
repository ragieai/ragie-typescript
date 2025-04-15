# DocumentList

## Example Usage

```typescript
import { DocumentList } from "ragie/models/components";

let value: DocumentList = {
  pagination: {},
  documents: [
    {
      status: "<value>",
      id: "ec9fa669-e2e0-44b1-bbee-1aae2e77822d",
      createdAt: new Date("2025-02-17T08:51:39.871Z"),
      updatedAt: new Date("2023-01-16T04:16:13.143Z"),
      name: "<value>",
      metadata: {
        "key": false,
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