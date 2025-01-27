# SetConnectionLimitsConnectionsConnectionIdLimitPutRequest

## Example Usage

```typescript
import { SetConnectionLimitsConnectionsConnectionIdLimitPutRequest } from "ragie/models/operations";

let value: SetConnectionLimitsConnectionsConnectionIdLimitPutRequest = {
  connectionId: "e0517d42-5d23-41b6-84b5-bd3f242578de",
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