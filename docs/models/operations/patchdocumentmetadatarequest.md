# PatchDocumentMetadataRequest

## Example Usage

```typescript
import { PatchDocumentMetadataRequest } from "ragie/models/operations";

let value: PatchDocumentMetadataRequest = {
  documentId: "<DOCUMENT_ID>",
  patchDocumentMetadataParams: {
    metadata: {
      "classified": "null (setting null deletes key from metadata)",
      "editors": [
        "Alice",
        "Bob",
      ],
      "title": "declassified report",
      "updated_at": 1714491736216,
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `documentId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | The id of the document.                                                                          | <DOCUMENT_ID>                                                                                    |
| `patchDocumentMetadataParams`                                                                    | [components.PatchDocumentMetadataParams](../../models/components/patchdocumentmetadataparams.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |