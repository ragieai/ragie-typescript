# Partitions
(*partitions*)

## Overview

### Available Operations

* [list](#list) - List Partitions
* [create](#create) - Create Partition
* [get](#get) - Get Partition
* [delete](#delete) - Delete Partition
* [setLimits](#setlimits) - Set Partition Limits

## list

List all partitions sorted by name in ascending order. Results are paginated with a max limit of 100. When more partitions are available, a `cursor` will be provided. Use the `cursor` parameter to retrieve the subsequent page.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_partitions_partitions_get" method="get" path="/partitions" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.partitions.list({});

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
import { partitionsList } from "ragie/funcs/partitionsList.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await partitionsList(ragie, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("partitionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPartitionsPartitionsGetRequest](../../models/operations/listpartitionspartitionsgetrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPartitionsPartitionsGetResponse](../../models/operations/listpartitionspartitionsgetresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a new partition. Partitions are used to scope documents, connections, and instructions. Partitions must be lowercase alphanumeric and may only include the special characters `_` and `-`. A partition may also be created by creating a document in it. Limits for a partition may optionally be defined when creating.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_partition_partitions_post" method="post" path="/partitions" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.partitions.create({
    name: "<value>",
    pagesHostedLimitMonthly: 1000,
    pagesProcessedLimitMonthly: 1000,
    pagesHostedLimitMax: 1000,
    pagesProcessedLimitMax: 1000,
    audioProcessedLimitMonthly: 60,
    audioProcessedLimitMax: 60,
    videoProcessedLimitMonthly: 60,
    videoProcessedLimitMax: 60,
    mediaStreamedLimitMonthly: 1024,
    mediaStreamedLimitMax: 1024,
    mediaHostedLimitMonthly: 1024,
    mediaHostedLimitMax: 1024,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { partitionsCreate } from "ragie/funcs/partitionsCreate.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await partitionsCreate(ragie, {
    name: "<value>",
    pagesHostedLimitMonthly: 1000,
    pagesProcessedLimitMonthly: 1000,
    pagesHostedLimitMax: 1000,
    pagesProcessedLimitMax: 1000,
    audioProcessedLimitMonthly: 60,
    audioProcessedLimitMax: 60,
    videoProcessedLimitMonthly: 60,
    videoProcessedLimitMax: 60,
    mediaStreamedLimitMonthly: 1024,
    mediaStreamedLimitMax: 1024,
    mediaHostedLimitMonthly: 1024,
    mediaHostedLimitMax: 1024,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partitionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreatePartitionParams](../../models/components/createpartitionparams.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Partition](../../models/components/partition.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Get a partition by its ID. Includes usage information such as the number of documents and pages hosted and processed. The partition's limits are also included.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_partition_partitions__partition_id__get" method="get" path="/partitions/{partition_id}" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.partitions.get({
    partitionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { partitionsGet } from "ragie/funcs/partitionsGet.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await partitionsGet(ragie, {
    partitionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partitionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPartitionPartitionsPartitionIdGetRequest](../../models/operations/getpartitionpartitionspartitionidgetrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PartitionDetail](../../models/components/partitiondetail.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Deletes a partition and all of its associated data. This includes connections, documents, and partition specific instructions. This operation is irreversible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_partition_partitions__partition_id__delete" method="delete" path="/partitions/{partition_id}" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.partitions.delete({
    partitionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { partitionsDelete } from "ragie/funcs/partitionsDelete.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await partitionsDelete(ragie, {
    partitionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partitionsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePartitionPartitionsPartitionIdDeleteRequest](../../models/operations/deletepartitionpartitionspartitioniddeleterequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## setLimits

Sets limits on a partition. Limits can be set on the total number of pages a partition can host and process. When the limit is reached, the partition will be disabled. A limit may be removed by setting it to `null`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_partition_limits_partitions__partition_id__limits_put" method="put" path="/partitions/{partition_id}/limits" -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.partitions.setLimits({
    partitionId: "<id>",
    partitionLimitParams: {
      pagesHostedLimitMonthly: 1000,
      pagesProcessedLimitMonthly: 1000,
      pagesHostedLimitMax: 1000,
      pagesProcessedLimitMax: 1000,
      videoProcessedLimitMonthly: 3600,
      videoProcessedLimitMax: 3600,
      audioProcessedLimitMonthly: 3600,
      audioProcessedLimitMax: 3600,
      mediaStreamedLimitMonthly: 1024,
      mediaStreamedLimitMax: 1024,
      mediaHostedLimitMonthly: 1024,
      mediaHostedLimitMax: 1024,
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
import { partitionsSetLimits } from "ragie/funcs/partitionsSetLimits.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await partitionsSetLimits(ragie, {
    partitionId: "<id>",
    partitionLimitParams: {
      pagesHostedLimitMonthly: 1000,
      pagesProcessedLimitMonthly: 1000,
      pagesHostedLimitMax: 1000,
      pagesProcessedLimitMax: 1000,
      videoProcessedLimitMonthly: 3600,
      videoProcessedLimitMax: 3600,
      audioProcessedLimitMonthly: 3600,
      audioProcessedLimitMax: 3600,
      mediaStreamedLimitMonthly: 1024,
      mediaStreamedLimitMax: 1024,
      mediaHostedLimitMonthly: 1024,
      mediaHostedLimitMax: 1024,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("partitionsSetLimits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetPartitionLimitsPartitionsPartitionIdLimitsPutRequest](../../models/operations/setpartitionlimitspartitionspartitionidlimitsputrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PartitionDetail](../../models/components/partitiondetail.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.ErrorMessage        | 401, 402, 429              | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |