# ConnectionList

## Example Usage

```typescript
import { ConnectionList } from "ragie/models/components";

let value: ConnectionList = {
  pagination: {},
  connections: [
    {
      id: "e4f31f3b-0be4-465b-9327-4d38fadfcbff",
      createdAt: new Date("2023-03-19T16:09:31.123Z"),
      updatedAt: new Date("2023-11-17T21:39:15.131Z"),
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