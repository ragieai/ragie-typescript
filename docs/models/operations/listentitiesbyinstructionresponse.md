# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "7e2a71b3-000e-4bea-a84f-576f25a19743",
        createdAt: new Date("2024-02-08T05:58:01.482Z"),
        updatedAt: new Date("2024-05-15T08:17:57.191Z"),
        instructionId: "5f2159a6-f5ba-4dfe-bcb5-21368cf119bd",
        documentId: "f662aad1-7932-4d07-a17f-6d1466a5ba66",
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