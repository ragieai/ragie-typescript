# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "1d28c723-685c-4ce0-8e6e-bfc586547a48",
        createdAt: new Date("2023-06-25T04:34:13.531Z"),
        updatedAt: new Date("2023-02-21T07:11:39.675Z"),
        instructionId: "f0291ebf-848e-484e-8503-5d775eff6fca",
        documentId: "32e477cd-26dd-4124-9161-9391fe63470a",
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