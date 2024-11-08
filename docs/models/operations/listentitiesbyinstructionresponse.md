# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "296ef849-e684-4763-a845-8c5ed04715ba",
        createdAt: new Date("2024-02-18T17:44:20.779Z"),
        updatedAt: new Date("2022-08-13T14:18:45.582Z"),
        instructionId: "5ae840b0-58e1-4605-b943-19baf0a99f0b",
        documentId: "85c178b1-369e-492f-9d8e-8edfe026f42e",
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