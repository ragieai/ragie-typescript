/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DocumentMetadata = string | number | boolean | Array<string>;

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  name: string;
  metadata: { [k: string]: string | number | boolean | Array<string> };
  partition: string;
  chunkCount?: number | null | undefined;
  externalId?: string | null | undefined;
};

/** @internal */
export const DocumentMetadata$inboundSchema: z.ZodType<
  DocumentMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/** @internal */
export type DocumentMetadata$Outbound =
  | string
  | number
  | boolean
  | Array<string>;

/** @internal */
export const DocumentMetadata$outboundSchema: z.ZodType<
  DocumentMetadata$Outbound,
  z.ZodTypeDef,
  DocumentMetadata
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentMetadata$ {
  /** @deprecated use `DocumentMetadata$inboundSchema` instead. */
  export const inboundSchema = DocumentMetadata$inboundSchema;
  /** @deprecated use `DocumentMetadata$outboundSchema` instead. */
  export const outboundSchema = DocumentMetadata$outboundSchema;
  /** @deprecated use `DocumentMetadata$Outbound` instead. */
  export type Outbound = DocumentMetadata$Outbound;
}

export function documentMetadataToJSON(
  documentMetadata: DocumentMetadata,
): string {
  return JSON.stringify(
    DocumentMetadata$outboundSchema.parse(documentMetadata),
  );
}

export function documentMetadataFromJSON(
  jsonString: string,
): SafeParseResult<DocumentMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentMetadata' from JSON`,
  );
}

/** @internal */
export const Document$inboundSchema: z.ZodType<
  Document,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  status: z.string(),
  name: z.string(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ),
  partition: z.string(),
  chunk_count: z.nullable(z.number().int()).optional(),
  external_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "chunk_count": "chunkCount",
    "external_id": "externalId",
  });
});

/** @internal */
export type Document$Outbound = {
  id: string;
  created_at: string;
  updated_at: string;
  status: string;
  name: string;
  metadata: { [k: string]: string | number | boolean | Array<string> };
  partition: string;
  chunk_count?: number | null | undefined;
  external_id?: string | null | undefined;
};

/** @internal */
export const Document$outboundSchema: z.ZodType<
  Document$Outbound,
  z.ZodTypeDef,
  Document
> = z.object({
  id: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
  status: z.string(),
  name: z.string(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ),
  partition: z.string(),
  chunkCount: z.nullable(z.number().int()).optional(),
  externalId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    chunkCount: "chunk_count",
    externalId: "external_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Document$ {
  /** @deprecated use `Document$inboundSchema` instead. */
  export const inboundSchema = Document$inboundSchema;
  /** @deprecated use `Document$outboundSchema` instead. */
  export const outboundSchema = Document$outboundSchema;
  /** @deprecated use `Document$Outbound` instead. */
  export type Outbound = Document$Outbound;
}

export function documentToJSON(document: Document): string {
  return JSON.stringify(Document$outboundSchema.parse(document));
}

export function documentFromJSON(
  jsonString: string,
): SafeParseResult<Document, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Document$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Document' from JSON`,
  );
}
