# AuthenticatorSalesforceConnection

## Example Usage

```typescript
import { AuthenticatorSalesforceConnection } from "ragie/models/components";

let value: AuthenticatorSalesforceConnection = {
  userEmail: "<value>",
  url: "https://aged-gripper.biz",
  credentials: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `userEmail`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The email of the Salesforce account this is for                                                    |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | The url of your Salesforce instance, where you go to login.                                        |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |