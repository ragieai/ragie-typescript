# EventeventPostBody


## Supported Types

### `components.DocumentUpdateWebhook`

```typescript
const value: components.DocumentUpdateWebhook = {
  nonce: "<value>",
  payload: {
    documentId: "<id>",
    partition: "<value>",
    metadata: {},
    externalId: "<id>",
    name: "<value>",
    connectionId: "<id>",
    syncId: "<id>",
    error: "<value>",
  },
};
```

### `components.DocumentDeleteWebhook`

```typescript
const value: components.DocumentDeleteWebhook = {
  nonce: "<value>",
  payload: {
    documentId: "<id>",
    partition: "<value>",
    metadata: {},
    externalId: "<id>",
    name: "<value>",
    connectionId: "<id>",
    syncId: "<id>",
  },
};
```

### `components.EntityExtractedWebhook`

```typescript
const value: components.EntityExtractedWebhook = {
  nonce: "<value>",
  payload: {
    entityId: "<id>",
    documentId: "<id>",
    instructionId: "<id>",
    documentMetadata: {
      "key": "<value>",
      "key1": "<value>",
    },
    documentExternalId: "<id>",
    documentName: "<value>",
    partition: "<value>",
    syncId: "<id>",
    data: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

### `components.ConnectionSyncStartedWebhook`

```typescript
const value: components.ConnectionSyncStartedWebhook = {
  nonce: "<value>",
  payload: {
    connectionId: "<id>",
    syncId: "<id>",
    partition: "<value>",
    connectionMetadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    createCount: 577742,
    updateContentCount: 206968,
    updateMetadataCount: 339797,
    deleteCount: 556910,
  },
};
```

### `components.ConnectionSyncProgressWebhook`

```typescript
const value: components.ConnectionSyncProgressWebhook = {
  nonce: "<value>",
  payload: {
    connectionId: "<id>",
    syncId: "<id>",
    partition: "<value>",
    connectionMetadata: {
      "key": "<value>",
    },
    createCount: 757125,
    createdCount: 233157,
    updateContentCount: 260501,
    updatedContentCount: 43790,
    updateMetadataCount: 120497,
    updatedMetadataCount: 989841,
    deleteCount: 381029,
    deletedCount: 504776,
    erroredCount: 701098,
  },
};
```

### `components.ConnectionSyncFinishedWebhook`

```typescript
const value: components.ConnectionSyncFinishedWebhook = {
  nonce: "<value>",
  payload: {
    connectionId: "<id>",
    syncId: "<id>",
    partition: "<value>",
    connectionMetadata: {},
  },
};
```

### `components.ConnectionLimitExceededWebhook`

```typescript
const value: components.ConnectionLimitExceededWebhook = {
  nonce: "<value>",
  payload: {
    connectionId: "<id>",
    partition: "<value>",
    connectionMetadata: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

### `components.PartitionLimitExceededWebhook`

```typescript
const value: components.PartitionLimitExceededWebhook = {
  nonce: "<value>",
  payload: {
    partition: "<value>",
    limitType: "pages_hosted_limit_monthly",
  },
};
```

