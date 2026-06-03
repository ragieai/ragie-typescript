# WebhookEndpoints

## Overview

### Available Operations

* [list](#list) - List Webhook Endpoints
* [create](#create) - Create Webhook Endpoint
* [get](#get) - Get Webhook Endpoint
* [delete](#delete) - Delete Webhook Endpoint
* [update](#update) - Update Webhook Endpoint

## list

List all webhook endpoints sorted by created_at in descending order. Results are paginated with a max limit of 100. When more endpoints are available, a `cursor` will be provided. Use the `cursor` parameter to retrieve the subsequent page.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListWebhookEndpoints" method="get" path="/webhook_endpoints" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.webhookEndpoints.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { webhookEndpointsList } from "ragie/funcs/webhookEndpointsList.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await webhookEndpointsList(ragie, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("webhookEndpointsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListWebhookEndpointsRequest](../../models/operations/listwebhookendpointsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListWebhookEndpointsResponse](../../models/operations/listwebhookendpointsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a webhook endpoint to receive notifications about document status updates, connection sync progress, partition limits, and other tenant events.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateWebhookEndpoint" method="post" path="/webhook_endpoints" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.webhookEndpoints.create({
    name: "<value>",
    url: "https://crazy-birth.name",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { webhookEndpointsCreate } from "ragie/funcs/webhookEndpointsCreate.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await webhookEndpointsCreate(ragie, {
    name: "<value>",
    url: "https://crazy-birth.name",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhookEndpointsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateWebhookEndpointPayload](../../models/components/createwebhookendpointpayload.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WebhookEndpoint](../../models/components/webhookendpoint.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Get a webhook endpoint by its id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetWebhookEndpoint" method="get" path="/webhook_endpoints/{endpoint_id}" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.webhookEndpoints.get({
    endpointId: "b2685048-407b-4461-ba68-ae1653b337f9",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { webhookEndpointsGet } from "ragie/funcs/webhookEndpointsGet.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await webhookEndpointsGet(ragie, {
    endpointId: "b2685048-407b-4461-ba68-ae1653b337f9",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhookEndpointsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWebhookEndpointRequest](../../models/operations/getwebhookendpointrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WebhookEndpoint](../../models/components/webhookendpoint.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 404, 429         | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a webhook endpoint to stop delivering webhook notifications to its URL.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeleteWebhookEndpoint" method="delete" path="/webhook_endpoints/{endpoint_id}" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.webhookEndpoints.delete({
    endpointId: "85d9c6f8-9d22-4119-886a-0389b9d5eee3",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { webhookEndpointsDelete } from "ragie/funcs/webhookEndpointsDelete.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await webhookEndpointsDelete(ragie, {
    endpointId: "85d9c6f8-9d22-4119-886a-0389b9d5eee3",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhookEndpointsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteWebhookEndpointRequest](../../models/operations/deletewebhookendpointrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ResponseOK](../../models/components/responseok.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 404, 429         | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update a webhook endpoint's name, URL, or active status. Use this to rotate endpoints or temporarily disable delivery without deleting the endpoint.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateWebhookEndpoint" method="patch" path="/webhook_endpoints/{endpoint_id}" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.webhookEndpoints.update({
    endpointId: "70a542b9-871a-42f4-a4a2-9f03a857e785",
    updateWebhookEndpointPayload: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { webhookEndpointsUpdate } from "ragie/funcs/webhookEndpointsUpdate.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await webhookEndpointsUpdate(ragie, {
    endpointId: "70a542b9-871a-42f4-a4a2-9f03a857e785",
    updateWebhookEndpointPayload: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("webhookEndpointsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateWebhookEndpointRequest](../../models/operations/updatewebhookendpointrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WebhookEndpoint](../../models/components/webhookendpoint.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 404, 429         | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |