/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateDocumentRawRequest = {
    documentId: string;
    documentRawUpdate: components.DocumentRawUpdate;
};

/** @internal */
export const UpdateDocumentRawRequest$inboundSchema: z.ZodType<
    UpdateDocumentRawRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        document_id: z.string(),
        DocumentRawUpdate: components.DocumentRawUpdate$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            document_id: "documentId",
            DocumentRawUpdate: "documentRawUpdate",
        });
    });

/** @internal */
export type UpdateDocumentRawRequest$Outbound = {
    document_id: string;
    DocumentRawUpdate: components.DocumentRawUpdate$Outbound;
};

/** @internal */
export const UpdateDocumentRawRequest$outboundSchema: z.ZodType<
    UpdateDocumentRawRequest$Outbound,
    z.ZodTypeDef,
    UpdateDocumentRawRequest
> = z
    .object({
        documentId: z.string(),
        documentRawUpdate: components.DocumentRawUpdate$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            documentId: "document_id",
            documentRawUpdate: "DocumentRawUpdate",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDocumentRawRequest$ {
    /** @deprecated use `UpdateDocumentRawRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateDocumentRawRequest$inboundSchema;
    /** @deprecated use `UpdateDocumentRawRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateDocumentRawRequest$outboundSchema;
    /** @deprecated use `UpdateDocumentRawRequest$Outbound` instead. */
    export type Outbound = UpdateDocumentRawRequest$Outbound;
}
