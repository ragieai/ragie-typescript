# Entity

## Example Usage

```typescript
import { Entity } from "ragie/models/components";

let value: Entity = {
  id: "4775d2b5-0baf-409d-bb8f-fda4a5d97716",
  createdAt: new Date("2025-05-15T01:18:45.507Z"),
  updatedAt: new Date("2024-03-28T17:14:20.836Z"),
  instructionId: "f3c5bb3c-0ca3-4d8f-9d0c-075c66a3430f",
  documentId: "a19e9595-6772-4b9a-bcda-14fc052e995c",
  data: {
    "key": "<value>",
    "key1": "<value>",
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