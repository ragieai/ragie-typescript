# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {},
    connections: [
      {
        id: "dab81665-0b19-4baf-81d0-8685308d5311",
        createdAt: new Date("2022-04-20T14:46:11.490Z"),
        updatedAt: new Date("2022-10-18T11:36:15.213Z"),
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