# Entity

## Example Usage

```typescript
import { Entity } from "ragie/models/components";

let value: Entity = {
  id: "6f2e87e7-b6eb-4b5c-aa32-cf79d7f9ded2",
  createdAt: new Date("2024-03-12T16:24:53.059Z"),
  updatedAt: new Date("2023-03-10T17:36:05.364Z"),
  instructionId: "64d0f550-26e1-4fd7-b539-00614342019f",
  documentId: "62a7f1c4-3a3a-4868-84b6-5de035dffe4f",
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