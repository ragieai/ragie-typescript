# EntityList

## Example Usage

```typescript
import { EntityList } from "ragie/models/components";

let value: EntityList = {
  pagination: {},
  entities: [
    {
      id: "b7bdfd05-b280-430c-935e-b02993e989b4",
      createdAt: new Date("2022-08-18T23:43:47.903Z"),
      updatedAt: new Date("2022-07-24T01:37:14.976Z"),
      instructionId: "fb734064-b620-41a7-b8ef-3a40c569dad4",
      documentId: "2fa3fb43-8036-4574-b9d1-82b692275fcb",
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