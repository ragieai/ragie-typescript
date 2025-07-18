# PublicIntercomConnection

## Example Usage

```typescript
import { PublicIntercomConnection } from "ragie/models/components";

let value: PublicIntercomConnection = {
  data: {
    admins: false,
    tickets: true,
    contacts: false,
    ticketAttachments: true,
    ticketComments: true,
    ticketNotes: true,
  },
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