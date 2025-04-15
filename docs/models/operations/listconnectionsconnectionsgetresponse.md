# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {},
    connections: [
      {
        id: "a0da6530-4806-42f5-afd3-889810c29b7b",
        createdAt: new Date("2025-05-19T20:25:53.233Z"),
        updatedAt: new Date("2025-10-07T02:32:19.524Z"),
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
        disabledBySystemReason: "authentication_failed",
        pageLimit: 235404,
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