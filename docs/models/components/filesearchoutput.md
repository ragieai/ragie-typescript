# FileSearchOutput

## Example Usage

```typescript
import { FileSearchOutput } from "ragie/models/components";

let value: FileSearchOutput = {
  id: "<id>",
  queries: [],
  results: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `queries`                                                                              | *string*[]                                                                             | :heavy_check_mark:                                                                     | The queries used to search for files.                                                  |
| `status`                                                                               | [components.FileSearchOutputStatus](../../models/components/filesearchoutputstatus.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `results`                                                                              | [components.FileSearchResult](../../models/components/filesearchresult.md)[]           | :heavy_check_mark:                                                                     | The results of the file search tool call.                                              |