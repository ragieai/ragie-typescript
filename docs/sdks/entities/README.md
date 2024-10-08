# Entities
(*entities*)

## Overview

### Available Operations

* [listInstructions](#listinstructions) - List Instructions
* [createInstruction](#createinstruction) - Create Instruction
* [updateInstruction](#updateinstruction) - Update Instruction
* [listByInstruction](#listbyinstruction) - Get Instruction Extracted Entities
* [listByDocument](#listbydocument) - Get Document Extracted Entities

## listInstructions

List all instructions.

### Example Usage

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.entities.listInstructions();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { entitiesListInstructions } from "ragie/funcs/entitiesListInstructions.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await entitiesListInstructions(ragie);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
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

**Promise\<[components.Instruction[]](../../models/.md)\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorMessage | 401                 | application/json    |
| errors.SDKError     | 4XX, 5XX            | \*/\*               |

## createInstruction

Create a new instruction. Instructions are applied to documents as they are created or updated. The results of the instruction are stored as structured data in the schema defined by the `entity_schema` parameter. The `prompt` parameter is a natural language instruction which will be applied to documents. This feature is in beta and may change in the future.

### Example Usage

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.entities.createInstruction({
    name: "Find all pizzas",
    active: true,
    scope: "chunk",
    prompt: "Find all pizzas described in the text.",
    entitySchema: {
      "additionalProperties": false,
      "properties": {
        "size": {
          "enum": [
            "small",
            "medium",
            "large",
          ],
          "type": "string",
        },
        "crust": {
          "enum": [
            "thin",
            "thick",
            "stuffed",
          ],
          "type": "string",
        },
        "sauce": {
          "enum": [
            "tomato",
            "alfredo",
            "pesto",
          ],
          "type": "string",
        },
        "cheese": {
          "enum": [
            "mozzarella",
            "cheddar",
            "parmesan",
            "vegan",
          ],
          "type": "string",
        },
        "toppings": {
          "items": {
            "enum": [
              "pepperoni",
              "mushrooms",
              "onions",
              "sausage",
              "bacon",
              "extra cheese",
              "black olives",
              "green peppers",
              "pineapple",
              "spinach",
            ],
            "type": "string",
          },
          "type": "array",
          "uniqueItems": true,
        },
        "extraInstructions": {
          "type": "string",
        },
      },
      "required": [
        "size",
        "crust",
        "sauce",
        "cheese",
      ],
      "title": "Pizza",
      "type": "object",
    },
    filter: {},
    partition: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { entitiesCreateInstruction } from "ragie/funcs/entitiesCreateInstruction.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await entitiesCreateInstruction(ragie, {
    name: "Find all pizzas",
    active: true,
    scope: "chunk",
    prompt: "Find all pizzas described in the text.",
    entitySchema: {
      "additionalProperties": false,
      "properties": {
        "size": {
          "enum": [
            "small",
            "medium",
            "large",
          ],
          "type": "string",
        },
        "crust": {
          "enum": [
            "thin",
            "thick",
            "stuffed",
          ],
          "type": "string",
        },
        "sauce": {
          "enum": [
            "tomato",
            "alfredo",
            "pesto",
          ],
          "type": "string",
        },
        "cheese": {
          "enum": [
            "mozzarella",
            "cheddar",
            "parmesan",
            "vegan",
          ],
          "type": "string",
        },
        "toppings": {
          "items": {
            "enum": [
              "pepperoni",
              "mushrooms",
              "onions",
              "sausage",
              "bacon",
              "extra cheese",
              "black olives",
              "green peppers",
              "pineapple",
              "spinach",
            ],
            "type": "string",
          },
          "type": "array",
          "uniqueItems": true,
        },
        "extraInstructions": {
          "type": "string",
        },
      },
      "required": [
        "size",
        "crust",
        "sauce",
        "cheese",
      ],
      "title": "Pizza",
      "type": "object",
    },
    filter: {},
    partition: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateInstructionParams](../../models/components/createinstructionparams.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Instruction](../../models/components/instruction.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorMessage        | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## updateInstruction

Update Instruction

### Example Usage

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.entities.updateInstruction({
    instructionId: "<INSTRUCTION_ID>",
    updateInstructionParams: {
      active: true,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { entitiesUpdateInstruction } from "ragie/funcs/entitiesUpdateInstruction.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await entitiesUpdateInstruction(ragie, {
    instructionId: "<INSTRUCTION_ID>",
    updateInstructionParams: {
      active: true,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateInstructionRequest](../../models/operations/updateinstructionrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Instruction](../../models/components/instruction.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorMessage        | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listByInstruction

Get Instruction Extracted Entities

### Example Usage

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.entities.listByInstruction({
    instructionId: "<INSTRUCTION_ID>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { entitiesListByInstruction } from "ragie/funcs/entitiesListByInstruction.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await entitiesListByInstruction(ragie, {
    instructionId: "<INSTRUCTION_ID>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListEntitiesByInstructionRequest](../../models/operations/listentitiesbyinstructionrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListEntitiesByInstructionResponse](../../models/operations/listentitiesbyinstructionresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorMessage        | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listByDocument

Get Document Extracted Entities

### Example Usage

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.entities.listByDocument({
    documentId: "<DOCUMENT_ID>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { RagieCore } from "ragie/core.js";
import { entitiesListByDocument } from "ragie/funcs/entitiesListByDocument.js";

// Use `RagieCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ragie = new RagieCore({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await entitiesListByDocument(ragie, {
    documentId: "<DOCUMENT_ID>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListEntitiesByDocumentRequest](../../models/operations/listentitiesbydocumentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListEntitiesByDocumentResponse](../../models/operations/listentitiesbydocumentresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorMessage        | 401                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |