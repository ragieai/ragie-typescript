# PublicCreateConnectionConnection


## Supported Types

### `components.PublicBackblazeConnection`

```typescript
const value: components.PublicBackblazeConnection = {
  data: {
    bucket: "<value>",
  },
  credentials: {
    keyId: "<id>",
    applicationKey: "<value>",
    region: "<value>",
    endpoint: "<value>",
  },
};
```

### `components.PublicFreshdeskConnection`

```typescript
const value: components.PublicFreshdeskConnection = {
  data: {
    tickets: true,
    articles: false,
  },
  userEmail: "<value>",
  credentials: {
    domain: "impossible-cd.net",
    apiKey: "<value>",
  },
};
```

### `components.PublicGCSConnection`

```typescript
const value: components.PublicGCSConnection = {
  data: {
    bucket: "<value>",
  },
  credentials: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `components.PublicIntercomConnection`

```typescript
const value: components.PublicIntercomConnection = {
  data: {},
  credentials: {
    accessToken: "<value>",
    appName: "<value>",
    userEmail: "<value>",
  },
};
```

### `components.PublicS3CompatibleConnection`

```typescript
const value: components.PublicS3CompatibleConnection = {
  data: {
    bucket: "<value>",
  },
  credentials: {
    accessKeyId: "<id>",
    secretAccessKey: "<value>",
    region: "<value>",
  },
};
```

### `components.PublicZendeskConnection`

```typescript
const value: components.PublicZendeskConnection = {
  data: {
    articles: true,
  },
  credentials: {
    domain: "young-publicity.info",
    email: "Creola33@yahoo.com",
    apiToken: "<value>",
  },
};
```

