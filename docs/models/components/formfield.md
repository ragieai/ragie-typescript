# FormField

## Example Usage

```typescript
import { FormField } from "ragie/models/components";

let value: FormField = {
  content: "<value>",
  inputType: "checkbox-group",
  label: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *"FormField"*                                                              | :heavy_minus_sign:                                                         | N/A                                                                        |
| `content`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | The text content of the form field, including both the label and the value |
| `inputType`                                                                | [components.InputType](../../models/components/inputtype.md)               | :heavy_check_mark:                                                         | Type of input.                                                             |
| `label`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The main question/label for the field.                                     |
| `value`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | The filled text. For single checkbox: 'true'/'false'.                      |
| `options`                                                                  | [components.FormOption](../../models/components/formoption.md)[]           | :heavy_minus_sign:                                                         | List of available options.                                                 |
| `selectedValues`                                                           | *string*[]                                                                 | :heavy_minus_sign:                                                         | The 'label' of the selected option(s).                                     |
| `helpText`                                                                 | *string*                                                                   | :heavy_minus_sign:                                                         | The help text for the form field.                                          |