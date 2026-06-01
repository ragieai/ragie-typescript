# InstructionEntityExtractionLogList

## Example Usage

```typescript
import { InstructionEntityExtractionLogList } from "ragie/models/components";

let value: InstructionEntityExtractionLogList = {
  pagination: {
    totalCount: 18197,
  },
  logs: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                             | [components.Pagination](../../models/components/pagination.md)                                           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `logs`                                                                                                   | [components.InstructionEntityExtractionLog](../../models/components/instructionentityextractionlog.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |