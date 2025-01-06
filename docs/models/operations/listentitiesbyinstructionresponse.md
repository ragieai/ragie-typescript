# ListEntitiesByInstructionResponse

## Example Usage

```typescript
import { ListEntitiesByInstructionResponse } from "ragie/models/operations";

let value: ListEntitiesByInstructionResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "e8edfe02-6f42-4e7e-b2a7-1b3000ebea84",
        createdAt: new Date("2024-02-01T23:01:15.623Z"),
        updatedAt: new Date("2024-05-30T19:56:59.856Z"),
        instructionId: "6f25a197-4385-475f-9215-9a6f5badfecb",
        documentId: "21368cf1-19bd-4ef6-b62a-ad17932d0717",
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