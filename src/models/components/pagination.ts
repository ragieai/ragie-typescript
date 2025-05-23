/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Pagination = {
  nextCursor?: string | null | undefined;
  totalCount: number;
};

/** @internal */
export const Pagination$inboundSchema: z.ZodType<
  Pagination,
  z.ZodTypeDef,
  unknown
> = z.object({
  next_cursor: z.nullable(z.string()).optional(),
  total_count: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "next_cursor": "nextCursor",
    "total_count": "totalCount",
  });
});

/** @internal */
export type Pagination$Outbound = {
  next_cursor?: string | null | undefined;
  total_count: number;
};

/** @internal */
export const Pagination$outboundSchema: z.ZodType<
  Pagination$Outbound,
  z.ZodTypeDef,
  Pagination
> = z.object({
  nextCursor: z.nullable(z.string()).optional(),
  totalCount: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    nextCursor: "next_cursor",
    totalCount: "total_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Pagination$ {
  /** @deprecated use `Pagination$inboundSchema` instead. */
  export const inboundSchema = Pagination$inboundSchema;
  /** @deprecated use `Pagination$outboundSchema` instead. */
  export const outboundSchema = Pagination$outboundSchema;
  /** @deprecated use `Pagination$Outbound` instead. */
  export type Outbound = Pagination$Outbound;
}

export function paginationToJSON(pagination: Pagination): string {
  return JSON.stringify(Pagination$outboundSchema.parse(pagination));
}

export function paginationFromJSON(
  jsonString: string,
): SafeParseResult<Pagination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Pagination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Pagination' from JSON`,
  );
}
