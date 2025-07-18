# S3CompatibleCredentials

## Example Usage

```typescript
import { S3CompatibleCredentials } from "ragie/models/components";

let value: S3CompatibleCredentials = {
  accessKeyId: "<id>",
  secretAccessKey: "<value>",
  region: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `accessKeyId`      | *string*           | :heavy_check_mark: | N/A                |
| `secretAccessKey`  | *string*           | :heavy_check_mark: | N/A                |
| `region`           | *string*           | :heavy_check_mark: | N/A                |
| `endpoint`         | *string*           | :heavy_minus_sign: | N/A                |