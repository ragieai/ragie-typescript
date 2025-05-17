# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {
      totalCount: 940486,
    },
    entities: [
      {
        id: "312a36a6-c78d-4732-b38f-b3ebb49e8869",
        createdAt: new Date("2025-05-04T00:00:17.371Z"),
        updatedAt: new Date("2024-03-15T19:18:06.815Z"),
        instructionId: "434bac73-ded0-4eb1-ba6b-5afa62f2ff77",
        documentId: "369de787-229b-49cd-9262-10c37455135f",
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