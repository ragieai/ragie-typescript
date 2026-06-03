# AudioTranscriptionSegment

## Example Usage

```typescript
import { AudioTranscriptionSegment } from "ragie/models/components";

let value: AudioTranscriptionSegment = {
  modalityData: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `content`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `modalityData`                                                               | [components.WordModality](../../models/components/wordmodality.md)[]         | :heavy_check_mark:                                                           | A list of information per word that shows the word, start time, and end time |