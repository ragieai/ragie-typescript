# ListEntitiesByDocumentResponse

## Example Usage

```typescript
import { ListEntitiesByDocumentResponse } from "ragie/models/operations";

let value: ListEntitiesByDocumentResponse = {
  result: {
    pagination: {},
    entities: [
      {
        id: "92fd8e8e-dfe0-426f-a42e-7e2a71b3000e",
        createdAt: new Date("2024-09-11T06:37:56.079Z"),
        updatedAt: new Date("2024-01-08T03:36:18.419Z"),
        instructionId: "84f576f2-5a19-4743-b857-5f2159a6f5ba",
        documentId: "fecb5213-68cf-4119-bbde-f662aad17932",
        data: {
          "key": "<value>",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `result`                                                       | [components.EntityList](../../models/components/entitylist.md) | :heavy_check_mark:                                             | N/A                                                            |