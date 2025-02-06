# EntityList

## Example Usage

```typescript
import { EntityList } from "ragie/models/components";

let value: EntityList = {
  pagination: {},
  entities: [
    {
      id: "10eac491-7fe5-4f3f-8fca-d4d9052f77a5",
      createdAt: new Date("2025-06-20T00:59:05.475Z"),
      updatedAt: new Date("2023-07-28T01:45:34.109Z"),
      instructionId: "831dffec-5163-420b-90c2-11a368db4204",
      documentId: "7ab462c0-bcc4-4594-a537-0c1849fa0688",
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