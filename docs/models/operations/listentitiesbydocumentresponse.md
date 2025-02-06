# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "816650b1-9baf-41d0-8868-5308d5311314",
        createdAt: new Date("2023-03-13T21:40:13.537Z"),
        updatedAt: new Date("2025-07-27T11:29:19.064Z"),
        instructionId: "28c72368-5cce-40e6-8ebf-c586547a4812",
        documentId: "f0291ebf-848e-484e-8503-5d775eff6fca",
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