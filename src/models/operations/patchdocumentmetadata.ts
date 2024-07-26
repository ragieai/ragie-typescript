/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type PatchDocumentMetadataRequest = {
    documentId: string;
    patchDocumentMetadataParams: components.PatchDocumentMetadataParams;
};

/** @internal */
export const PatchDocumentMetadataRequest$inboundSchema: z.ZodType<
    PatchDocumentMetadataRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        document_id: z.string(),
        PatchDocumentMetadataParams: components.PatchDocumentMetadataParams$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            document_id: "documentId",
            PatchDocumentMetadataParams: "patchDocumentMetadataParams",
        });
    });

/** @internal */
export type PatchDocumentMetadataRequest$Outbound = {
    document_id: string;
    PatchDocumentMetadataParams: components.PatchDocumentMetadataParams$Outbound;
};

/** @internal */
export const PatchDocumentMetadataRequest$outboundSchema: z.ZodType<
    PatchDocumentMetadataRequest$Outbound,
    z.ZodTypeDef,
    PatchDocumentMetadataRequest
> = z
    .object({
        documentId: z.string(),
        patchDocumentMetadataParams: components.PatchDocumentMetadataParams$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            documentId: "document_id",
            patchDocumentMetadataParams: "PatchDocumentMetadataParams",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchDocumentMetadataRequest$ {
    /** @deprecated use `PatchDocumentMetadataRequest$inboundSchema` instead. */
    export const inboundSchema = PatchDocumentMetadataRequest$inboundSchema;
    /** @deprecated use `PatchDocumentMetadataRequest$outboundSchema` instead. */
    export const outboundSchema = PatchDocumentMetadataRequest$outboundSchema;
    /** @deprecated use `PatchDocumentMetadataRequest$Outbound` instead. */
    export type Outbound = PatchDocumentMetadataRequest$Outbound;
}
