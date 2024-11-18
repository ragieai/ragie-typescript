# DocumentGet

## Example Usage

```typescript
import { DocumentGet } from "ragie/models/components";

let value: DocumentGet = {
  id: "4819e5a2-b429-40d0-9a4b-f39993f7db4d",
  createdAt: new Date("2024-08-23T16:32:18.589Z"),
  updatedAt: new Date("2023-09-30T01:48:05.911Z"),
  status: "<value>",
  name: "<value>",
  metadata: {
    "key": [
      "<value>",
    ],
  },
  partition: "<value>",
  errors: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *components.DocumentGetMetadata*>                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `partition`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `chunkCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `errors`                                                                                      | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |