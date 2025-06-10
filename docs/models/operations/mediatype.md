# MediaType

The desired media type of the content to return described as a mime type. An error will be returned if the requested media type is not supported for the chunk's document type.

## Example Usage

```typescript
import { MediaType } from "ragie/models/operations";

let value: MediaType = "text/plain";
```

## Values

```typescript
"text/plain" | "audio/mpeg" | "video/mp4"
```