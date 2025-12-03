# PublicZendeskConnection

## Example Usage

```typescript
import { PublicZendeskConnection } from "ragie/models/components";

let value: PublicZendeskConnection = {
  provider: "zendesk",
  data: {
    articles: true,
  },
  credentials: {
    domain: "young-publicity.info",
    email: "Creola33@yahoo.com",
    apiToken: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `provider`                                                                     | *"zendesk"*                                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.ZendeskData](../../models/components/zendeskdata.md)               | :heavy_check_mark:                                                             | N/A                                                                            |
| `credentials`                                                                  | [components.ZendeskCredentials](../../models/components/zendeskcredentials.md) | :heavy_check_mark:                                                             | N/A                                                                            |