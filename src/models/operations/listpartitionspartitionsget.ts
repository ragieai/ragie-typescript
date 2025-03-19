/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListPartitionsPartitionsGetRequest = {
  /**
   * An opaque cursor for pagination
   */
  cursor?: string | null | undefined;
  /**
   * The number of items per page (must be greater than 0 and less than or equal to 100)
   */
  pageSize?: number | undefined;
};

export type ListPartitionsPartitionsGetResponse = {
  result: components.PartitionList;
};

/** @internal */
export const ListPartitionsPartitionsGetRequest$inboundSchema: z.ZodType<
  ListPartitionsPartitionsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  cursor: z.nullable(z.string()).optional(),
  page_size: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "page_size": "pageSize",
  });
});

/** @internal */
export type ListPartitionsPartitionsGetRequest$Outbound = {
  cursor?: string | null | undefined;
  page_size: number;
};

/** @internal */
export const ListPartitionsPartitionsGetRequest$outboundSchema: z.ZodType<
  ListPartitionsPartitionsGetRequest$Outbound,
  z.ZodTypeDef,
  ListPartitionsPartitionsGetRequest
> = z.object({
  cursor: z.nullable(z.string()).optional(),
  pageSize: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    pageSize: "page_size",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPartitionsPartitionsGetRequest$ {
  /** @deprecated use `ListPartitionsPartitionsGetRequest$inboundSchema` instead. */
  export const inboundSchema = ListPartitionsPartitionsGetRequest$inboundSchema;
  /** @deprecated use `ListPartitionsPartitionsGetRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListPartitionsPartitionsGetRequest$outboundSchema;
  /** @deprecated use `ListPartitionsPartitionsGetRequest$Outbound` instead. */
  export type Outbound = ListPartitionsPartitionsGetRequest$Outbound;
}

export function listPartitionsPartitionsGetRequestToJSON(
  listPartitionsPartitionsGetRequest: ListPartitionsPartitionsGetRequest,
): string {
  return JSON.stringify(
    ListPartitionsPartitionsGetRequest$outboundSchema.parse(
      listPartitionsPartitionsGetRequest,
    ),
  );
}

export function listPartitionsPartitionsGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPartitionsPartitionsGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListPartitionsPartitionsGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPartitionsPartitionsGetRequest' from JSON`,
  );
}

/** @internal */
export const ListPartitionsPartitionsGetResponse$inboundSchema: z.ZodType<
  ListPartitionsPartitionsGetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.PartitionList$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListPartitionsPartitionsGetResponse$Outbound = {
  Result: components.PartitionList$Outbound;
};

/** @internal */
export const ListPartitionsPartitionsGetResponse$outboundSchema: z.ZodType<
  ListPartitionsPartitionsGetResponse$Outbound,
  z.ZodTypeDef,
  ListPartitionsPartitionsGetResponse
> = z.object({
  result: components.PartitionList$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPartitionsPartitionsGetResponse$ {
  /** @deprecated use `ListPartitionsPartitionsGetResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListPartitionsPartitionsGetResponse$inboundSchema;
  /** @deprecated use `ListPartitionsPartitionsGetResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListPartitionsPartitionsGetResponse$outboundSchema;
  /** @deprecated use `ListPartitionsPartitionsGetResponse$Outbound` instead. */
  export type Outbound = ListPartitionsPartitionsGetResponse$Outbound;
}

export function listPartitionsPartitionsGetResponseToJSON(
  listPartitionsPartitionsGetResponse: ListPartitionsPartitionsGetResponse,
): string {
  return JSON.stringify(
    ListPartitionsPartitionsGetResponse$outboundSchema.parse(
      listPartitionsPartitionsGetResponse,
    ),
  );
}

export function listPartitionsPartitionsGetResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListPartitionsPartitionsGetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListPartitionsPartitionsGetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPartitionsPartitionsGetResponse' from JSON`,
  );
}
