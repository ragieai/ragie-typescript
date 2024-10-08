# ListEntitiesByDocumentRequest

## Example Usage

```typescript
import { ListEntitiesByDocumentRequest } from "ragie/models/operations";

let value: ListEntitiesByDocumentRequest = {
  documentId: "<DOCUMENT_ID>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `documentId`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | The id of the document.                                                             | <DOCUMENT_ID>                                                                       |
| `cursor`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | An opaque cursor for pagination                                                     |                                                                                     |
| `pageSize`                                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | The number of items per page (must be greater than 0 and less than or equal to 100) |                                                                                     |