/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ScoredChunk,
  ScoredChunk$inboundSchema,
  ScoredChunk$Outbound,
  ScoredChunk$outboundSchema,
} from "./scoredchunk.js";

export type Retrieval = {
  scoredChunks: Array<ScoredChunk>;
};

/** @internal */
export const Retrieval$inboundSchema: z.ZodType<
  Retrieval,
  z.ZodTypeDef,
  unknown
> = z.object({
  scored_chunks: z.array(ScoredChunk$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "scored_chunks": "scoredChunks",
  });
});

/** @internal */
export type Retrieval$Outbound = {
  scored_chunks: Array<ScoredChunk$Outbound>;
};

/** @internal */
export const Retrieval$outboundSchema: z.ZodType<
  Retrieval$Outbound,
  z.ZodTypeDef,
  Retrieval
> = z.object({
  scoredChunks: z.array(ScoredChunk$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    scoredChunks: "scored_chunks",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Retrieval$ {
  /** @deprecated use `Retrieval$inboundSchema` instead. */
  export const inboundSchema = Retrieval$inboundSchema;
  /** @deprecated use `Retrieval$outboundSchema` instead. */
  export const outboundSchema = Retrieval$outboundSchema;
  /** @deprecated use `Retrieval$Outbound` instead. */
  export type Outbound = Retrieval$Outbound;
}

export function retrievalToJSON(retrieval: Retrieval): string {
  return JSON.stringify(Retrieval$outboundSchema.parse(retrieval));
}

export function retrievalFromJSON(
  jsonString: string,
): SafeParseResult<Retrieval, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Retrieval$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Retrieval' from JSON`,
  );
}
