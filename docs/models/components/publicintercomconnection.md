# PublicIntercomConnection

## Example Usage

```typescript
import { PublicIntercomConnection } from "ragie/models/components";

let value: PublicIntercomConnection = {
  data: {},
  credentials: {
    accessToken: "<value>",
    appName: "<value>",
    userEmail: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `provider`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.IntercomData](../../models/components/intercomdata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `credentials`                                                                    | [components.IntercomCredentials](../../models/components/intercomcredentials.md) | :heavy_check_mark:                                                               | N/A                                                                              |