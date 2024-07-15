/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateDocumentRawRequest = {
    documentId: string;
    documentRawUpdateRequest: components.DocumentRawUpdateRequest;
};

/** @internal */
export const UpdateDocumentRawRequest$inboundSchema: z.ZodType<
    UpdateDocumentRawRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        document_id: z.string(),
        DocumentRawUpdateRequest: components.DocumentRawUpdateRequest$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            document_id: "documentId",
            DocumentRawUpdateRequest: "documentRawUpdateRequest",
        });
    });

/** @internal */
export type UpdateDocumentRawRequest$Outbound = {
    document_id: string;
    DocumentRawUpdateRequest: components.DocumentRawUpdateRequest$Outbound;
};

/** @internal */
export const UpdateDocumentRawRequest$outboundSchema: z.ZodType<
    UpdateDocumentRawRequest$Outbound,
    z.ZodTypeDef,
    UpdateDocumentRawRequest
> = z
    .object({
        documentId: z.string(),
        documentRawUpdateRequest: components.DocumentRawUpdateRequest$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            documentId: "document_id",
            documentRawUpdateRequest: "DocumentRawUpdateRequest",
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
