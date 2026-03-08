# Signature

## Example Usage

```typescript
import { Signature } from "ragie/models/components";

let value: Signature = {
  content: "<value>",
  description: "chow limp woot opposite mid boohoo nor untidy below depute",
  label: "<value>",
  isSigned: false,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *"Signature"*                                                                            | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `content`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Content of the signature.                                                                |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | A detailed description of the signature.                                                 |
| `label`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The printed text indicating who should sign (e.g., 'Driver Signature', 'Authorized By'). |
| `isSigned`                                                                               | *boolean*                                                                                | :heavy_check_mark:                                                                       | True if a handwritten signature, digital signature, or stamp is present. False if blank. |
| `signerName`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | The name of the signer                                                                   |
| `date`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The date of the signature if present                                                     |