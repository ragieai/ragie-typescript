# PublicFreshdeskConnection

## Example Usage

```typescript
import { PublicFreshdeskConnection } from "ragie/models/components";

let value: PublicFreshdeskConnection = {
  provider: "freshdesk",
  data: {
    tickets: true,
    articles: false,
  },
  userEmail: "<value>",
  credentials: {
    domain: "impossible-cd.net",
    apiKey: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `provider`                                                                         | *"freshdesk"*                                                                      | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [components.FreshdeskData](../../models/components/freshdeskdata.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |
| `userEmail`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The email the API key is associated with                                           |
| `credentials`                                                                      | [components.FreshdeskCredentials](../../models/components/freshdeskcredentials.md) | :heavy_check_mark:                                                                 | N/A                                                                                |