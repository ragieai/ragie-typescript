# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "84763845-8c5e-4d04-8715-ba9b35ae840b",
        createdAt: new Date("2023-02-13T10:57:00.909Z"),
        updatedAt: new Date("2023-08-05T11:15:03.211Z"),
        instructionId: "e1605943-19ba-4f0a-999f-0bd85c178b13",
        documentId: "9e92fd8e-8edf-4e02-86f4-2e7e2a71b300",
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