# AuthenticatorNotionConnection

## Example Usage

```typescript
import { AuthenticatorNotionConnection } from "ragie/models/components";

let value: AuthenticatorNotionConnection = {
  provider: "notion",
  workspaceId: "<id>",
  workspaceName: "<value>",
  userEmail: "<value>",
  credentials: {
    accessToken: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `provider`                                                                             | *"notion"*                                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `workspaceId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `workspaceName`                                                                        | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `userEmail`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The email of the Notion account this is for                                            |
| `credentials`                                                                          | [components.AccessTokenCredentials](../../models/components/accesstokencredentials.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |