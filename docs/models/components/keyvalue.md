# KeyValue

## Example Usage

```typescript
import { KeyValue } from "ragie/models/components";

let value: KeyValue = {
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"KeyValue"*                                         | :heavy_minus_sign:                                   | N/A                                                  |
| `key`                                                | *string*                                             | :heavy_check_mark:                                   | The label/attribute name (e.g. 'Date', 'Invoice #'). |
| `value`                                              | *string*                                             | :heavy_check_mark:                                   | The static text value found.                         |