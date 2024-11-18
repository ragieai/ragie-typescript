# Entity

## Example Usage

```typescript
import { Entity } from "ragie/models/components";

let value: Entity = {
  id: "9f4310ea-c491-47fe-95f3-ffcad4d9052f",
  createdAt: new Date("2023-06-30T03:22:56.921Z"),
  updatedAt: new Date("2023-12-02T20:41:06.257Z"),
  instructionId: "52d3831d-ffec-4516-9320-b0c211a368db",
  documentId: "20447ab4-62c0-4bcc-8459-45370c1849fa",
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
| `data`                                                                                        | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |