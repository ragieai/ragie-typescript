# AuthenticatorGmailConnection

## Example Usage

```typescript
import { AuthenticatorGmailConnection } from "ragie/models/components";

let value: AuthenticatorGmailConnection = {
  provider: "gmail",
  data: {},
  email: "Levi.Kris@gmail.com",
  credentials: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | *"gmail"*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.GmailData](../../models/components/gmaildata.md)                                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `email`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The email of the Google Drive account this is for                                                  |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |