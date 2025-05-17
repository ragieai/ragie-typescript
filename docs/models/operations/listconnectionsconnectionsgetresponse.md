# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {
      totalCount: 658333,
    },
    connections: [
      {
        id: "0da65304-8062-4f5f-bd38-89810c29b7bb",
        createdAt: new Date("2025-10-07T02:32:19.524Z"),
        updatedAt: new Date("2025-10-17T19:42:48.819Z"),
        metadata: {
          "key": [
            "<value>",
          ],
        },
        type: "<value>",
        name: "<value>",
        source: [
          "<value>",
        ],
        enabled: false,
        disabledBySystemReason: "connection_over_total_page_limit",
        pageLimit: 212717,
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