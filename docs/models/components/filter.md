# Filter

The metadata search filter on documents. Returns chunks only from documents which match the filter. The following filter operators are supported: $eq - Equal to (number, string, boolean),$ne - Not equal to (number, string, boolean),$gt - Greater than (number),$gte - Greater than or equal to (number),$lt - Less than (number),$lte - Less than or equal to (number),$in - In array (string or number),$nin - Not in array (string or number),$exists - Has the specified metadata field (boolean). The operators can be combined with AND and OR. Read [Metadata & Filters guide](https://docs.ragie.ai/docs/metadata-filters) for more details and examples.


## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |