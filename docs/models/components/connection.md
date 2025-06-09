# Connection

## Example Usage

```typescript
import { Connection } from "ragie/models/components";

let value: Connection = {
  id: "654c9c3a-526d-4e3e-b9bf-4c9c84516453",
  createdAt: new Date("2024-07-20T17:04:12.356Z"),
  updatedAt: new Date("2025-10-06T00:46:25.261Z"),
  metadata: {},
  type: "<value>",
  name: "<value>",
  source: "<value>",
  enabled: false,
  disabledBySystemReason: "connection_over_total_page_limit",
  pageLimit: 270380,
  disabledBySystem: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *components.ConnectionMetadata*>                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | *components.Source*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `disabledBySystemReason`                                                                      | [components.DisabledBySystemReason](../../models/components/disabledbysystemreason.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastSyncedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `syncing`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `partition`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageLimit`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `disabledBySystem`                                                                            | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |