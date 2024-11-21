# EventeventPostBody


## Supported Types

### `components.DocumentUpdateWebhook`

```typescript
const value: components.DocumentUpdateWebhook = {
  nonce: "<value>",
  payload: {
    documentId: "<id>",
    status: "ready",
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
    createCount: 107210,
    updateContentCount: 817339,
    updateMetadataCount: 473143,
    deleteCount: 882284,
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
    createCount: 733289,
    createdCount: 409726,
    updateContentCount: 373511,
    updatedContentCount: 515638,
    updateMetadataCount: 889060,
    updatedMetadataCount: 737279,
    deleteCount: 5152,
    deletedCount: 694158,
    erroredCount: 919508,
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

