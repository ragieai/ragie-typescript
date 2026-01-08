# DocumentGet

## Example Usage

```typescript
import { DocumentGet } from "ragie/models/components";

let value: DocumentGet = {
  status: "<value>",
  id: "df1734b7-d561-4df2-b528-ed030bd85127",
  createdAt: new Date("2024-10-08T13:06:45.255Z"),
  updatedAt: new Date("2024-09-26T05:53:58.801Z"),
  name: "<value>",
  metadata: {},
  partition: "<value>",
  errors: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *components.DocumentGetMetadata*>                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `partition`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `chunkCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageCount`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `errors`                                                                                      | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |