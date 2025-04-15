# ConnectionList

## Example Usage

```typescript
import { ConnectionList } from "ragie/models/components";

let value: ConnectionList = {
  pagination: {},
  connections: [
    {
      id: "9fb79104-2b3f-43df-ac30-9281da8af892",
      createdAt: new Date("2023-11-30T07:24:24.446Z"),
      updatedAt: new Date("2023-03-29T00:56:47.996Z"),
      metadata: {
        "key": [
          "<value>",
        ],
      },
      type: "<value>",
      name: "<value>",
      source: "<value>",
      enabled: false,
      disabledBySystemReason: "connection_over_total_page_limit",
      pageLimit: 818012,
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