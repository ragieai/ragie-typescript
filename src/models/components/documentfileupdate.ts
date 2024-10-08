/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DocumentFileUpdate = {
  status: string;
};

/** @internal */
export const DocumentFileUpdate$inboundSchema: z.ZodType<
  DocumentFileUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.string(),
});

/** @internal */
export type DocumentFileUpdate$Outbound = {
  status: string;
};

/** @internal */
export const DocumentFileUpdate$outboundSchema: z.ZodType<
  DocumentFileUpdate$Outbound,
  z.ZodTypeDef,
  DocumentFileUpdate
> = z.object({
  status: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentFileUpdate$ {
  /** @deprecated use `DocumentFileUpdate$inboundSchema` instead. */
  export const inboundSchema = DocumentFileUpdate$inboundSchema;
  /** @deprecated use `DocumentFileUpdate$outboundSchema` instead. */
  export const outboundSchema = DocumentFileUpdate$outboundSchema;
  /** @deprecated use `DocumentFileUpdate$Outbound` instead. */
  export type Outbound = DocumentFileUpdate$Outbound;
}
