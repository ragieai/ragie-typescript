# BoundingBoxLocation

Location within a paginated document using normalized coordinates.

## Example Usage

```typescript
import { BoundingBoxLocation } from "ragie/models/components";

let value: BoundingBoxLocation = {
  locationType: "bounding_box",
  left: 7515.02,
  top: 2482.17,
  width: 652.86,
  height: 1844.96,
  pageNumber: 786274,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `locationType`                     | *"bounding_box"*                   | :heavy_check_mark:                 | N/A                                |
| `left`                             | *number*                           | :heavy_check_mark:                 | Left coordinate (0.0 to 1.0)       |
| `top`                              | *number*                           | :heavy_check_mark:                 | Top coordinate (0.0 to 1.0)        |
| `width`                            | *number*                           | :heavy_check_mark:                 | Width of the element (0.0 to 1.0)  |
| `height`                           | *number*                           | :heavy_check_mark:                 | Height of the element (0.0 to 1.0) |
| `pageNumber`                       | *number*                           | :heavy_check_mark:                 | Page number                        |