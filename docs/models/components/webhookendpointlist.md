# WebhookEndpointList

## Example Usage

```typescript
import { WebhookEndpointList } from "ragie/models/components";

let value: WebhookEndpointList = {
  pagination: {
    totalCount: 18197,
  },
  webhookEndpoints: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `pagination`                                                               | [components.Pagination](../../models/components/pagination.md)             | :heavy_check_mark:                                                         | N/A                                                                        |
| `webhookEndpoints`                                                         | [components.WebhookEndpoint](../../models/components/webhookendpoint.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |