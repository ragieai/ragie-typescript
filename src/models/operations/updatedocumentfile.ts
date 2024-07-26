/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateDocumentFileRequest = {
    /**
     * The id of the document.
     */
    documentId: string;
    updateDocumentFileParams: components.UpdateDocumentFileParams;
};

/** @internal */
export const UpdateDocumentFileRequest$inboundSchema: z.ZodType<
    UpdateDocumentFileRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        document_id: z.string(),
        UpdateDocumentFileParams: components.UpdateDocumentFileParams$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            document_id: "documentId",
            UpdateDocumentFileParams: "updateDocumentFileParams",
        });
    });

/** @internal */
export type UpdateDocumentFileRequest$Outbound = {
    document_id: string;
    UpdateDocumentFileParams: components.UpdateDocumentFileParams$Outbound;
};

/** @internal */
export const UpdateDocumentFileRequest$outboundSchema: z.ZodType<
    UpdateDocumentFileRequest$Outbound,
    z.ZodTypeDef,
    UpdateDocumentFileRequest
> = z
    .object({
        documentId: z.string(),
        updateDocumentFileParams: components.UpdateDocumentFileParams$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            documentId: "document_id",
            updateDocumentFileParams: "UpdateDocumentFileParams",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDocumentFileRequest$ {
    /** @deprecated use `UpdateDocumentFileRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateDocumentFileRequest$inboundSchema;
    /** @deprecated use `UpdateDocumentFileRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateDocumentFileRequest$outboundSchema;
    /** @deprecated use `UpdateDocumentFileRequest$Outbound` instead. */
    export type Outbound = UpdateDocumentFileRequest$Outbound;
}
