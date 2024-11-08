# ConnectionList

## Example Usage

```typescript
import { ConnectionList } from "ragie/models/components";

let value: ConnectionList = {
  pagination: {},
  connections: [
    {
      id: "a0688a42-6f2e-487e-b7b6-ebb5ca32cf79",
      createdAt: new Date("2023-05-17T02:48:20.581Z"),
      updatedAt: new Date("2024-11-09T06:06:22.459Z"),
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