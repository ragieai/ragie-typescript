# CreateAuthenticatorConnectionConnection


## Supported Types

### `components.AuthenticatorConfluenceConnection`

```typescript
const value: components.AuthenticatorConfluenceConnection = {
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

### `components.AuthenticatorDropboxConnection`

```typescript
const value: components.AuthenticatorDropboxConnection = {
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

### `components.AuthenticatorGmailConnection`

```typescript
const value: components.AuthenticatorGmailConnection = {
  data: {},
  email: "Levi.Kris@gmail.com",
  credentials: {
    refreshToken: "<value>",
  },
};
```

### `components.AuthenticatorGoogleDriveConnection`

```typescript
const value: components.AuthenticatorGoogleDriveConnection = {
  data: [],
  email: "Mallory43@hotmail.com",
  credentials: {
    refreshToken: "<value>",
  },
};
```

### `components.AuthenticatorHubspotConnection`

```typescript
const value: components.AuthenticatorHubspotConnection = {
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

### `components.AuthenticatorJiraConnection`

```typescript
const value: components.AuthenticatorJiraConnection = {
  credentials: {
    refreshToken: "<value>",
  },
};
```

### `components.AuthenticatorNotionConnection`

```typescript
const value: components.AuthenticatorNotionConnection = {
  workspaceId: "<id>",
  workspaceName: "<value>",
  userEmail: "<value>",
  credentials: {
    accessToken: "<value>",
  },
};
```

### `components.AuthenticatorOnedriveConnection`

```typescript
const value: components.AuthenticatorOnedriveConnection = {
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

### `components.AuthenticatorSalesforceConnection`

```typescript
const value: components.AuthenticatorSalesforceConnection = {
  userEmail: "<value>",
  url: "https://aged-gripper.biz",
  credentials: {
    refreshToken: "<value>",
  },
};
```

### `components.AuthenticatorSharepointConnection`

```typescript
const value: components.AuthenticatorSharepointConnection = {
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

### `components.AuthenticatorSlackConnection`

```typescript
const value: components.AuthenticatorSlackConnection = {
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

