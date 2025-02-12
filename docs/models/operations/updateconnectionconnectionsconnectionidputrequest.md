# UpdateConnectionConnectionsConnectionIdPutRequest

## Example Usage

```typescript
import { UpdateConnectionConnectionsConnectionIdPutRequest } from "ragie/models/operations";

let value: UpdateConnectionConnectionsConnectionIdPutRequest = {
  connectionId: "7e04b621-d7eb-4658-beb0-beb2725ee459",
  connectionBase: {
    partitionStrategy: "hi_res",
    pageLimit: 1000,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `connectionId`                                                         | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `connectionBase`                                                       | [components.ConnectionBase](../../models/components/connectionbase.md) | :heavy_check_mark:                                                     | N/A                                                                    |