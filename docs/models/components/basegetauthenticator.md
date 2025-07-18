# BaseGetAuthenticator

## Example Usage

```typescript
import { BaseGetAuthenticator } from "ragie/models/components";

let value: BaseGetAuthenticator = {
  provider: "<value>",
  name: "<value>",
  id: "1da16ed4-8931-44ec-b0c8-ab7b68442657",
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `provider`                                                                                                                                                                      | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |
| `name`                                                                                                                                                                          | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | The unique name of your authenticator, used to identify it and distinguish it from others. This name must be unique. Attempting to reuse the same name will result in an error. |
| `id`                                                                                                                                                                            | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |