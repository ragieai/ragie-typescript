# DeleteConnectionConnectionsConnectionIdDeletePostRequest

## Example Usage

```typescript
import { DeleteConnectionConnectionsConnectionIdDeletePostRequest } from "ragie/models/operations";

let value: DeleteConnectionConnectionsConnectionIdDeletePostRequest = {
  connectionId: "9ded2a61-64d0-4f55-9026-e1fd75390061",
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