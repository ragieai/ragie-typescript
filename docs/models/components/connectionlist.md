# ConnectionList

## Example Usage

```typescript
import { ConnectionList } from "ragie/models/components";

let value: ConnectionList = {
  pagination: {},
  connections: [
    {
      id: "f31f3b0b-e465-4b32-974d-38fadfcbff71",
      createdAt: new Date("2023-06-16T23:32:17.442Z"),
      updatedAt: new Date("2024-04-02T13:33:41.769Z"),
      metadata: {
        "key": "<value>",
      },
      type: "<value>",
      name: "<value>",
      source: [
        "<value>",
      ],
      enabled: false,
      partition: "<value>",
      pageLimit: 382808,
      disabledBySystem: false,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |
| `connections`                                                    | [components.Connection](../../models/components/connection.md)[] | :heavy_check_mark:                                               | N/A                                                              |