# ListDocumentElements

## Example Usage

```typescript
import { ListDocumentElements } from "ragie/models/components";

let value: ListDocumentElements = {
  pagination: {
    totalCount: 18197,
  },
  documentElements: [
    {
      id: "b1fe2ba8-951a-4809-94da-20f04cd11022",
      createdAt: new Date("2026-08-25T16:15:25.255Z"),
      index: 506600,
      metadata: {},
      type: "Video",
      text: "<value>",
      markdown: "<value>",
      data: {
        content: "<value>",
        handwritten: false,
      },
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |
| `documentElements`                                                               | [components.ApiDocumentElement](../../models/components/apidocumentelement.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |