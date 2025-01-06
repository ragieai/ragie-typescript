# UpdateDocumentRawRequest

## Example Usage

```typescript
import { UpdateDocumentRawRequest } from "ragie/models/operations";

let value: UpdateDocumentRawRequest = {
  documentId: "00000000-0000-0000-0000-000000000000",
  updateDocumentRawParams: {
    data: {},
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `documentId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | The id of the document.                                                                  | 00000000-0000-0000-0000-000000000000                                                     |
| `updateDocumentRawParams`                                                                | [components.UpdateDocumentRawParams](../../models/components/updatedocumentrawparams.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |