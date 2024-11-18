# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "ebea84f5-76f2-45a1-b974-38575f2159a6",
        createdAt: new Date("2023-01-21T16:11:36.139Z"),
        updatedAt: new Date("2024-03-01T15:52:51.579Z"),
        instructionId: "adfecb52-1368-4cf1-819b-def662aad179",
        documentId: "2d0717f6-d146-46a5-aba6-691dab816650",
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