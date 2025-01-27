# UpdateConnectionConnectionsConnectionIdPutRequest

## Example Usage

```typescript
import { UpdateConnectionConnectionsConnectionIdPutRequest } from "ragie/models/operations";

let value: UpdateConnectionConnectionsConnectionIdPutRequest = {
  connectionId: "e04b621d-7eb6-458e-8b0b-eb2725ee459f",
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