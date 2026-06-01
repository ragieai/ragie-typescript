# PublicWebcrawlerConnection

## Example Usage

```typescript
import { PublicWebcrawlerConnection } from "ragie/models/components";

let value: PublicWebcrawlerConnection = {
  provider: "webcrawler",
  data: {
    url: "https://total-statue.org",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `provider`                                                             | *"webcrawler"*                                                         | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.WebcrawlerData](../../models/components/webcrawlerdata.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `credentials`                                                          | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |