# DocumentList

## Example Usage

```typescript
import { DocumentList } from "ragie/models/components";

let value: DocumentList = {
  pagination: {},
  documents: [
    {
      id: "1f3b0be4-65b3-4274-9d38-fadfcbff7142",
      createdAt: new Date("2022-05-24T21:26:04.186Z"),
      updatedAt: new Date("2023-10-25T02:42:52.981Z"),
      status: "<value>",
      name: "<value>",
      metadata: {
        "key": 895386,
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