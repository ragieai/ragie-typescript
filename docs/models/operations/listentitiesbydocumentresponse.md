# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "e2a71b30-00eb-4ea8-94f5-76f25a197438",
        createdAt: new Date("2023-05-16T08:17:57.191Z"),
        updatedAt: new Date("2023-01-05T21:00:18.180Z"),
        instructionId: "f2159a6f-5bad-4fec-bb52-1368cf119bde",
        documentId: "662aad17-932d-4071-87f6-d1466a5ba669",
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