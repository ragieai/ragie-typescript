# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "999fa56b-0aa3-4255-997f-132a47321a23",
        createdAt: new Date("2024-06-18T19:24:21.305Z"),
        updatedAt: new Date("2022-04-17T10:09:07.050Z"),
        instructionId: "d1f7f9b0-4141-4561-bb94-819e5a2b4290",
        documentId: "0a4bf399-93f7-4db4-9d6e-9ebb8fa6904a",
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