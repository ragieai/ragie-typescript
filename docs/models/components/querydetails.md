# QueryDetails

## Example Usage

```typescript
import { QueryDetails } from "ragie/models/components";

let value: QueryDetails = {
  query: "<value>",
  searchEffort: "medium",
  metadataFilter: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  searchResults: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `query`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `searchEffort`                                                         | [components.SearchEffort](../../models/components/searcheffort.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `metadataFilter`                                                       | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `searchResults`                                                        | [components.RagieEvidence](../../models/components/ragieevidence.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |