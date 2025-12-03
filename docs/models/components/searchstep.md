# SearchStep

## Example Usage

```typescript
import { SearchStep } from "ragie/models/components";

let value: SearchStep = {
  think: "<value>",
  currentQuestion: "<value>",
  search: {
    searchRequests: [],
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *"base_search"*                                        | :heavy_minus_sign:                                     | N/A                                                    |
| `think`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `currentQuestion`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `errored`                                              | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `search`                                               | [components.Search](../../models/components/search.md) | :heavy_check_mark:                                     | N/A                                                    |