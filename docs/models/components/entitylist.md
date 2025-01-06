# EntityList

## Example Usage

```typescript
import { EntityList } from "ragie/models/components";

let value: EntityList = {
  pagination: {},
  entities: [
    {
      id: "4310eac4-917f-4e5f-a3ff-cad4d9052f77",
      createdAt: new Date("2024-02-08T23:14:58.127Z"),
      updatedAt: new Date("2023-05-31T01:01:29.087Z"),
      instructionId: "d3831dff-ec51-4632-80b0-c211a368db42",
      documentId: "447ab462-c0bc-4c45-a945-370c1849fa06",
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