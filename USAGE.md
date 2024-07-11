<!-- Start SDK Example Usage [usage] -->
```typescript
import { Ragie } from "ragie";

const ragie = new Ragie({
    auth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await ragie.documents.list({});

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->