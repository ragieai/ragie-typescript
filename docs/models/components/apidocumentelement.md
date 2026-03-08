# ApiDocumentElement

## Example Usage

```typescript
import { ApiDocumentElement } from "ragie/models/components";

let value: ApiDocumentElement = {
  id: "ce3f7ef2-e354-4f72-a53c-996eff0bc302",
  createdAt: new Date("2025-10-07T01:33:56.618Z"),
  index: 32117,
  metadata: {
    "key": "<value>",
    "key1": "<value>",
  },
  type: "SectionHeader",
  text: "<value>",
  markdown: "<value>",
  dataContent: {
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `index`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.DocumentElementType](../../models/components/documentelementtype.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `markdown`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `location`                                                                                    | *components.Location*                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `dataContent`                                                                                 | *components.ApiElement*                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |