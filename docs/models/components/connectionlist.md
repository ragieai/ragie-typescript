# ConnectionList

## Example Usage

```typescript
import { ConnectionList } from "ragie/models/components";

let value: ConnectionList = {
  pagination: {},
  connections: [
    {
      id: "688a426f-2e87-4e7b-b6eb-b5ca32cf79d7",
      createdAt: new Date("2023-09-24T00:33:30.839Z"),
      updatedAt: new Date("2024-06-18T13:27:30.035Z"),
      metadata: {},
      type: "<value>",
      name: "<value>",
      enabled: false,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |
| `connections`                                                    | [components.Connection](../../models/components/connection.md)[] | :heavy_check_mark:                                               | N/A                                                              |