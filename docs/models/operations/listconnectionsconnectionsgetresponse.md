# ListConnectionsConnectionsGetResponse

## Example Usage

```typescript
import { ListConnectionsConnectionsGetResponse } from "ragie/models/operations";

let value: ListConnectionsConnectionsGetResponse = {
  result: {
    pagination: {},
    connections: [
      {
        id: "32e477cd-26dd-4124-9161-9391fe63470a",
        createdAt: new Date("2024-02-18T15:18:08.947Z"),
        updatedAt: new Date("2025-06-06T01:32:10.356Z"),
        metadata: {
          "key": false,
        },
        type: "<value>",
        name: "<value>",
        source: [
          "<value>",
        ],
        enabled: false,
        partition: "<value>",
        pageLimit: 351936,
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