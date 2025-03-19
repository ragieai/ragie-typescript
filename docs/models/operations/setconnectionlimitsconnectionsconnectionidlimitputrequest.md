# SetConnectionLimitsConnectionsConnectionIdLimitPutRequest

## Example Usage

```typescript
import { SetConnectionLimitsConnectionsConnectionIdLimitPutRequest } from "ragie/models/operations";

let value: SetConnectionLimitsConnectionsConnectionIdLimitPutRequest = {
  connectionId: "57b1eb2f-8f38-4449-8ecb-8e7dd3c0538b",
  connectionLimitParams: {
    pageLimit: 1000,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `connectionId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `connectionLimitParams`                                                              | [components.ConnectionLimitParams](../../models/components/connectionlimitparams.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |