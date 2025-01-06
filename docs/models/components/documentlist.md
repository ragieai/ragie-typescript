# DocumentList

## Example Usage

```typescript
import { DocumentList } from "ragie/models/components";

let value: DocumentList = {
  pagination: {},
  documents: [
    {
      id: "56b0aa32-5597-4f13-b2a4-7321a235d1d1",
      createdAt: new Date("2024-05-28T15:24:04.349Z"),
      updatedAt: new Date("2025-12-06T12:43:25.190Z"),
      status: "<value>",
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