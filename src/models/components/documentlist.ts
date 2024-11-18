/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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

export type DocumentList = {
  pagination: Pagination;
  documents: Array<Document>;
};

/** @internal */
export const DocumentList$inboundSchema: z.ZodType<
  DocumentList,
  z.ZodTypeDef,
  unknown
> = z.object({
  pagination: Pagination$inboundSchema,
  documents: z.array(Document$inboundSchema),
});

/** @internal */
export type DocumentList$Outbound = {
  pagination: Pagination$Outbound;
  documents: Array<Document$Outbound>;
};

/** @internal */
export const DocumentList$outboundSchema: z.ZodType<
  DocumentList$Outbound,
  z.ZodTypeDef,
  DocumentList
> = z.object({
  pagination: Pagination$outboundSchema,
  documents: z.array(Document$outboundSchema),
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

export function documentListToJSON(documentList: DocumentList): string {
  return JSON.stringify(DocumentList$outboundSchema.parse(documentList));
}

export function documentListFromJSON(
  jsonString: string,
): SafeParseResult<DocumentList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentList' from JSON`,
  );
}
