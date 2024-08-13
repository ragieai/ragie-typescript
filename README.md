# ragie

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<!-- Start SDK Installation [installation] -->
## SDK Installation

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
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
    auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await ragie.documents.list({
        filter: '{"department":{"$in":["sales","marketing"]}}',
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [documents](docs/sdks/documents/README.md)

* [list](docs/sdks/documents/README.md#list) - List Documents
* [create](docs/sdks/documents/README.md#create) - Create Document
* [createRaw](docs/sdks/documents/README.md#createraw) - Create Document Raw
* [createDocumentFromUrl](docs/sdks/documents/README.md#createdocumentfromurl) - Create Document From Url
* [get](docs/sdks/documents/README.md#get) - Get Document
* [delete](docs/sdks/documents/README.md#delete) - Delete Document
* [updateFile](docs/sdks/documents/README.md#updatefile) - Update Document File
* [updateRaw](docs/sdks/documents/README.md#updateraw) - Update Document Raw
* [patchMetadata](docs/sdks/documents/README.md#patchmetadata) - Patch Document Metadata
* [getSummary](docs/sdks/documents/README.md#getsummary) - Get Document Summary

### [retrievals](docs/sdks/retrievals/README.md)

* [retrieve](docs/sdks/retrievals/README.md#retrieve) - Retrieve

### [entities](docs/sdks/entities/README.md)

* [listInstructions](docs/sdks/entities/README.md#listinstructions) - List Instructions
* [createInstruction](docs/sdks/entities/README.md#createinstruction) - Create Instruction
* [updateInstruction](docs/sdks/entities/README.md#updateinstruction) - Update Instruction
* [listByInstruction](docs/sdks/entities/README.md#listbyinstruction) - Get Instruction Extracted Entities
* [listByDocument](docs/sdks/entities/README.md#listbydocument) - Get Document Extracted Entities
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
        file: await openAsBlob("./sample-file"),
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorMessage        | 401,404                    | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Ragie } from "ragie";
import { SDKValidationError } from "ragie/models/errors";

const ragie = new Ragie({
    auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    let result;
    try {
        result = await ragie.documents.list({
            filter: '{"department":{"$in":["sales","marketing"]}}',
        });
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ErrorMessage: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.HTTPValidationError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.ragie.ai` | None |

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
    serverIdx: 0,
    auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await ragie.documents.list({
        filter: '{"department":{"$in":["sales","marketing"]}}',
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
    serverURL: "https://api.ragie.ai",
    auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await ragie.documents.list({
        filter: '{"department":{"$in":["sales","marketing"]}}',
    });

    for await (const page of result) {
        // handle page
    }
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

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `auth`      | http        | HTTP Bearer |

To authenticate with the API the `auth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
    auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await ragie.documents.list({
        filter: '{"department":{"$in":["sales","marketing"]}}',
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
    auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await ragie.documents.list(
        {
            filter: '{"department":{"$in":["sales","marketing"]}}',
        },
        {
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
        }
    );

    for await (const page of result) {
        // handle page
    }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
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
    const result = await ragie.documents.list({
        filter: '{"department":{"$in":["sales","marketing"]}}',
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
    auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await ragie.documents.list(
        {
            filter: '{"department":{"$in":["sales","marketing"]}}',
        },
        {
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
        }
    );

    for await (const page of result) {
        // handle page
    }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
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
    const result = await ragie.documents.list({
        filter: '{"department":{"$in":["sales","marketing"]}}',
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Retries [retries] -->

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
        filter: '{"department":{"$in":["sales","marketing"]}}',
    });

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End Pagination [pagination] -->

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

- [documentsCreateDocumentFromUrl](docs/sdks/documents/README.md#createdocumentfromurl)
- [documentsCreateRaw](docs/sdks/documents/README.md#createraw)
- [documentsCreate](docs/sdks/documents/README.md#create)
- [documentsDelete](docs/sdks/documents/README.md#delete)
- [documentsGetSummary](docs/sdks/documents/README.md#getsummary)
- [documentsGet](docs/sdks/documents/README.md#get)
- [documentsList](docs/sdks/documents/README.md#list)
- [documentsPatchMetadata](docs/sdks/documents/README.md#patchmetadata)
- [documentsUpdateFile](docs/sdks/documents/README.md#updatefile)
- [documentsUpdateRaw](docs/sdks/documents/README.md#updateraw)
- [entitiesCreateInstruction](docs/sdks/entities/README.md#createinstruction)
- [entitiesListByDocument](docs/sdks/entities/README.md#listbydocument)
- [entitiesListByInstruction](docs/sdks/entities/README.md#listbyinstruction)
- [entitiesListInstructions](docs/sdks/entities/README.md#listinstructions)
- [entitiesUpdateInstruction](docs/sdks/entities/README.md#updateinstruction)
- [retrievalsRetrieve](docs/sdks/retrievals/README.md#retrieve)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

To log HTTP requests and responses, you can pass a logger that matches `console`'s interface as an SDK option.

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
 