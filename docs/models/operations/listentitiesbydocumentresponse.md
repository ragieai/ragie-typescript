# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "26296ef8-49e6-4847-a638-458c5ed04715",
        createdAt: new Date("2024-01-16T20:15:10.483Z"),
        updatedAt: new Date("2023-11-14T03:12:00.033Z"),
        instructionId: "b35ae840-b058-4e16-8059-4319baf0a99f",
        documentId: "bd85c178-b136-49e9-82fd-8e8edfe026f4",
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