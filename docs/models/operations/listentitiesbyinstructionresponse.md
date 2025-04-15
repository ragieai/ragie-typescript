# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "3ae1a36f-0847-4a4c-b6c6-b19ca28d7aeb",
        createdAt: new Date("2025-04-04T19:30:54.002Z"),
        updatedAt: new Date("2025-04-29T12:57:19.878Z"),
        instructionId: "17542d90-8358-47d5-b2bb-1020a0ce7a5a",
        documentId: "b4a0ba44-f161-4d90-b131-0cbfcec37173",
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