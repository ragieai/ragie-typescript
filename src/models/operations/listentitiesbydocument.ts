/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListEntitiesByDocumentRequest = {
  /**
   * The id of the document.
   */
  documentId: string;
  /**
   * An opaque cursor for pagination
   */
  cursor?: string | null | undefined;
  /**
   * The number of items per page (must be greater than 0 and less than or equal to 100)
   */
  pageSize?: number | undefined;
  /**
   * An optional partition to scope the request to. If omitted, accounts created after 1/9/2025 will have the request scoped to the default partition, while older accounts will have the request scoped to all partitions. Older accounts may opt in to strict partition scoping by contacting support@ragie.ai. Older accounts using the partitions feature are strongly recommended to scope the request to a partition.
   */
  partition?: string | null | undefined;
};

export type ListEntitiesByDocumentResponse = {
  result: components.EntityList;
};

/** @internal */
export const ListEntitiesByDocumentRequest$inboundSchema: z.ZodType<
  ListEntitiesByDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  document_id: z.string(),
  cursor: z.nullable(z.string()).optional(),
  page_size: z.number().int().default(10),
  partition: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "document_id": "documentId",
    "page_size": "pageSize",
  });
});

/** @internal */
export type ListEntitiesByDocumentRequest$Outbound = {
  document_id: string;
  cursor?: string | null | undefined;
  page_size: number;
  partition?: string | null | undefined;
};

/** @internal */
export const ListEntitiesByDocumentRequest$outboundSchema: z.ZodType<
  ListEntitiesByDocumentRequest$Outbound,
  z.ZodTypeDef,
  ListEntitiesByDocumentRequest
> = z.object({
  documentId: z.string(),
  cursor: z.nullable(z.string()).optional(),
  pageSize: z.number().int().default(10),
  partition: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    documentId: "document_id",
    pageSize: "page_size",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEntitiesByDocumentRequest$ {
  /** @deprecated use `ListEntitiesByDocumentRequest$inboundSchema` instead. */
  export const inboundSchema = ListEntitiesByDocumentRequest$inboundSchema;
  /** @deprecated use `ListEntitiesByDocumentRequest$outboundSchema` instead. */
  export const outboundSchema = ListEntitiesByDocumentRequest$outboundSchema;
  /** @deprecated use `ListEntitiesByDocumentRequest$Outbound` instead. */
  export type Outbound = ListEntitiesByDocumentRequest$Outbound;
}

export function listEntitiesByDocumentRequestToJSON(
  listEntitiesByDocumentRequest: ListEntitiesByDocumentRequest,
): string {
  return JSON.stringify(
    ListEntitiesByDocumentRequest$outboundSchema.parse(
      listEntitiesByDocumentRequest,
    ),
  );
}

export function listEntitiesByDocumentRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListEntitiesByDocumentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListEntitiesByDocumentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListEntitiesByDocumentRequest' from JSON`,
  );
}

/** @internal */
export const ListEntitiesByDocumentResponse$inboundSchema: z.ZodType<
  ListEntitiesByDocumentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.EntityList$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListEntitiesByDocumentResponse$Outbound = {
  Result: components.EntityList$Outbound;
};

/** @internal */
export const ListEntitiesByDocumentResponse$outboundSchema: z.ZodType<
  ListEntitiesByDocumentResponse$Outbound,
  z.ZodTypeDef,
  ListEntitiesByDocumentResponse
> = z.object({
  result: components.EntityList$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEntitiesByDocumentResponse$ {
  /** @deprecated use `ListEntitiesByDocumentResponse$inboundSchema` instead. */
  export const inboundSchema = ListEntitiesByDocumentResponse$inboundSchema;
  /** @deprecated use `ListEntitiesByDocumentResponse$outboundSchema` instead. */
  export const outboundSchema = ListEntitiesByDocumentResponse$outboundSchema;
  /** @deprecated use `ListEntitiesByDocumentResponse$Outbound` instead. */
  export type Outbound = ListEntitiesByDocumentResponse$Outbound;
}

export function listEntitiesByDocumentResponseToJSON(
  listEntitiesByDocumentResponse: ListEntitiesByDocumentResponse,
): string {
  return JSON.stringify(
    ListEntitiesByDocumentResponse$outboundSchema.parse(
      listEntitiesByDocumentResponse,
    ),
  );
}

export function listEntitiesByDocumentResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListEntitiesByDocumentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListEntitiesByDocumentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListEntitiesByDocumentResponse' from JSON`,
  );
}
