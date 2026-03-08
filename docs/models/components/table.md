# Table

## Example Usage

```typescript
import { Table } from "ragie/models/components";

let value: Table = {
  content: "<value>",
  description: "apologise oxidize engage meh",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | *"Table"*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `content`                                                            | *string*                                                             | :heavy_check_mark:                                                   | The Table in HTML.                                                   |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | A brief summary of the content in the table.                         |
| `headerRange`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Optional normalized header rows range used for <thead> construction. |