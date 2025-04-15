# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "f312a36a-6c78-4d73-a238-fb3ebb49e886",
        createdAt: new Date("2025-07-27T22:41:14.913Z"),
        updatedAt: new Date("2025-05-04T00:00:17.371Z"),
        instructionId: "6434bac7-3ded-40eb-91a6-b5afa62f2ff7",
        documentId: "d369de78-7229-4b9c-bd26-210c37455135",
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