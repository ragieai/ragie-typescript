/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Document,
    Document$inboundSchema,
    Document$Outbound,
    Document$outboundSchema,
} from "./document.js";
import {
    Pagination,
    Pagination$inboundSchema,
    Pagination$Outbound,
    Pagination$outboundSchema,
} from "./pagination.js";
import * as z from "zod";

export type DocumentList = {
    pagination: Pagination;
    documents?: Array<Document> | null | undefined;
};

/** @internal */
export const DocumentList$inboundSchema: z.ZodType<DocumentList, z.ZodTypeDef, unknown> = z.object({
    pagination: Pagination$inboundSchema,
    documents: z.nullable(z.array(Document$inboundSchema)).optional(),
});

/** @internal */
export type DocumentList$Outbound = {
    pagination: Pagination$Outbound;
    documents?: Array<Document$Outbound> | null | undefined;
};

/** @internal */
export const DocumentList$outboundSchema: z.ZodType<
    DocumentList$Outbound,
    z.ZodTypeDef,
    DocumentList
> = z.object({
    pagination: Pagination$outboundSchema,
    documents: z.nullable(z.array(Document$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentList$ {
    /** @deprecated use `DocumentList$inboundSchema` instead. */
    export const inboundSchema = DocumentList$inboundSchema;
    /** @deprecated use `DocumentList$outboundSchema` instead. */
    export const outboundSchema = DocumentList$outboundSchema;
    /** @deprecated use `DocumentList$Outbound` instead. */
    export type Outbound = DocumentList$Outbound;
}
