# ReasoningOutput

## Example Usage

```typescript
import { ReasoningOutput } from "ragie/models/components";

let value: ReasoningOutput = {
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

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The unique ID of the reasoning output.                                               |
| `summary`                                                                            | [components.ReasoningSummary](../../models/components/reasoningsummary.md)[]         | :heavy_check_mark:                                                                   | The summary of the reasoning.                                                        |
| `type`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `content`                                                                            | [components.ReasoningText](../../models/components/reasoningtext.md)[]               | :heavy_check_mark:                                                                   | The content of the reasoning.                                                        |
| `encryptedContent`                                                                   | *string*                                                                             | :heavy_check_mark:                                                                   | The encrypted content of the reasoning output.                                       |
| `status`                                                                             | [components.ReasoningOutputStatus](../../models/components/reasoningoutputstatus.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |