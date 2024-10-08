# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "ed2a6164-d0f5-4502-96e1-fd7539006143",
        createdAt: new Date("2022-05-24T15:16:36.486Z"),
        updatedAt: new Date("2022-01-14T04:36:02.905Z"),
        instructionId: "19ff62a7-f1c4-43a3-ba86-84b65de035df",
        documentId: "e4f31f3b-0be4-465b-9327-4d38fadfcbff",
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