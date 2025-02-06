# UpdateConnectionConnectionsConnectionIdPutRequest

## Example Usage

```typescript
import { UpdateConnectionConnectionsConnectionIdPutRequest } from "ragie/models/operations";

let value: UpdateConnectionConnectionsConnectionIdPutRequest = {
  connectionId: "b621d7eb-658e-4b0b-9eb2-725ee459f24d",
  connectionBase: {
    partitionStrategy: "fast",
    pageLimit: 1000,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `connectionId`                                                         | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `connectionBase`                                                       | [components.ConnectionBase](../../models/components/connectionbase.md) | :heavy_check_mark:                                                     | N/A                                                                    |