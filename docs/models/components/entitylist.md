# EntityList

## Example Usage

```typescript
import { EntityList } from "ragie/models/components";

let value: EntityList = {
  pagination: {},
  entities: [
    {
      id: "eac4917f-e5f3-4ffc-8ad4-d9052f77a52d",
      createdAt: new Date("2024-07-14T09:44:04.261Z"),
      updatedAt: new Date("2023-09-03T20:26:06.468Z"),
      instructionId: "1dffec51-6320-4b0c-a211-a368db420447",
      documentId: "b462c0bc-c459-4453-870c-1849fa0688a4",
      data: {
        "key": "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |
| `entities`                                                     | [components.Entity](../../models/components/entity.md)[]       | :heavy_check_mark:                                             | N/A                                                            |