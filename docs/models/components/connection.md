# Connection

## Example Usage

```typescript
import { Connection } from "ragie/models/components";

let value: Connection = {
  id: "9ded2a61-64d0-4f55-9026-e1fd75390061",
  createdAt: new Date("2022-08-31T09:25:00.182Z"),
  updatedAt: new Date("2022-10-05T11:56:28.175Z"),
  metadata: {},
  type: "<value>",
  name: "<value>",
  enabled: false,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | [components.ConnectionMetadataMetadata](../../models/components/connectionmetadatametadata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `type`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `enabled`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `lastSyncedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `syncing`                                                                                      | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |