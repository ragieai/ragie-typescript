# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "274d38fa-dfcb-4ff7-9142-6296ef849e68",
        createdAt: new Date("2023-05-15T04:00:10.466Z"),
        updatedAt: new Date("2023-03-17T06:40:22.205Z"),
        instructionId: "38458c5e-d047-415b-8a9b-35ae840b058e",
        documentId: "60594319-baf0-4a99-bf0b-d85c178b1369",
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