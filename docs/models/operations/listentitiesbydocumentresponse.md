# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "9624999a-a6e5-46ec-ab1e-bf2d291dc961",
        createdAt: new Date("2023-05-13T01:59:12.211Z"),
        updatedAt: new Date("2024-03-02T08:57:01.759Z"),
        instructionId: "dfd05b28-030c-435e-bb02-993e989b4632",
        documentId: "b734064b-6201-4a78-8ef3-a40c569dad4c",
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