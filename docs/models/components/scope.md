# Scope

The scope of the instruction. Determines whether the instruction is applied to the entire document or to each chunk of the document. Options are `'document'` or `'chunk'`. Generally `'document'` should be used when analyzing the full document is desired, such as when generating a summary or determining sentiment, and `'chunk'` should be used when a fine grained search over a document is desired.

## Example Usage

```typescript
import { Scope } from "ragie/models/components";

let value: Scope = "document";
```

## Values

```typescript
"document" | "chunk"
```