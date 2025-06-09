# ListConnectorSourceTypeInfo

## Example Usage

```typescript
import { ListConnectorSourceTypeInfo } from "ragie/models/components";

let value: ListConnectorSourceTypeInfo = {
  connectors: [
    {
      sourceType: "jira",
      displayName: "Esmeralda.Von",
      iconUrl: "https://miserable-help.org",
      docsUrl: "https://blushing-hutch.net",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `connectors`                                                                               | [components.ConnectorSourceTypeInfo](../../models/components/connectorsourcetypeinfo.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |