# AuthenticatorConfluenceConnection

## Example Usage

```typescript
import { AuthenticatorConfluenceConnection } from "ragie/models/components";

let value: AuthenticatorConfluenceConnection = {
  data: [
    {
      resourceId: "<id>",
      spaceId: 163212,
      spaceKey: "<value>",
      spaceName: "<value>",
    },
  ],
  credentials: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.ConfluenceData](../../models/components/confluencedata.md)[]                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |