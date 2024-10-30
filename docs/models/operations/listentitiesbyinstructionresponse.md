# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "2a6164d0-f550-426e-81fd-753900614342",
        createdAt: new Date("2022-05-07T13:41:56.227Z"),
        updatedAt: new Date("2023-11-09T20:30:17.087Z"),
        instructionId: "ff62a7f1-c43a-43a8-9684-b65de035dffe",
        documentId: "f31f3b0b-e465-4b32-974d-38fadfcbff71",
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