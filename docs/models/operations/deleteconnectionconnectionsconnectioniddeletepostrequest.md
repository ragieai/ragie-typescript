# DeleteConnectionConnectionsConnectionIdDeletePostRequest

## Example Usage

```typescript
import { DeleteConnectionConnectionsConnectionIdDeletePostRequest } from "ragie/models/operations";

let value: DeleteConnectionConnectionsConnectionIdDeletePostRequest = {
  connectionId: "8f3a907b-0e80-43f9-9147-06739c39afcd",
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