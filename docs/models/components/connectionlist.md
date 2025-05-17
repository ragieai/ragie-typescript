# ConnectionList

## Example Usage

```typescript
import { ConnectionList } from "ragie/models/components";

let value: ConnectionList = {
  pagination: {
    totalCount: 599899,
  },
  connections: [
    {
      id: "fb791042-b3f3-4dfc-9309-281da8af8929",
      createdAt: new Date("2023-03-29T00:56:47.996Z"),
      updatedAt: new Date("2025-12-08T11:39:54.430Z"),
      metadata: {
        "key": "<value>",
      },
      type: "<value>",
      name: "<value>",
      source: "<value>",
      enabled: false,
      disabledBySystemReason: "authentication_failed",
      pageLimit: 18787,
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