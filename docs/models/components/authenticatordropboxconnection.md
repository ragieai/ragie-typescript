# AuthenticatorDropboxConnection

## Example Usage

```typescript
import { AuthenticatorDropboxConnection } from "ragie/models/components";

let value: AuthenticatorDropboxConnection = {
  data: {
    folderId: "<id>",
    folderName: "<value>",
  },
  email: "Harrison_Moore@hotmail.com",
  credentials: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.FolderData](../../models/components/folderdata.md)                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `email`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The email of the Dropbox account this is for                                                       |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |