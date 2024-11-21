# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "0ebea84f-576f-425a-9197-438575f2159a",
        createdAt: new Date("2024-12-31T05:00:30.068Z"),
        updatedAt: new Date("2023-01-21T16:11:36.139Z"),
        instructionId: "badfecb5-2136-48cf-a119-bdef662aad17",
        documentId: "32d0717f-6d14-466a-85ba-6691dab81665",
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