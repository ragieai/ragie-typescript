# CreateAuthenticatorConnectionRequest

## Example Usage

```typescript
import { CreateAuthenticatorConnectionRequest } from "ragie/models/operations";

let value: CreateAuthenticatorConnectionRequest = {
  authenticatorId: "542d0fbe-28cf-4bc8-ab12-c387eaab8efc",
  createAuthenticatorConnection: {
    partitionStrategy: {},
    pageLimit: 100,
    connection: {
      provider: "hubspot",
      data: {
        companies: false,
        contacts: false,
        contactNotes: true,
        deals: false,
        dealNotes: true,
        emails: true,
        tasks: false,
      },
      hubId: "<id>",
      hubDomain: "<value>",
      credentials: {
        refreshToken: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `authenticatorId`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createAuthenticatorConnection`                                                                      | [components.CreateAuthenticatorConnection](../../models/components/createauthenticatorconnection.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |