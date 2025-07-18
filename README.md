# ragie

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [ragie](#ragie)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [File uploads](#file-uploads)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Retries](#retries)
  * [Retries](#retries-1)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Debugging](#debugging)
* [Development](#development)
  * [Versioning](#versioning)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add ragie
```

### PNPM

```bash
pnpm add ragie
```

### Bun

```bash
bun add ragie
```

### Yarn

```bash
yarn add ragie zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Ragie": {
      "command": "npx",
      "args": [
        "-y", "--package", "ragie",
        "--",
        "mcp", "start",
        "--api-auth", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Ragie": {
      "command": "npx",
      "args": [
        "-y", "--package", "ragie",
        "--",
        "mcp", "start",
        "--api-auth", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package ragie -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example 1

```typescript
import { openAsBlob } from "node:fs";
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.documents.create({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```

### Example 2

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.connections.createConnection({
    partitionStrategy: {},
    pageLimit: null,
    config: null,
    connection: {
      provider: "gcs",
      data: {
        bucket: "<value>",
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

### Example 3

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.authenticators.create({
    provider: "atlassian",
    name: "<value>",
    clientId: "<id>",
    clientSecret: "<value>",
  });

  console.log(result);
}

run();

```

### Example 4

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.authenticators.createAuthenticatorConnection({
    authenticatorId: "84b0792c-1330-4854-b4f2-5d9c7bf9a385",
    createAuthenticatorConnection: {
      partitionStrategy: {},
      pageLimit: null,
      config: null,
      connection: {
        provider: "dropbox",
        data: {
          folderId: "<id>",
          folderName: "<value>",
        },
        email: "Aliyah_Feest59@yahoo.com",
        credentials: {
          refreshToken: "<value>",
        },
      },
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [authenticators](docs/sdks/authenticators/README.md)

* [create](docs/sdks/authenticators/README.md#create) - Create Authenticator
* [list](docs/sdks/authenticators/README.md#list) - List Authenticators
* [createAuthenticatorConnection](docs/sdks/authenticators/README.md#createauthenticatorconnection) - Create Authenticator Connection
* [deleteAuthenticatorConnection](docs/sdks/authenticators/README.md#deleteauthenticatorconnection) - Delete Authenticator

### [connections](docs/sdks/connections/README.md)

* [createConnection](docs/sdks/connections/README.md#createconnection) - Create Connection
* [list](docs/sdks/connections/README.md#list) - List Connections
* [createOAuthRedirectUrl](docs/sdks/connections/README.md#createoauthredirecturl) - Create Oauth Redirect Url
* [listConnectionSourceTypes](docs/sdks/connections/README.md#listconnectionsourcetypes) - List Connection Source Types
* [setEnabled](docs/sdks/connections/README.md#setenabled) - Set Connection Enabled
* [update](docs/sdks/connections/README.md#update) - Update Connection
* [get](docs/sdks/connections/README.md#get) - Get Connection
* [getStats](docs/sdks/connections/README.md#getstats) - Get Connection Stats
* [setLimits](docs/sdks/connections/README.md#setlimits) - Set Connection Limits
* [delete](docs/sdks/connections/README.md#delete) - Delete Connection
* [sync](docs/sdks/connections/README.md#sync) - Sync Connection

### [documents](docs/sdks/documents/README.md)

* [create](docs/sdks/documents/README.md#create) - Create Document
* [list](docs/sdks/documents/README.md#list) - List Documents
* [createRaw](docs/sdks/documents/README.md#createraw) - Create Document Raw
* [createDocumentFromUrl](docs/sdks/documents/README.md#createdocumentfromurl) - Create Document From Url
* [get](docs/sdks/documents/README.md#get) - Get Document
* [delete](docs/sdks/documents/README.md#delete) - Delete Document
* [updateFile](docs/sdks/documents/README.md#updatefile) - Update Document File
* [updateRaw](docs/sdks/documents/README.md#updateraw) - Update Document Raw
* [updateDocumentFromUrl](docs/sdks/documents/README.md#updatedocumentfromurl) - Update Document Url
* [patchMetadata](docs/sdks/documents/README.md#patchmetadata) - Patch Document Metadata
* [getChunks](docs/sdks/documents/README.md#getchunks) - Get Document Chunks
* [getChunk](docs/sdks/documents/README.md#getchunk) - Get Document Chunk
* [getChunkContent](docs/sdks/documents/README.md#getchunkcontent) - Get Document Chunk Content
* [getContent](docs/sdks/documents/README.md#getcontent) - Get Document Content
* [getSource](docs/sdks/documents/README.md#getsource) - Get Document Source
* [getSummary](docs/sdks/documents/README.md#getsummary) - Get Document Summary

### [entities](docs/sdks/entities/README.md)

* [listInstructions](docs/sdks/entities/README.md#listinstructions) - List Instructions
* [createInstruction](docs/sdks/entities/README.md#createinstruction) - Create Instruction
* [updateInstruction](docs/sdks/entities/README.md#updateinstruction) - Update Instruction
* [delete](docs/sdks/entities/README.md#delete) - Delete Instruction
* [listByInstruction](docs/sdks/entities/README.md#listbyinstruction) - Get Instruction Extracted Entities
* [listByDocument](docs/sdks/entities/README.md#listbydocument) - Get Document Extracted Entities

### [partitions](docs/sdks/partitions/README.md)

* [list](docs/sdks/partitions/README.md#list) - List Partitions
* [create](docs/sdks/partitions/README.md#create) - Create Partition
* [get](docs/sdks/partitions/README.md#get) - Get Partition
* [delete](docs/sdks/partitions/README.md#delete) - Delete Partition
* [setLimits](docs/sdks/partitions/README.md#setlimits) - Set Partition Limits


### [retrievals](docs/sdks/retrievals/README.md)

* [retrieve](docs/sdks/retrievals/README.md#retrieve) - Retrieve

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { openAsBlob } from "node:fs";
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.documents.create({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`RagieError`](./src/models/errors/ragieerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { openAsBlob } from "node:fs";
import { Ragie } from "ragie";
import * as errors from "ragie/models/errors";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  try {
    const result = await ragie.documents.create({
      file: await openAsBlob("example.file"),
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.RagieError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.HTTPValidationError) {
        console.log(error.data$.detail); // ValidationError[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`RagieError`](./src/models/errors/ragieerror.ts): The base class for HTTP error responses.
  * [`ErrorMessage`](./src/models/errors/errormessage.ts): Unauthorized.
  * [`HTTPValidationError`](./src/models/errors/httpvalidationerror.ts): Validation Error. Status code `422`. *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`RagieError`](./src/models/errors/ragieerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { openAsBlob } from "node:fs";
import { Ragie } from "ragie";

const ragie = new Ragie({
  serverURL: "https://api.ragie.ai",
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.documents.create({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Ragie } from "ragie";
import { HTTPClient } from "ragie/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Ragie({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name   | Type | Scheme      |
| ------ | ---- | ----------- |
| `auth` | http | HTTP Bearer |

To authenticate with the API the `auth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { openAsBlob } from "node:fs";
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.documents.create({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { openAsBlob } from "node:fs";
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.documents.create({
    file: await openAsBlob("example.file"),
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { openAsBlob } from "node:fs";
import { Ragie } from "ragie";

const ragie = new Ragie({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.documents.create({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { openAsBlob } from "node:fs";
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.documents.create({
    file: await openAsBlob("example.file"),
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { openAsBlob } from "node:fs";
import { Ragie } from "ragie";

const ragie = new Ragie({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.documents.create({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authenticatorsCreate`](docs/sdks/authenticators/README.md#create) - Create Authenticator
- [`authenticatorsCreateAuthenticatorConnection`](docs/sdks/authenticators/README.md#createauthenticatorconnection) - Create Authenticator Connection
- [`authenticatorsDeleteAuthenticatorConnection`](docs/sdks/authenticators/README.md#deleteauthenticatorconnection) - Delete Authenticator
- [`authenticatorsList`](docs/sdks/authenticators/README.md#list) - List Authenticators
- [`connectionsCreateConnection`](docs/sdks/connections/README.md#createconnection) - Create Connection
- [`connectionsCreateOAuthRedirectUrl`](docs/sdks/connections/README.md#createoauthredirecturl) - Create Oauth Redirect Url
- [`connectionsDelete`](docs/sdks/connections/README.md#delete) - Delete Connection
- [`connectionsGet`](docs/sdks/connections/README.md#get) - Get Connection
- [`connectionsGetStats`](docs/sdks/connections/README.md#getstats) - Get Connection Stats
- [`connectionsList`](docs/sdks/connections/README.md#list) - List Connections
- [`connectionsListConnectionSourceTypes`](docs/sdks/connections/README.md#listconnectionsourcetypes) - List Connection Source Types
- [`connectionsSetEnabled`](docs/sdks/connections/README.md#setenabled) - Set Connection Enabled
- [`connectionsSetLimits`](docs/sdks/connections/README.md#setlimits) - Set Connection Limits
- [`connectionsSync`](docs/sdks/connections/README.md#sync) - Sync Connection
- [`connectionsUpdate`](docs/sdks/connections/README.md#update) - Update Connection
- [`documentsCreate`](docs/sdks/documents/README.md#create) - Create Document
- [`documentsCreateDocumentFromUrl`](docs/sdks/documents/README.md#createdocumentfromurl) - Create Document From Url
- [`documentsCreateRaw`](docs/sdks/documents/README.md#createraw) - Create Document Raw
- [`documentsDelete`](docs/sdks/documents/README.md#delete) - Delete Document
- [`documentsGet`](docs/sdks/documents/README.md#get) - Get Document
- [`documentsGetChunk`](docs/sdks/documents/README.md#getchunk) - Get Document Chunk
- [`documentsGetChunkContent`](docs/sdks/documents/README.md#getchunkcontent) - Get Document Chunk Content
- [`documentsGetChunks`](docs/sdks/documents/README.md#getchunks) - Get Document Chunks
- [`documentsGetContent`](docs/sdks/documents/README.md#getcontent) - Get Document Content
- [`documentsGetSource`](docs/sdks/documents/README.md#getsource) - Get Document Source
- [`documentsGetSummary`](docs/sdks/documents/README.md#getsummary) - Get Document Summary
- [`documentsList`](docs/sdks/documents/README.md#list) - List Documents
- [`documentsPatchMetadata`](docs/sdks/documents/README.md#patchmetadata) - Patch Document Metadata
- [`documentsUpdateDocumentFromUrl`](docs/sdks/documents/README.md#updatedocumentfromurl) - Update Document Url
- [`documentsUpdateFile`](docs/sdks/documents/README.md#updatefile) - Update Document File
- [`documentsUpdateRaw`](docs/sdks/documents/README.md#updateraw) - Update Document Raw
- [`entitiesCreateInstruction`](docs/sdks/entities/README.md#createinstruction) - Create Instruction
- [`entitiesDelete`](docs/sdks/entities/README.md#delete) - Delete Instruction
- [`entitiesListByDocument`](docs/sdks/entities/README.md#listbydocument) - Get Document Extracted Entities
- [`entitiesListByInstruction`](docs/sdks/entities/README.md#listbyinstruction) - Get Instruction Extracted Entities
- [`entitiesListInstructions`](docs/sdks/entities/README.md#listinstructions) - List Instructions
- [`entitiesUpdateInstruction`](docs/sdks/entities/README.md#updateinstruction) - Update Instruction
- [`partitionsCreate`](docs/sdks/partitions/README.md#create) - Create Partition
- [`partitionsDelete`](docs/sdks/partitions/README.md#delete) - Delete Partition
- [`partitionsGet`](docs/sdks/partitions/README.md#get) - Get Partition
- [`partitionsList`](docs/sdks/partitions/README.md#list) - List Partitions
- [`partitionsSetLimits`](docs/sdks/partitions/README.md#setlimits) - Set Partition Limits
- [`retrievalsRetrieve`](docs/sdks/retrievals/README.md#retrieve) - Retrieve

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
  auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await ragie.documents.list({
    filter: "{\"department\":{\"$in\":[\"sales\",\"marketing\"]}}",
    partition: "acme_customer_id",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Ragie } from "ragie";

const sdk = new Ragie({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Versioning

This SDK follows [semantic versioning](https://semver.org/).

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
 