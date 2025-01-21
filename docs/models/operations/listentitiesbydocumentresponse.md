# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "1dab8166-50b1-49ba-8f1d-08685308d531",
        createdAt: new Date("2023-08-31T15:36:43.644Z"),
        updatedAt: new Date("2023-04-20T14:46:11.490Z"),
        instructionId: "411d28c7-2368-45cc-9e0e-6ebfc586547a",
        documentId: "8120f029-1ebf-4848-9e84-e5035d775eff",
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