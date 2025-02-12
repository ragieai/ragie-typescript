# SetConnectionLimitsConnectionsConnectionIdLimitPutRequest

## Example Usage

```typescript
import { SetConnectionLimitsConnectionsConnectionIdLimitPutRequest } from "ragie/models/operations";

let value: SetConnectionLimitsConnectionsConnectionIdLimitPutRequest = {
  connectionId: "3e0517d4-25d2-431b-b64b-5bd3f242578d",
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