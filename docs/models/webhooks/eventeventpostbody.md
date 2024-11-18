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
    createCount: 817339,
    updateContentCount: 473143,
    updateMetadataCount: 882284,
    deleteCount: 733289,
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
    createCount: 409726,
    createdCount: 373511,
    updateContentCount: 515638,
    updatedContentCount: 889060,
    updateMetadataCount: 737279,
    updatedMetadataCount: 5152,
    deleteCount: 694158,
    deletedCount: 919508,
    erroredCount: 710456,
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

