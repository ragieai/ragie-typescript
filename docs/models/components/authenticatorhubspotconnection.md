# AuthenticatorHubspotConnection

## Example Usage

```typescript
import { AuthenticatorHubspotConnection } from "ragie/models/components";

let value: AuthenticatorHubspotConnection = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | *"hubspot"*                                                                                        | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.HubspotData](../../models/components/hubspotdata.md)                                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `hubId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `hubDomain`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |