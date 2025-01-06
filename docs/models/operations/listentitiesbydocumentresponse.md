# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "6d1466a5-ba66-491d-bab8-16650b19baf1",
        createdAt: new Date("2023-02-01T23:49:11.774Z"),
        updatedAt: new Date("2024-08-09T06:27:10.627Z"),
        instructionId: "685308d5-3113-4141-b1d2-8c723685cce0",
        documentId: "6ebfc586-547a-4481-920f-0291ebf848e8",
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