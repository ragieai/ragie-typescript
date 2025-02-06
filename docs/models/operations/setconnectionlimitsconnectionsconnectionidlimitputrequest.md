# SetConnectionLimitsConnectionsConnectionIdLimitPutRequest

## Example Usage

```typescript
import { SetConnectionLimitsConnectionsConnectionIdLimitPutRequest } from "ragie/models/operations";

let value: SetConnectionLimitsConnectionsConnectionIdLimitPutRequest = {
  connectionId: "17d425d2-31b6-44b5-9bd3-f242578de391",
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