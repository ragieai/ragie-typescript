# EventeventPostBody


## Supported Types

### `components.DocumentUpdateWebhook`

```typescript
const value: components.DocumentUpdateWebhook = {
  nonce: "<value>",
  payload: {
    documentId: "<id>",
    partition: "<value>",
    metadata: {
      "key": "<value>",
    },
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
    metadata: {
      "key": "<value>",
    },
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
    },
    documentExternalId: "<id>",
    documentName: "<value>",
    partition: "<value>",
    syncId: "<id>",
    data: {
      "key": "<value>",
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
    },
    createCount: 159743,
    updateContentCount: 417561,
    updateMetadataCount: 198947,
    deleteCount: 728065,
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
    createCount: 416878,
    createdCount: 692852,
    updateContentCount: 497232,
    updatedContentCount: 108222,
    updateMetadataCount: 854921,
    updatedMetadataCount: 183861,
    deleteCount: 347596,
    deletedCount: 617608,
    erroredCount: 45704,
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
    connectionMetadata: {
      "key": "<value>",
    },
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
    limitType: "pages_processed_limit_monthly",
  },
};
```

