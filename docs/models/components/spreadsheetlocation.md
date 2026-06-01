# SpreadsheetLocation

Location within a spreadsheet using cell ranges.

## Example Usage

```typescript
import { SpreadsheetLocation } from "ragie/models/components";

let value: SpreadsheetLocation = {
  locationType: "spreadsheet",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `locationType`                  | *"spreadsheet"*                 | :heavy_check_mark:              | N/A                             |
| `range`                         | *string*                        | :heavy_minus_sign:              | Excel-style range like 'A1:C10' |
| `sheetName`                     | *string*                        | :heavy_minus_sign:              | Name of the sheet               |
| `sheetIndex`                    | *number*                        | :heavy_minus_sign:              | 0-based index of the sheet      |