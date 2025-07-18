# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {
      totalCount: 878808,
    },
    connections: [
      {
        id: "fb791042-b3f3-4dfc-9309-281da8af8929",
        createdAt: new Date("2023-03-29T00:56:47.996Z"),
        updatedAt: new Date("2025-12-08T11:39:54.430Z"),
        metadata: {},
        type: "<value>",
        name: "<value>",
        source: {},
        enabled: false,
        disabledBySystemReason: "connection_over_total_page_limit",
        pageLimit: 243128,
        disabledBySystem: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `result`                                                               | [components.ConnectionList](../../models/components/connectionlist.md) | :heavy_check_mark:                                                     | N/A                                                                    |