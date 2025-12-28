# Responses

## Overview

### Available Operations

* [create](#create) - Create Response
* [get](#get) - Get Response

## create

Create a response. This will generate an LLM or agentic response. At this time the only supported model is `deep-search`. Responses may be streamed or returned synchronously. The `retrieve` tool is currently the only supported tool, more tools will be added in the future. A single partition may be provided in the retrieve tool. If omitted the `default` partition is used.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_response_responses_post" method="post" path="/responses" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.responses.create({
    input: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { responsesCreate } from "ragie/funcs/responsesCreate.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesCreate(ragie, {
    input: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.RequestT](../../models/components/requestt.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ResponseT](../../models/components/responset.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Get a response by its ID. This will return the response and its status. If the response is still in progress, the status will be `in_progress`. If the response is completed, the status will be `completed`. If the response is failed, the status will be `failed`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_response_responses__response_id__get" method="get" path="/responses/{response_id}" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.responses.get({
    responseId: "e613d0b7-4c9a-45ed-b32c-302d7f1c5daf",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { responsesGet } from "ragie/funcs/responsesGet.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await responsesGet(ragie, {
    responseId: "e613d0b7-4c9a-45ed-b32c-302d7f1c5daf",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("responsesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetResponseResponsesResponseIdGetRequest](../../models/operations/getresponseresponsesresponseidgetrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ResponseT](../../models/components/responset.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |