/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The metadata search filter on documents. Returns chunks only from documents which match the filter. The following filter operators are supported: $eq - Equal to (number, string, boolean),$ne - Not equal to (number, string, boolean),$gt - Greater than (number),$gte - Greater than or equal to (number),$lt - Less than (number),$lte - Less than or equal to (number),$in - In array (string or number),$nin - Not in array (string or number),$exists - Has the specified metadata field (boolean). The operators can be combined with AND and OR. Read [Metadata & Filters guide](https://docs.ragie.ai/docs/metadata-filters) for more details and examples.
 */
export type Filter = {};

export type RetrieveRequest = {
    query: string;
    /**
     * The maximum number of chunks to return. Defaults to 8.
     */
    topK?: number | undefined;
    /**
     * The metadata search filter on documents. Returns chunks only from documents which match the filter. The following filter operators are supported: $eq - Equal to (number, string, boolean),$ne - Not equal to (number, string, boolean),$gt - Greater than (number),$gte - Greater than or equal to (number),$lt - Less than (number),$lte - Less than or equal to (number),$in - In array (string or number),$nin - Not in array (string or number),$exists - Has the specified metadata field (boolean). The operators can be combined with AND and OR. Read [Metadata & Filters guide](https://docs.ragie.ai/docs/metadata-filters) for more details and examples.
     */
    filter?: Filter | undefined;
    /**
     * Reranks the chunks for semantic relevancy post cosine similarity. Will be slower but returns a subset of highly relevant chunks. Best for reducing hallucinations and improving accuracy for LLM generation.
     */
    rerank?: boolean | undefined;
    /**
     * Maximum number of chunks to retrieve per document. Use this to increase the number of documents the final chunks are retreived from. This feature is in beta and may change in the future.
     */
    maxChunksPerDocument?: number | undefined;
};

/** @internal */
export const Filter$inboundSchema: z.ZodType<Filter, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Filter$Outbound = {};

/** @internal */
export const Filter$outboundSchema: z.ZodType<Filter$Outbound, z.ZodTypeDef, Filter> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Filter$ {
    /** @deprecated use `Filter$inboundSchema` instead. */
    export const inboundSchema = Filter$inboundSchema;
    /** @deprecated use `Filter$outboundSchema` instead. */
    export const outboundSchema = Filter$outboundSchema;
    /** @deprecated use `Filter$Outbound` instead. */
    export type Outbound = Filter$Outbound;
}

/** @internal */
export const RetrieveRequest$inboundSchema: z.ZodType<RetrieveRequest, z.ZodTypeDef, unknown> = z
    .object({
        query: z.string(),
        top_k: z.number().int().default(8),
        filter: z.lazy(() => Filter$inboundSchema).optional(),
        rerank: z.boolean().default(false),
        max_chunks_per_document: z.number().int().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            top_k: "topK",
            max_chunks_per_document: "maxChunksPerDocument",
        });
    });

/** @internal */
export type RetrieveRequest$Outbound = {
    query: string;
    top_k: number;
    filter?: Filter$Outbound | undefined;
    rerank: boolean;
    max_chunks_per_document?: number | undefined;
};

/** @internal */
export const RetrieveRequest$outboundSchema: z.ZodType<
    RetrieveRequest$Outbound,
    z.ZodTypeDef,
    RetrieveRequest
> = z
    .object({
        query: z.string(),
        topK: z.number().int().default(8),
        filter: z.lazy(() => Filter$outboundSchema).optional(),
        rerank: z.boolean().default(false),
        maxChunksPerDocument: z.number().int().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            topK: "top_k",
            maxChunksPerDocument: "max_chunks_per_document",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveRequest$ {
    /** @deprecated use `RetrieveRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveRequest$inboundSchema;
    /** @deprecated use `RetrieveRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveRequest$outboundSchema;
    /** @deprecated use `RetrieveRequest$Outbound` instead. */
    export type Outbound = RetrieveRequest$Outbound;
}
