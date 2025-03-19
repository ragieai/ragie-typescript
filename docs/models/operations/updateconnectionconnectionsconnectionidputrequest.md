# UpdateConnectionConnectionsConnectionIdPutRequest

## Example Usage

```typescript
import { UpdateConnectionConnectionsConnectionIdPutRequest } from "ragie/models/operations";

let value: UpdateConnectionConnectionsConnectionIdPutRequest = {
  connectionId: "2855765e-bb49-4cc5-9cb2-d777997da66c",
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