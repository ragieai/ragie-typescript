# PatchDocumentMetadataRequest

## Example Usage

```typescript
import { PatchDocumentMetadataRequest } from "ragie/models/operations";

let value: PatchDocumentMetadataRequest = {
  documentId: "00000000-0000-0000-0000-000000000000",
  patchDocumentMetadataParams: {
    metadata: {
      "classified": "null (setting null deletes key from metadata)",
      "editors": [
        "Alice",
        "Bob",
      ],
      "published": true,
      "articleCount": 42,
      "title": "declassified report",
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `documentId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | The id of the document.                                                                          | 00000000-0000-0000-0000-000000000000                                                             |
| `patchDocumentMetadataParams`                                                                    | [components.PatchDocumentMetadataParams](../../models/components/patchdocumentmetadataparams.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |