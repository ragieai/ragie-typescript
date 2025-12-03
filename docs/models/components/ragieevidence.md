# RagieEvidence

## Example Usage

```typescript
import { RagieEvidence } from "ragie/models/components";

let value: RagieEvidence = {
  text: "<value>",
  id: "<id>",
  index: 527106,
  documentId: "<id>",
  documentName: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | *"ragie"*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `text`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The chunk id of the evidence.                                                              |
| `index`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The index of the chunk in the document.                                                    |
| `documentId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | The document id of the document containing the chunk being used as evidence.               |
| `documentName`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | The name of the document that contains the chunk being used as evidence.                   |
| `metadata`                                                                                 | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | The metadata of the chunk being used as evidence.                                          |
| `documentMetadata`                                                                         | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | The metadata of the document that contains the evidence.                                   |
| `links`                                                                                    | Record<string, [components.SearchResultLink](../../models/components/searchresultlink.md)> | :heavy_minus_sign:                                                                         | The links to the evidence.                                                                 |