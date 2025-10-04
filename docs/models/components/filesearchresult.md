# FileSearchResult

## Example Usage

```typescript
import { FileSearchResult } from "ragie/models/components";

let value: FileSearchResult = {
  fileId: "<id>",
  filename: "example.file",
  score: 7112.12,
  text: "<value>",
  attributes: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `fileId`                                                    | *string*                                                    | :heavy_check_mark:                                          | The unique ID of the document.                              |
| `filename`                                                  | *string*                                                    | :heavy_check_mark:                                          | The name of the document.                                   |
| `score`                                                     | *number*                                                    | :heavy_check_mark:                                          | The relevance score of the chunk - a value between 0 and 1. |
| `text`                                                      | *string*                                                    | :heavy_check_mark:                                          | The text content of the chunk.                              |
| `attributes`                                                | Record<string, *any*>                                       | :heavy_check_mark:                                          | The attributes of the chunk.                                |