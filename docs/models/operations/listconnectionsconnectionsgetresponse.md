# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {},
    connections: [
      {
        id: "a332e477-cd26-4dd1-8241-619391fe6347",
        createdAt: new Date("2024-12-02T02:48:11.197Z"),
        updatedAt: new Date("2024-03-23T11:59:58.923Z"),
        metadata: {
          "key": 809365,
        },
        type: "<value>",
        name: "<value>",
        enabled: false,
        partition: "<value>",
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