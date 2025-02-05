# ConnectionList

## Example Usage

```typescript
import { ConnectionList } from "ragie/models/components";

let value: ConnectionList = {
  pagination: {},
  connections: [
    {
      id: "1f3b0be4-65b3-4274-9d38-fadfcbff7142",
      createdAt: new Date("2023-05-24T21:26:04.186Z"),
      updatedAt: new Date("2024-10-24T02:42:52.981Z"),
      metadata: {
        "key": 895386,
      },
      type: "<value>",
      name: "<value>",
      enabled: false,
      partition: "<value>",
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