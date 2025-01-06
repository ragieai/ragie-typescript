# Entity

## Example Usage

```typescript
import { Entity } from "ragie/models/components";

let value: Entity = {
  id: "8a426f2e-87e7-4b6e-bbb5-ca32cf79d7f9",
  createdAt: new Date("2025-09-23T02:13:30.609Z"),
  updatedAt: new Date("2025-06-12T19:32:18.704Z"),
  instructionId: "2a6164d0-f550-426e-81fd-753900614342",
  documentId: "19ff62a7-f1c4-43a3-ba86-84b65de035df",
  data: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `instructionId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the instruction which generated the entity.                                         |
| `documentId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the document which the entity was produced from.                                    |
| `chunkId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `data`                                                                                        | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |