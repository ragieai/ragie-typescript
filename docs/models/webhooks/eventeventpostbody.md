# EventeventPostBody


## Supported Types

### `components.DocumentUpdateWebhook`

```typescript
const value: components.DocumentUpdateWebhook = {
  nonce: "<value>",
  payload: {
    documentId: "<id>",
    status: "failed",
    partition: "<value>",
    metadata: {},
    externalId: "<id>",
    syncId: "<id>",
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
    documentMetadata: {},
    documentExternalId: "<id>",
    partition: "<value>",
    syncId: "<id>",
    data: {},
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
    connectionMetadata: {},
    createCount: 637462,
    updateContentCount: 811939,
    updateMetadataCount: 479385,
    deleteCount: 914864,
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
    connectionMetadata: {},
    createCount: 49348,
    createdCount: 292888,
    updateContentCount: 715053,
    updatedContentCount: 418109,
    updateMetadataCount: 172951,
    updatedMetadataCount: 107210,
    deleteCount: 817339,
    deletedCount: 473143,
    erroredCount: 882284,
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

