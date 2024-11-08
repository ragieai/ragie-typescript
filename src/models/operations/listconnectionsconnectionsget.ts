/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListConnectionsConnectionsGetRequest = {
  /**
   * An opaque cursor for pagination
   */
  cursor?: string | null | undefined;
  /**
   * The number of items per page (must be greater than 0 and less than or equal to 100)
   */
  pageSize?: number | undefined;
};

export type ListConnectionsConnectionsGetResponse = {
  result: components.ConnectionList;
};

/** @internal */
export const ListConnectionsConnectionsGetRequest$inboundSchema: z.ZodType<
  ListConnectionsConnectionsGetRequest,
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
export type ListConnectionsConnectionsGetRequest$Outbound = {
  cursor?: string | null | undefined;
  page_size: number;
};

/** @internal */
export const ListConnectionsConnectionsGetRequest$outboundSchema: z.ZodType<
  ListConnectionsConnectionsGetRequest$Outbound,
  z.ZodTypeDef,
  ListConnectionsConnectionsGetRequest
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
export namespace ListConnectionsConnectionsGetRequest$ {
  /** @deprecated use `ListConnectionsConnectionsGetRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListConnectionsConnectionsGetRequest$inboundSchema;
  /** @deprecated use `ListConnectionsConnectionsGetRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListConnectionsConnectionsGetRequest$outboundSchema;
  /** @deprecated use `ListConnectionsConnectionsGetRequest$Outbound` instead. */
  export type Outbound = ListConnectionsConnectionsGetRequest$Outbound;
}

/** @internal */
export const ListConnectionsConnectionsGetResponse$inboundSchema: z.ZodType<
  ListConnectionsConnectionsGetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ConnectionList$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListConnectionsConnectionsGetResponse$Outbound = {
  Result: components.ConnectionList$Outbound;
};

/** @internal */
export const ListConnectionsConnectionsGetResponse$outboundSchema: z.ZodType<
  ListConnectionsConnectionsGetResponse$Outbound,
  z.ZodTypeDef,
  ListConnectionsConnectionsGetResponse
> = z.object({
  result: components.ConnectionList$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConnectionsConnectionsGetResponse$ {
  /** @deprecated use `ListConnectionsConnectionsGetResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListConnectionsConnectionsGetResponse$inboundSchema;
  /** @deprecated use `ListConnectionsConnectionsGetResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListConnectionsConnectionsGetResponse$outboundSchema;
  /** @deprecated use `ListConnectionsConnectionsGetResponse$Outbound` instead. */
  export type Outbound = ListConnectionsConnectionsGetResponse$Outbound;
}