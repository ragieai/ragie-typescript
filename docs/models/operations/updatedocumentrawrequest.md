# UpdateDocumentRawRequest

## Example Usage

```typescript
import { UpdateDocumentRawRequest } from "ragie/models/operations";

let value: UpdateDocumentRawRequest = {
  documentId: "<DOCUMENT_ID>",
  updateDocumentRawParams: {
    data: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `documentId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | The id of the document.                                                                  | <DOCUMENT_ID>                                                                            |
| `updateDocumentRawParams`                                                                | [components.UpdateDocumentRawParams](../../models/components/updatedocumentrawparams.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |