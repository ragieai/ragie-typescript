# EntityList

## Example Usage

```typescript
import { EntityList } from "ragie/models/components";

let value: EntityList = {
  pagination: {
    totalCount: 927373,
  },
  entities: [
    {
      id: "9682a0a9-93a7-42ba-ba7e-e2648f9987e0",
      createdAt: new Date("2025-10-24T05:40:52.360Z"),
      updatedAt: new Date("2023-05-16T15:47:57.920Z"),
      instructionId: "4ca3f57e-3635-43b7-b234-1a7d61a60b75",
      documentId: "14c44960-afe8-438b-9693-ca254f118f78",
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