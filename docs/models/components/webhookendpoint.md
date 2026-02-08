# WebhookEndpoint

## Example Usage

```typescript
import { WebhookEndpoint } from "ragie/models/components";

let value: WebhookEndpoint = {
  id: "fcc5b48a-b855-4706-a154-b6a608acc4a6",
  createdAt: new Date("2025-03-08T21:40:41.926Z"),
  updatedAt: new Date("2025-01-13T09:39:37.633Z"),
  name: "<value>",
  url: "https://soggy-corporation.com",
  partitionPattern: null,
  active: true,
  secret: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `partitionPattern`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `secret`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |