/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DocumentMetadataUpdateMetadata = string | number | boolean | Array<string>;

export type DocumentMetadataUpdate = {
    /**
     * The full document metadata inclusive of the update.
     */
    metadata: { [k: string]: string | number | boolean | Array<string> };
};

/** @internal */
export const DocumentMetadataUpdateMetadata$inboundSchema: z.ZodType<
    DocumentMetadataUpdateMetadata,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/** @internal */
export type DocumentMetadataUpdateMetadata$Outbound = string | number | boolean | Array<string>;

/** @internal */
export const DocumentMetadataUpdateMetadata$outboundSchema: z.ZodType<
    DocumentMetadataUpdateMetadata$Outbound,
    z.ZodTypeDef,
    DocumentMetadataUpdateMetadata
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentMetadataUpdateMetadata$ {
    /** @deprecated use `DocumentMetadataUpdateMetadata$inboundSchema` instead. */
    export const inboundSchema = DocumentMetadataUpdateMetadata$inboundSchema;
    /** @deprecated use `DocumentMetadataUpdateMetadata$outboundSchema` instead. */
    export const outboundSchema = DocumentMetadataUpdateMetadata$outboundSchema;
    /** @deprecated use `DocumentMetadataUpdateMetadata$Outbound` instead. */
    export type Outbound = DocumentMetadataUpdateMetadata$Outbound;
}

/** @internal */
export const DocumentMetadataUpdate$inboundSchema: z.ZodType<
    DocumentMetadataUpdate,
    z.ZodTypeDef,
    unknown
> = z.object({
    metadata: z.record(z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())])),
});

/** @internal */
export type DocumentMetadataUpdate$Outbound = {
    metadata: { [k: string]: string | number | boolean | Array<string> };
};

/** @internal */
export const DocumentMetadataUpdate$outboundSchema: z.ZodType<
    DocumentMetadataUpdate$Outbound,
    z.ZodTypeDef,
    DocumentMetadataUpdate
> = z.object({
    metadata: z.record(z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())])),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentMetadataUpdate$ {
    /** @deprecated use `DocumentMetadataUpdate$inboundSchema` instead. */
    export const inboundSchema = DocumentMetadataUpdate$inboundSchema;
    /** @deprecated use `DocumentMetadataUpdate$outboundSchema` instead. */
    export const outboundSchema = DocumentMetadataUpdate$outboundSchema;
    /** @deprecated use `DocumentMetadataUpdate$Outbound` instead. */
    export type Outbound = DocumentMetadataUpdate$Outbound;
}
