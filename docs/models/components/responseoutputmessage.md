# ResponseOutputMessage

## Example Usage

```typescript
import { ResponseOutputMessage } from "ragie/models/components";

let value: ResponseOutputMessage = {
  id: "<id>",
  content: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *"message"*                                                                | :heavy_minus_sign:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `role`                                                                     | *"assistant"*                                                              | :heavy_minus_sign:                                                         | N/A                                                                        |
| `content`                                                                  | [components.ResponseContent](../../models/components/responsecontent.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |