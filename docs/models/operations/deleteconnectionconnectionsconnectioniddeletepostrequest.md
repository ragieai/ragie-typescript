# DeleteConnectionConnectionsConnectionIdDeletePostRequest

## Example Usage

```typescript
import { DeleteConnectionConnectionsConnectionIdDeletePostRequest } from "ragie/models/operations";

let value: DeleteConnectionConnectionsConnectionIdDeletePostRequest = {
  connectionId: "1d955c5a-87e8-4db0-ac3e-0517d425d231",
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