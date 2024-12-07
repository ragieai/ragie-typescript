# EntityList

## Example Usage

```typescript
import { EntityList } from "ragie/models/components";

let value: EntityList = {
  pagination: {},
  entities: [
    {
      id: "1b7bdfd0-5b28-4030-9c35-eb02993e989b",
      createdAt: new Date("2023-03-13T10:48:24.554Z"),
      updatedAt: new Date("2022-08-18T23:43:47.903Z"),
      instructionId: "2fb73406-4b62-401a-978e-f3a40c569dad",
      documentId: "c2fa3fb4-3803-4657-a49d-182b692275fc",
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