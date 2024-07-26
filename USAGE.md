<!-- Start SDK Example Usage [usage] -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
    auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await ragie.documents.list(
        "<value>",
        10,
        '{"department":{"$in":["sales","marketing"]}}'
    );

    for await (const page of result) {
        // handle page
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->