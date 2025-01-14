# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {},
    connections: [
      {
        id: "5eff6fca-332e-4477-8cd2-6dd124161939",
        createdAt: new Date("2025-12-05T13:38:57.390Z"),
        updatedAt: new Date("2025-10-19T02:05:23.663Z"),
        metadata: {},
        type: "<value>",
        name: "<value>",
        enabled: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `result`                                                               | [components.ConnectionList](../../models/components/connectionlist.md) | :heavy_check_mark:                                                     | N/A                                                                    |