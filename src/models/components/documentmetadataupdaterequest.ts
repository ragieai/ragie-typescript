/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DocumentMetadataUpdateRequestMetadata = string | number | boolean | Array<string>;

export type DocumentMetadataUpdateRequest = {
    /**
     * The metadata to update on the document. Performs a partial update of the document's metadata. Keys must be strings. Values may be strings, numbers, booleans, or lists of strings. Numbers may be integers or floating point and will be converted to 64 bit floating point. Keys set to `null` are deleted. 1000 total values are allowed, inclusive of existing metadata. Each item in an array counts towards the total. The following keys are reserved for internal use: `document_id`, `document_type`, `document_source`, `document_name`, `document_uploaded_at`, `__ragie__document_version_id`, `__ragie__chunk_size_chars`, `__ragie__chunk_overlap_chars`.
     */
    metadata: { [k: string]: string | number | boolean | Array<string> };
};

/** @internal */
export const DocumentMetadataUpdateRequestMetadata$inboundSchema: z.ZodType<
    DocumentMetadataUpdateRequestMetadata,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/** @internal */
export type DocumentMetadataUpdateRequestMetadata$Outbound =
    | string
    | number
    | boolean
    | Array<string>;

/** @internal */
export const DocumentMetadataUpdateRequestMetadata$outboundSchema: z.ZodType<
    DocumentMetadataUpdateRequestMetadata$Outbound,
    z.ZodTypeDef,
    DocumentMetadataUpdateRequestMetadata
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentMetadataUpdateRequestMetadata$ {
    /** @deprecated use `DocumentMetadataUpdateRequestMetadata$inboundSchema` instead. */
    export const inboundSchema = DocumentMetadataUpdateRequestMetadata$inboundSchema;
    /** @deprecated use `DocumentMetadataUpdateRequestMetadata$outboundSchema` instead. */
    export const outboundSchema = DocumentMetadataUpdateRequestMetadata$outboundSchema;
    /** @deprecated use `DocumentMetadataUpdateRequestMetadata$Outbound` instead. */
    export type Outbound = DocumentMetadataUpdateRequestMetadata$Outbound;
}

/** @internal */
export const DocumentMetadataUpdateRequest$inboundSchema: z.ZodType<
    DocumentMetadataUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    metadata: z.record(z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())])),
});

/** @internal */
export type DocumentMetadataUpdateRequest$Outbound = {
    metadata: { [k: string]: string | number | boolean | Array<string> };
};

/** @internal */
export const DocumentMetadataUpdateRequest$outboundSchema: z.ZodType<
    DocumentMetadataUpdateRequest$Outbound,
    z.ZodTypeDef,
    DocumentMetadataUpdateRequest
> = z.object({
    metadata: z.record(z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())])),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentMetadataUpdateRequest$ {
    /** @deprecated use `DocumentMetadataUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = DocumentMetadataUpdateRequest$inboundSchema;
    /** @deprecated use `DocumentMetadataUpdateRequest$outboundSchema` instead. */
    export const outboundSchema = DocumentMetadataUpdateRequest$outboundSchema;
    /** @deprecated use `DocumentMetadataUpdateRequest$Outbound` instead. */
    export type Outbound = DocumentMetadataUpdateRequest$Outbound;
}