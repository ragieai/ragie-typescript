# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "ba6691da-b816-4650-ab19-baf1d0868530",
        createdAt: new Date("2025-07-12T16:24:09.346Z"),
        updatedAt: new Date("2024-02-14T01:04:21.000Z"),
        instructionId: "31131411-d28c-4723-9685-cce0e6ebfc58",
        documentId: "547a4812-0f02-491e-9bf8-48e84e5035d7",
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