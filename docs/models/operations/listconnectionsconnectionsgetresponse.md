# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {},
    connections: [
      {
        id: "b19baf1d-0868-4530-98d5-31131411d28c",
        createdAt: new Date("2022-06-18T02:12:53.867Z"),
        updatedAt: new Date("2022-08-07T18:10:36.920Z"),
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