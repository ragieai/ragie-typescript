# DeleteConnectionConnectionsConnectionIdDeletePostRequest

## Example Usage

```typescript
import { DeleteConnectionConnectionsConnectionIdDeletePostRequest } from "ragie/models/operations";

let value: DeleteConnectionConnectionsConnectionIdDeletePostRequest = {
  connectionId: "94d1326b-8706-413e-83dc-291bac7e04b6",
  deleteConnectionPayload: {
    keepFiles: false,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `connectionId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleteConnectionPayload`                                                                | [components.DeleteConnectionPayload](../../models/components/deleteconnectionpayload.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |