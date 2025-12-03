# AuthenticatorSlackConnection

## Example Usage

```typescript
import { AuthenticatorSlackConnection } from "ragie/models/components";

let value: AuthenticatorSlackConnection = {
  provider: "slack",
  data: {
    channelId: "<id>",
    channelName: "<value>",
  },
  userEmail: "<value>",
  credentials: {
    accessToken: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `provider`                                                                             | *"slack"*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [components.SlackData](../../models/components/slackdata.md)                           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `userEmail`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The email of the Slack account this is for                                             |
| `credentials`                                                                          | [components.AccessTokenCredentials](../../models/components/accesstokencredentials.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |