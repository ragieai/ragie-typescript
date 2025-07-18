# SharepointData

## Example Usage

```typescript
import { SharepointData } from "ragie/models/components";

let value: SharepointData = {
  site: {
    id: "<id>",
    name: "<value>",
  },
  files: [
    {
      id: "<id>",
      name: "<value>",
      type: "folder",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `site`                                                                           | [components.SharepointSiteData](../../models/components/sharepointsitedata.md)   | :heavy_check_mark:                                                               | N/A                                                                              |
| `files`                                                                          | [components.SharepointFileData](../../models/components/sharepointfiledata.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |