# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "71b3000e-bea8-44f5-b76f-25a197438575",
        createdAt: new Date("2023-05-27T05:59:26.925Z"),
        updatedAt: new Date("2023-04-17T02:19:52.263Z"),
        instructionId: "59a6f5ba-dfec-4b52-8136-8cf119bdef66",
        documentId: "aad17932-d071-47f6-ad14-66a5ba6691da",
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