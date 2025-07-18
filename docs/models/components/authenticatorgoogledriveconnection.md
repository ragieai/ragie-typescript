# AuthenticatorGoogleDriveConnection

## Example Usage

```typescript
import { AuthenticatorGoogleDriveConnection } from "ragie/models/components";

let value: AuthenticatorGoogleDriveConnection = {
  data: [],
  email: "Mallory43@hotmail.com",
  credentials: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.GoogleFolderData](../../models/components/googlefolderdata.md)[]                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `email`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The email of the Google Drive account this is for                                                  |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |