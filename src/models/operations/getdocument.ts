/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetDocumentRequest = {
  /**
   * The id of the document.
   */
  documentId: string;
  /**
   * An optional partition to scope the request to. If omitted, accounts created after 1/9/2025 will have the request scoped to the default partition, while older accounts will have the request scoped to all partitions. Older accounts may opt in to strict partition scoping by contacting support@ragie.ai. Older accounts using the partitions feature are strongly recommended to scope the request to a partition.
   */
  partition?: string | null | undefined;
};

/** @internal */
export const GetDocumentRequest$inboundSchema: z.ZodType<
  GetDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  document_id: z.string(),
  partition: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "document_id": "documentId",
  });
});

/** @internal */
export type GetDocumentRequest$Outbound = {
  document_id: string;
  partition?: string | null | undefined;
};

/** @internal */
export const GetDocumentRequest$outboundSchema: z.ZodType<
  GetDocumentRequest$Outbound,
  z.ZodTypeDef,
  GetDocumentRequest
> = z.object({
  documentId: z.string(),
  partition: z.nullable(z.string()).optional(),
}).transform((v) => {
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

export function getDocumentRequestToJSON(
  getDocumentRequest: GetDocumentRequest,
): string {
  return JSON.stringify(
    GetDocumentRequest$outboundSchema.parse(getDocumentRequest),
  );
}

export function getDocumentRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDocumentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDocumentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDocumentRequest' from JSON`,
  );
}
