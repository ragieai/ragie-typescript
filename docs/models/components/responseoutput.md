# ResponseOutput

## Example Usage

```typescript
import { ResponseOutput } from "ragie/models/components";

let value: ResponseOutput = {
  id: "<id>",
  content: [
    {
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `role`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `content`                                                                  | [components.ResponseContent](../../models/components/responsecontent.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |