# AuthenticatorHubspotConnection

## Example Usage

```typescript
import { AuthenticatorHubspotConnection } from "ragie/models/components";

let value: AuthenticatorHubspotConnection = {
  data: {
    companies: true,
    contacts: false,
    contactNotes: true,
    deals: true,
    dealNotes: false,
    emails: true,
    tasks: true,
  },
  hubId: "<id>",
  hubDomain: "<value>",
  credentials: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.HubspotData](../../models/components/hubspotdata.md)                                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `hubId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `hubDomain`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |