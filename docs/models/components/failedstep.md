# FailedStep

## Example Usage

```typescript
import { FailedStep } from "ragie/models/components";

let value: FailedStep = {
  think: "<value>",
  currentQuestion: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"failed"*         | :heavy_minus_sign: | N/A                |
| `think`            | *string*           | :heavy_check_mark: | N/A                |
| `currentQuestion`  | *string*           | :heavy_check_mark: | N/A                |
| `errored`          | *boolean*          | :heavy_minus_sign: | N/A                |