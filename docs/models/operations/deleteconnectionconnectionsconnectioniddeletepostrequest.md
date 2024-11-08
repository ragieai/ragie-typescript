# DeleteConnectionConnectionsConnectionIdDeletePostRequest

## Example Usage

```typescript
import { DeleteConnectionConnectionsConnectionIdDeletePostRequest } from "ragie/models/operations";

let value: DeleteConnectionConnectionsConnectionIdDeletePostRequest = {
  connectionId: "a66cbf5e-c594-4d13-826b-870613e3dc29",
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