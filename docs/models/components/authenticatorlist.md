# AuthenticatorList

## Example Usage

```typescript
import { AuthenticatorList } from "ragie/models/components";

let value: AuthenticatorList = {
  pagination: {
    totalCount: 18197,
  },
  authenticators: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `authenticators`                                                                     | [components.BaseGetAuthenticator](../../models/components/basegetauthenticator.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |