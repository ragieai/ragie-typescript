/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DeleteConnectionPayload = {
  keepFiles: boolean;
};

/** @internal */
export const DeleteConnectionPayload$inboundSchema: z.ZodType<
  DeleteConnectionPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  keep_files: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "keep_files": "keepFiles",
  });
});

/** @internal */
export type DeleteConnectionPayload$Outbound = {
  keep_files: boolean;
};

/** @internal */
export const DeleteConnectionPayload$outboundSchema: z.ZodType<
  DeleteConnectionPayload$Outbound,
  z.ZodTypeDef,
  DeleteConnectionPayload
> = z.object({
  keepFiles: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    keepFiles: "keep_files",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteConnectionPayload$ {
  /** @deprecated use `DeleteConnectionPayload$inboundSchema` instead. */
  export const inboundSchema = DeleteConnectionPayload$inboundSchema;
  /** @deprecated use `DeleteConnectionPayload$outboundSchema` instead. */
  export const outboundSchema = DeleteConnectionPayload$outboundSchema;
  /** @deprecated use `DeleteConnectionPayload$Outbound` instead. */
  export type Outbound = DeleteConnectionPayload$Outbound;
}