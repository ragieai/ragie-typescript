# CreateAuthenticatorConnectionConnection


## Supported Types

### `components.AuthenticatorConfluenceConnection`

```typescript
const value: components.AuthenticatorConfluenceConnection = {
  provider: "confluence",
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
  provider: "dropbox",
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
  provider: "gmail",
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
  provider: "google_drive",
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

### `components.AuthenticatorJiraConnection`

```typescript
const value: components.AuthenticatorJiraConnection = {
  provider: "jira",
  credentials: {
    refreshToken: "<value>",
  },
};
```

### `components.AuthenticatorNotionConnection`

```typescript
const value: components.AuthenticatorNotionConnection = {
  provider: "notion",
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
  provider: "onedrive",
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
  provider: "salesforce",
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
  provider: "sharepoint",
  data: {
    site: {
      id: "<id>",
      name: "<value>",
      displayName: "Boris78",
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

