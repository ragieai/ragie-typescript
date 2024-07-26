/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetDocumentRequest = {
    documentId: string;
};

/** @internal */
export const GetDocumentRequest$inboundSchema: z.ZodType<
    GetDocumentRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        document_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            document_id: "documentId",
        });
    });

/** @internal */
export type GetDocumentRequest$Outbound = {
    document_id: string;
};

/** @internal */
export const GetDocumentRequest$outboundSchema: z.ZodType<
    GetDocumentRequest$Outbound,
    z.ZodTypeDef,
    GetDocumentRequest
> = z
    .object({
        documentId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            documentId: "document_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDocumentRequest$ {
    /** @deprecated use `GetDocumentRequest$inboundSchema` instead. */
    export const inboundSchema = GetDocumentRequest$inboundSchema;
    /** @deprecated use `GetDocumentRequest$outboundSchema` instead. */
    export const outboundSchema = GetDocumentRequest$outboundSchema;
    /** @deprecated use `GetDocumentRequest$Outbound` instead. */
    export type Outbound = GetDocumentRequest$Outbound;
}
