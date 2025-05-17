# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {
      totalCount: 233838,
    },
    entities: [
      {
        id: "ae1a36f0-847a-44c6-bc6b-19ca28d7aebe",
        createdAt: new Date("2025-04-29T12:57:19.878Z"),
        updatedAt: new Date("2023-04-05T09:07:39.016Z"),
        instructionId: "7542d908-3587-4d52-abb1-020a0ce7a5ae",
        documentId: "4a0ba44f-161d-4901-a310-cbfcec37173c",
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