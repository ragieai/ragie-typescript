# SearchStepWithQueryDetails

## Example Usage

```typescript
import { SearchStepWithQueryDetails } from "ragie/models/components";

let value: SearchStepWithQueryDetails = {
  think: "<value>",
  currentQuestion: "<value>",
  search: {
    searchRequests: [],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *"search"*                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `think`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `currentQuestion`                                                    | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `errored`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `search`                                                             | [components.Search](../../models/components/search.md)               | :heavy_check_mark:                                                   | N/A                                                                  |
| `queryDetails`                                                       | [components.QueryDetails](../../models/components/querydetails.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
| `searchLog`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | A log of the search results you found.                               |