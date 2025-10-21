# Steps


## Supported Types

### `components.AnswerStep`

```typescript
const value: components.AnswerStep = {
  think: "<value>",
  currentQuestion: "<value>",
  answer: {
    text: "<value>",
  },
};
```

### `components.SearchStep`

```typescript
const value: components.SearchStep = {
  think: "<value>",
  currentQuestion: "<value>",
  search: {
    searchRequests: [],
  },
};
```

### `components.SearchStepWithQueryDetails`

```typescript
const value: components.SearchStepWithQueryDetails = {
  think: "<value>",
  currentQuestion: "<value>",
  search: {
    searchRequests: [],
  },
};
```

### `components.PlanStep`

```typescript
const value: components.PlanStep = {
  think: "<value>",
  currentQuestion: "<value>",
};
```

### `components.CodeStep`

```typescript
const value: components.CodeStep = {
  think: "<value>",
  currentQuestion: "<value>",
  codeIssue: "<value>",
};
```

### `components.SurrenderStep`

```typescript
const value: components.SurrenderStep = {
  think: "<value>",
  currentQuestion: "<value>",
  partialAnswer: {
    text: "<value>",
  },
};
```

### `components.EvaluatedAnswerStep`

```typescript
const value: components.EvaluatedAnswerStep = {
  think: "<value>",
  currentQuestion: "<value>",
  answer: {
    text: "<value>",
  },
  evalPassed: true,
  evalReason: "<value>",
};
```

### `components.FailedStep`

```typescript
const value: components.FailedStep = {
  think: "<value>",
  currentQuestion: "<value>",
};
```

