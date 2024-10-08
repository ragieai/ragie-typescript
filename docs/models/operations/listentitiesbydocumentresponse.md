# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "1426296e-f849-4e68-8476-38458c5ed047",
        createdAt: new Date("2023-01-17T22:18:44.696Z"),
        updatedAt: new Date("2024-03-22T03:31:31.130Z"),
        instructionId: "a9b35ae8-40b0-458e-a160-594319baf0a9",
        documentId: "f0bd85c1-78b1-4369-be92-fd8e8edfe026",
        data: {
          "key": "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `result`                                                       | [components.EntityList](../../models/components/entitylist.md) | :heavy_check_mark:                                             | N/A                                                            |