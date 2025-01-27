# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "2a71b300-0ebe-4a84-9f57-6f25a1974385",
        createdAt: new Date("2024-01-05T21:00:18.180Z"),
        updatedAt: new Date("2025-11-29T15:51:58.019Z"),
        instructionId: "2159a6f5-badf-4ecb-9521-368cf119bdef",
        documentId: "62aad179-32d0-4717-bf6d-1466a5ba6691",
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