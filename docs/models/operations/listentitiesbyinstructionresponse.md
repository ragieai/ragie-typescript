# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "6f42e7e2-a71b-4300-80eb-ea84f576f25a",
        createdAt: new Date("2024-10-27T13:05:15.123Z"),
        updatedAt: new Date("2024-06-07T12:00:49.002Z"),
        instructionId: "438575f2-159a-46f5-8bad-fecb521368cf",
        documentId: "19bdef66-2aad-4179-932d-0717f6d1466a",
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