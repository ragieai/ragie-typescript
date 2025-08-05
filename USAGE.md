<!-- Start SDK Example Usage [usage] -->
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