# ListEntitiesByDocumentRequest


## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `documentId`                                                                        | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `cursor`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | An opaque cursor for pagination                                                     |
| `pageSize`                                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | The number of items per page (must be greater than 0 and less than or equal to 100) |