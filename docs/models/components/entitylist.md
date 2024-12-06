# EntityList

## Example Usage

```typescript
import { EntityList } from "ragie/models/components";

let value: EntityList = {
  pagination: {},
  entities: [
    {
      id: "6f42e7e2-a71b-4300-80eb-ea84f576f25a",
      createdAt: new Date("2023-10-28T13:05:15.123Z"),
      updatedAt: new Date("2023-06-08T12:00:49.002Z"),
      instructionId: "438575f2-159a-46f5-8bad-fecb521368cf",
      documentId: "19bdef66-2aad-4179-932d-0717f6d1466a",
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