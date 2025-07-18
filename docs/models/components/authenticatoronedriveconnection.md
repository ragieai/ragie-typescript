# AuthenticatorOnedriveConnection

## Example Usage

```typescript
import { AuthenticatorOnedriveConnection } from "ragie/models/components";

let value: AuthenticatorOnedriveConnection = {
  data: {
    driveId: "<id>",
    folderId: "<id>",
    folderName: "<value>",
  },
  userEmail: "<value>",
  credentials: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.OnedriveData](../../models/components/onedrivedata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `userEmail`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The email of the Onedrive account this is for                                                      |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |