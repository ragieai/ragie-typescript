# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {},
    connections: [
      {
        id: "6cbf5ec5-94d1-4326-ab87-0613e3dc291b",
        createdAt: new Date("2025-06-08T21:13:54.937Z"),
        updatedAt: new Date("2024-06-09T09:43:52.274Z"),
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
        pageLimit: 715053,
        disabledBySystem: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `result`                                                               | [components.ConnectionList](../../models/components/connectionlist.md) | :heavy_check_mark:                                                     | N/A                                                                    |