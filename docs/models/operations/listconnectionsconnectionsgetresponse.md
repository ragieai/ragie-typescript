# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {},
    connections: [
      {
        id: "fca332e4-77cd-426d-9d12-41619391fe63",
        createdAt: new Date("2024-06-13T19:11:00.780Z"),
        updatedAt: new Date("2023-02-13T19:58:14.380Z"),
        metadata: {
          "key": false,
        },
        type: "<value>",
        name: "<value>",
        source: "<value>",
        enabled: false,
        partition: "<value>",
        pageLimit: 377406,
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