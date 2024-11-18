/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ScoredChunk = {
  text: string;
  score: number;
  documentId: string;
  documentName: string;
  documentMetadata: { [k: string]: any };
};

/** @internal */
export const ScoredChunk$inboundSchema: z.ZodType<
  ScoredChunk,
  z.ZodTypeDef,
  unknown
> = z.object({
  text: z.string(),
  score: z.number(),
  document_id: z.string(),
  document_name: z.string(),
  document_metadata: z.record(z.any()),
}).transform((v) => {
  return remap$(v, {
    "document_id": "documentId",
    "document_name": "documentName",
    "document_metadata": "documentMetadata",
  });
});

/** @internal */
export type ScoredChunk$Outbound = {
  text: string;
  score: number;
  document_id: string;
  document_name: string;
  document_metadata: { [k: string]: any };
};

/** @internal */
export const ScoredChunk$outboundSchema: z.ZodType<
  ScoredChunk$Outbound,
  z.ZodTypeDef,
  ScoredChunk
> = z.object({
  text: z.string(),
  score: z.number(),
  documentId: z.string(),
  documentName: z.string(),
  documentMetadata: z.record(z.any()),
}).transform((v) => {
  return remap$(v, {
    documentId: "document_id",
    documentName: "document_name",
    documentMetadata: "document_metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScoredChunk$ {
  /** @deprecated use `ScoredChunk$inboundSchema` instead. */
  export const inboundSchema = ScoredChunk$inboundSchema;
  /** @deprecated use `ScoredChunk$outboundSchema` instead. */
  export const outboundSchema = ScoredChunk$outboundSchema;
  /** @deprecated use `ScoredChunk$Outbound` instead. */
  export type Outbound = ScoredChunk$Outbound;
}

export function scoredChunkToJSON(scoredChunk: ScoredChunk): string {
  return JSON.stringify(ScoredChunk$outboundSchema.parse(scoredChunk));
}

export function scoredChunkFromJSON(
  jsonString: string,
): SafeParseResult<ScoredChunk, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScoredChunk$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScoredChunk' from JSON`,
  );
}
