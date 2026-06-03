# Connections

## Overview

### Available Operations

* [createConnection](#createconnection) - Create Connection
* [list](#list) - List Connections
* [createOAuthRedirectUrl](#createoauthredirecturl) - Create Oauth Redirect Url
* [listConnectionSourceTypes](#listconnectionsourcetypes) - List Connection Source Types
* [setEnabled](#setenabled) - Set Connection Enabled
* [get](#get) - Get Connection
* [update](#update) - Update Connection
* [getStats](#getstats) - Get Connection Stats
* [setLimits](#setlimits) - Set Connection Limits
* [delete](#delete) - Delete Connection
* [sync](#sync) - Sync Connection

## createConnection

Create a connection. This is only for non-oauth connections such as S3 compatible connections, Freshdesk, and Zendesk.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateConnection" method="post" path="/connection" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.createConnection({
    partitionStrategy: {},
    pageLimit: null,
    connection: {
      provider: "gcs",
      data: {
        bucket: "<value>",
        importFileMetadata: false,
      },
      credentials: {
        "key": "<value>",
        "key1": "<value>",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsCreateConnection } from "ragie/funcs/connectionsCreateConnection.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsCreateConnection(ragie, {
    partitionStrategy: {},
    pageLimit: null,
    connection: {
      provider: "gcs",
      data: {
        bucket: "<value>",
        importFileMetadata: false,
      },
      credentials: {
        "key": "<value>",
        "key1": "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsCreateConnection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PublicCreateConnection](../../models/components/publiccreateconnection.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Connection](../../models/components/connection.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 400, 401, 402, 429         | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## list

List all connections sorted by created_at in descending order. Results are paginated with a max limit of 100. When more documents are available, a `cursor` will be provided. Use the `cursor` parameter to retrieve the subsequent page.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_connections_connections_get" method="get" path="/connections" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.list({
    filter: "{\"department\":{\"$in\":[\"sales\",\"marketing\"]}}",
    partition: "acme_customer_id",
  });

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
import { connectionsList } from "ragie/funcs/connectionsList.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsList(ragie, {
    filter: "{\"department\":{\"$in\":[\"sales\",\"marketing\"]}}",
    partition: "acme_customer_id",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("connectionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListConnectionsConnectionsGetRequest](../../models/operations/listconnectionsconnectionsgetrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListConnectionsConnectionsGetResponse](../../models/operations/listconnectionsconnectionsgetresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## createOAuthRedirectUrl

Creates a redirect url to redirect the user to when initializing an embedded connector.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_oauth_redirect_url_connections_oauth_post" method="post" path="/connections/oauth" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.createOAuthRedirectUrl({
    redirectUri: "https://babyish-rationale.biz/",
    pageLimit: 1000,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsCreateOAuthRedirectUrl } from "ragie/funcs/connectionsCreateOAuthRedirectUrl.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsCreateOAuthRedirectUrl(ragie, {
    redirectUri: "https://babyish-rationale.biz/",
    pageLimit: 1000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsCreateOAuthRedirectUrl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.OAuthUrlCreate](../../models/components/oauthurlcreate.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OAuthUrlResponse](../../models/components/oauthurlresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listConnectionSourceTypes

List available connection source types like 'google_drive' and 'notion' along with their metadata

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_connection_source_types_connections_source_type_get" method="get" path="/connections/source-type" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.listConnectionSourceTypes();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsListConnectionSourceTypes } from "ragie/funcs/connectionsListConnectionSourceTypes.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsListConnectionSourceTypes(ragie);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsListConnectionSourceTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListConnectorSourceTypeInfo](../../models/components/listconnectorsourcetypeinfo.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorMessage | 401, 402, 429       | application/json    |
| errors.ErrorMessage | 500                 | application/json    |
| errors.SDKError     | 4XX, 5XX            | \*/\*               |

## setEnabled

Enable or disable the connection. A disabled connection won't sync.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_connection_enabled_connections__connection_id__enabled_put" method="put" path="/connections/{connection_id}/enabled" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.setEnabled({
    connectionId: "e424ce92-7b06-4702-9d48-a18157d07128",
    setConnectionEnabledPayload: {
      enabled: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsSetEnabled } from "ragie/funcs/connectionsSetEnabled.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsSetEnabled(ragie, {
    connectionId: "e424ce92-7b06-4702-9d48-a18157d07128",
    setConnectionEnabledPayload: {
      enabled: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsSetEnabled failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetConnectionEnabledConnectionsConnectionIdEnabledPutRequest](../../models/operations/setconnectionenabledconnectionsconnectionidenabledputrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Connection](../../models/components/connection.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Get a connection.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_connection_connections__connection_id__get" method="get" path="/connections/{connection_id}" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.get({
    connectionId: "af154d9d-a1af-4619-964d-b1589f2ec4f8",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsGet } from "ragie/funcs/connectionsGet.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsGet(ragie, {
    connectionId: "af154d9d-a1af-4619-964d-b1589f2ec4f8",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectionConnectionsConnectionIdGetRequest](../../models/operations/getconnectionconnectionsconnectionidgetrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Connection](../../models/components/connection.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Updates a connections metadata or mode. These changes will be seen after the next sync.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_connection_connections__connection_id__put" method="put" path="/connections/{connection_id}" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.update({
    connectionId: "eff214ac-1929-43f3-892b-108f57be0158",
    connectionBase: {
      partitionStrategy: {},
      pageLimit: 1000,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsUpdate } from "ragie/funcs/connectionsUpdate.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsUpdate(ragie, {
    connectionId: "eff214ac-1929-43f3-892b-108f57be0158",
    connectionBase: {
      partitionStrategy: {},
      pageLimit: 1000,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConnectionConnectionsConnectionIdPutRequest](../../models/operations/updateconnectionconnectionsconnectionidputrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Connection](../../models/components/connection.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getStats

Lists connection stats: total documents active documents, total active pages.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_connection_stats_connections__connection_id__stats_get" method="get" path="/connections/{connection_id}/stats" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.getStats({
    connectionId: "1568dd0e-2d57-45b1-a9f4-9d646aec54a2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsGetStats } from "ragie/funcs/connectionsGetStats.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsGetStats(ragie, {
    connectionId: "1568dd0e-2d57-45b1-a9f4-9d646aec54a2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsGetStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectionStatsConnectionsConnectionIdStatsGetRequest](../../models/operations/getconnectionstatsconnectionsconnectionidstatsgetrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ConnectionStats](../../models/components/connectionstats.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## setLimits

Sets limits on a connection. Limits can be set on the total number of pages a connection can sync. When the limit is reached, the connection will be disabled. Limit may be removed by setting it to `null`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_connection_limits_connections__connection_id__limit_put" method="put" path="/connections/{connection_id}/limit" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.setLimits({
    connectionId: "ab1a17e7-8b6f-470a-aeda-1c8e11512d19",
    connectionLimitParams: {
      pageLimit: 1000,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsSetLimits } from "ragie/funcs/connectionsSetLimits.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsSetLimits(ragie, {
    connectionId: "ab1a17e7-8b6f-470a-aeda-1c8e11512d19",
    connectionLimitParams: {
      pageLimit: 1000,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsSetLimits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetConnectionLimitsConnectionsConnectionIdLimitPutRequest](../../models/operations/setconnectionlimitsconnectionsconnectionidlimitputrequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Connection](../../models/components/connection.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Schedules a connection to be deleted. You can choose to keep the files from the connection or delete them all. If you keep the files, they will no longer be associated to the connection. Deleting can take some time, so you will still see files for a bit after this is called.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_connection_connections__connection_id__delete_post" method="post" path="/connections/{connection_id}/delete" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.delete({
    connectionId: "4082c01e-fae3-4426-9e96-0d19035a99ea",
    deleteConnectionPayload: {
      keepFiles: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsDelete } from "ragie/funcs/connectionsDelete.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsDelete(ragie, {
    connectionId: "4082c01e-fae3-4426-9e96-0d19035a99ea",
    deleteConnectionPayload: {
      keepFiles: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteConnectionConnectionsConnectionIdDeletePostRequest](../../models/operations/deleteconnectionconnectionsconnectioniddeletepostrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: string }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## sync

Schedules a connector to sync as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="SyncConnection" method="post" path="/connections/{connection_id}/sync" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.sync({
    connectionId: "cf2b9381-3cee-4449-b7d1-9eb470186924",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { connectionsSync } from "ragie/funcs/connectionsSync.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await connectionsSync(ragie, {
    connectionId: "cf2b9381-3cee-4449-b7d1-9eb470186924",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("connectionsSync failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SyncConnectionRequest](../../models/operations/syncconnectionrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ResponseOK](../../models/components/responseok.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 400, 401, 402, 429         | application/json           |
| errors.ErrorMessage        | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |