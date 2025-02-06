# Entity

## Example Usage

```typescript
import { Entity } from "ragie/models/components";

let value: Entity = {
  id: "426f2e87-e7b6-4ebb-b5ca-32cf79d7f9de",
  createdAt: new Date("2023-06-24T17:14:16.967Z"),
  updatedAt: new Date("2024-11-20T06:32:40.348Z"),
  instructionId: "6164d0f5-5026-4e1f-ad75-390061434201",
  documentId: "ff62a7f1-c43a-43a8-9684-b65de035dffe",
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