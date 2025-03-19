# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "2159a6f5-badf-4ecb-9521-368cf119bdef",
        createdAt: new Date("2024-02-21T20:20:12.003Z"),
        updatedAt: new Date("2023-06-11T23:57:33.954Z"),
        instructionId: "aad17932-d071-47f6-ad14-66a5ba6691da",
        documentId: "816650b1-9baf-41d0-8868-5308d5311314",
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