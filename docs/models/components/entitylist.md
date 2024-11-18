# EntityList

## Example Usage

```typescript
import { EntityList } from "ragie/models/components";

let value: EntityList = {
  pagination: {},
  entities: [
    {
      id: "bdfd05b2-8030-4c35-8eb0-2993e989b463",
      createdAt: new Date("2024-11-01T00:46:16.847Z"),
      updatedAt: new Date("2024-03-21T13:08:38.807Z"),
      instructionId: "734064b6-201a-478e-bf3a-40c569dad4c2",
      documentId: "a3fb4380-3657-449d-a182-b692275fcbe1",
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