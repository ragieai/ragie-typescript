# PublicCreateConnectionConnection


## Supported Types

### `components.PublicBackblazeConnection`

```typescript
const value: components.PublicBackblazeConnection = {
  provider: "backblaze",
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
  provider: "freshdesk",
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
  provider: "gcs",
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
  provider: "intercom",
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
  provider: "s3",
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

### `components.PublicWebcrawlerConnection`

```typescript
const value: components.PublicWebcrawlerConnection = {
  provider: "webcrawler",
  data: {
    url: "https://total-statue.org",
  },
};
```

### `components.PublicZendeskConnection`

```typescript
const value: components.PublicZendeskConnection = {
  provider: "zendesk",
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

