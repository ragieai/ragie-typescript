# SetConnectionLimitsConnectionsConnectionIdLimitPutRequest

## Example Usage

```typescript
import { SetConnectionLimitsConnectionsConnectionIdLimitPutRequest } from "ragie/models/operations";

let value: SetConnectionLimitsConnectionsConnectionIdLimitPutRequest = {
  connectionId: "26427fc7-2a2d-42b3-a483-674b62671d6d",
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