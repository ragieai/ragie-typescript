/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    ScoredChunkResponse,
    ScoredChunkResponse$inboundSchema,
    ScoredChunkResponse$Outbound,
    ScoredChunkResponse$outboundSchema,
} from "./scoredchunkresponse.js";
import * as z from "zod";

export type RetrieveResponse = {
    scoredChunks: Array<ScoredChunkResponse>;
};

/** @internal */
export const RetrieveResponse$inboundSchema: z.ZodType<RetrieveResponse, z.ZodTypeDef, unknown> = z
    .object({
        scored_chunks: z.array(ScoredChunkResponse$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            scored_chunks: "scoredChunks",
        });
    });

/** @internal */
export type RetrieveResponse$Outbound = {
    scored_chunks: Array<ScoredChunkResponse$Outbound>;
};

/** @internal */
export const RetrieveResponse$outboundSchema: z.ZodType<
    RetrieveResponse$Outbound,
    z.ZodTypeDef,
    RetrieveResponse
> = z
    .object({
        scoredChunks: z.array(ScoredChunkResponse$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            scoredChunks: "scored_chunks",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveResponse$ {
    /** @deprecated use `RetrieveResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveResponse$inboundSchema;
    /** @deprecated use `RetrieveResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveResponse$outboundSchema;
    /** @deprecated use `RetrieveResponse$Outbound` instead. */
    export type Outbound = RetrieveResponse$Outbound;
}