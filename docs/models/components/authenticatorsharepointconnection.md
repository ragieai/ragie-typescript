# AuthenticatorSharepointConnection

## Example Usage

```typescript
import { AuthenticatorSharepointConnection } from "ragie/models/components";

let value: AuthenticatorSharepointConnection = {
  provider: "sharepoint",
  data: {
    site: {
      id: "<id>",
      name: "<value>",
    },
    drive: {
      id: "<id>",
      name: "<value>",
    },
    files: [],
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
| `provider`                                                                                         | *"sharepoint"*                                                                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.SharepointData](../../models/components/sharepointdata.md)                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `userEmail`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The email of the Sharepoint account this is for                                                    |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |