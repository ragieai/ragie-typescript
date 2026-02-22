# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {
      totalCount: 18197,
    },
    connections: [
      {
        id: "0da65304-8062-4f5f-bd38-89810c29b7bb",
        createdAt: new Date("2026-10-07T02:32:19.524Z"),
        updatedAt: new Date("2026-10-17T19:42:48.819Z"),
        metadata: {
          "key": true,
        },
        type: "<value>",
        name: "<value>",
        source: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        enabled: true,
        disabledBySystemReason: "connection_over_total_page_limit",
        pageLimit: 783524,
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