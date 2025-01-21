# Connection

## Example Usage

```typescript
import { Connection } from "ragie/models/components";

let value: Connection = {
  id: "849e6847-6384-458c-b5ed-04715ba9b35a",
  createdAt: new Date("2024-08-18T20:54:27.100Z"),
  updatedAt: new Date("2023-11-06T20:07:53.826Z"),
  metadata: {
    "key": "<value>",
  },
  type: "<value>",
  name: "<value>",
  enabled: false,
  partition: "<value>",
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
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastSyncedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `syncing`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `partition`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |