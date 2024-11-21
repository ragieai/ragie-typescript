# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "68476384-58c5-4ed0-a471-5ba9b35ae840",
        createdAt: new Date("2022-01-09T15:23:00.451Z"),
        updatedAt: new Date("2023-02-13T10:57:00.909Z"),
        instructionId: "8e160594-319b-4af0-8a99-f0bd85c178b1",
        documentId: "69e92fd8-e8ed-4fe0-826f-42e7e2a71b30",
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