# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "ab816650-b19b-4af1-8d08-685308d53113",
        createdAt: new Date("2023-10-18T11:36:15.213Z"),
        updatedAt: new Date("2023-03-14T11:59:43.625Z"),
        instructionId: "1d28c723-685c-4ce0-8e6e-bfc586547a48",
        documentId: "20f0291e-bf84-48e8-b4e5-035d775eff6f",
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