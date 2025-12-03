# Output


## Supported Types

### `components.ResponseOutputMessage`

```typescript
const value: components.ResponseOutputMessage = {
  id: "<id>",
  content: [],
};
```

### `components.ReasoningOutput`

```typescript
const value: components.ReasoningOutput = {
  id: "<id>",
  summary: [
    {
      summary: "<value>",
    },
  ],
  content: [
    {
      text: "<value>",
    },
  ],
  encryptedContent: "<value>",
};
```

### `components.CodeInterpreterOutput`

```typescript
const value: components.CodeInterpreterOutput = {
  id: "<id>",
  code: "<value>",
  containerId: "<id>",
  outputs: [
    {
      logs: "<value>",
    },
  ],
};
```

### `components.FileSearchOutput`

```typescript
const value: components.FileSearchOutput = {
  id: "<id>",
  queries: [],
  type: "file_search_call",
  results: [],
};
```

