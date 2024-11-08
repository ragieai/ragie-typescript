# ConnectionSyncFinishedWebhookPayload

## Example Usage

```typescript
import { ConnectionSyncFinishedWebhookPayload } from "ragie/models/components";

let value: ConnectionSyncFinishedWebhookPayload = {
  connectionId: "<id>",
  syncId: "<id>",
  partition: "<value>",
  connectionMetadata: {},
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connectionId`                                                                                                                                         | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `syncId`                                                                                                                                               | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `partition`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `connectionMetadata`                                                                                                                                   | [components.ConnectionSyncFinishedWebhookPayloadConnectionMetadata](../../models/components/connectionsyncfinishedwebhookpayloadconnectionmetadata.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |