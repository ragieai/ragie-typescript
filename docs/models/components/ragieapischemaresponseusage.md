# RagieApiSchemaResponseUsage

## Example Usage

```typescript
import { RagieApiSchemaResponseUsage } from "ragie/models/components";

let value: RagieApiSchemaResponseUsage = {
  inputTokens: 786425,
  outputTokens: 620388,
  totalTokens: 96819,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `inputTokens`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `inputTokenDetails`                                                            | [components.InputTokenDetails](../../models/components/inputtokendetails.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `outputTokens`                                                                 | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outputTokenDetails`                                                           | [components.OutputTokenDetails](../../models/components/outputtokendetails.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `totalTokens`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |