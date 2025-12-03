# AuthenticatorJiraConnection

## Example Usage

```typescript
import { AuthenticatorJiraConnection } from "ragie/models/components";

let value: AuthenticatorJiraConnection = {
  provider: "jira",
  credentials: {
    refreshToken: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `provider`                                                                                         | *"jira"*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `credentials`                                                                                      | [components.OAuthRefreshTokenCredentials](../../models/components/oauthrefreshtokencredentials.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |