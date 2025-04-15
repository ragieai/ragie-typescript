# EntityList

## Example Usage

```typescript
import { EntityList } from "ragie/models/components";

let value: EntityList = {
  pagination: {},
  entities: [
    {
      id: "e9682a0a-993a-472b-8aa7-ee2648f9987e",
      createdAt: new Date("2025-11-28T16:44:25.830Z"),
      updatedAt: new Date("2025-10-24T05:40:52.360Z"),
      instructionId: "14ca3f57-e363-453b-9723-41a7d61a60b7",
      documentId: "c14c4496-0afe-4838-ab69-3ca254f118f7",
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