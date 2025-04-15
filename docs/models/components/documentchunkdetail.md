# DocumentChunkDetail

## Example Usage

```typescript
import { DocumentChunkDetail } from "ragie/models/components";

let value: DocumentChunkDetail = {
  id: "2650625e-85a1-40d1-8423-e8edbf997e3c",
  text: "<value>",
  links: {
    "key": {
      href: "<value>",
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                      | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `index`                                                                                                                                   | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |
| `text`                                                                                                                                    | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `metadata`                                                                                                                                | Record<string, *any*>                                                                                                                     | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |
| `links`                                                                                                                                   | Record<string, [components.Link](../../models/components/link.md)>                                                                        | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `modalityData`                                                                                                                            | *components.ModalityData*                                                                                                                 | :heavy_minus_sign:                                                                                                                        | Additional data specific to the modality of the chunk's source file, such as word level timestamps for chunks extracted from audio files. |