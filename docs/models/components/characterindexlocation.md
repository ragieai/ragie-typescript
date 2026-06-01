# CharacterIndexLocation

Location within linear text using zero-based character offsets.

## Example Usage

```typescript
import { CharacterIndexLocation } from "ragie/models/components";

let value: CharacterIndexLocation = {
  locationType: "character_index",
  startCharIndex: 983983,
  endCharIndex: 10842,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `locationType`                    | *"character_index"*               | :heavy_check_mark:                | N/A                               |
| `startCharIndex`                  | *number*                          | :heavy_check_mark:                | Start character index (inclusive) |
| `endCharIndex`                    | *number*                          | :heavy_check_mark:                | End character index (exclusive)   |