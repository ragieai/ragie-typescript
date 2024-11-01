/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type EntityExtractedWebhookPayloadDocumentMetadata = {};

export type EntityExtractedWebhookPayloadData = {};

export type EntityExtractedWebhookPayload = {
  entityId: string;
  documentId: string;
  instructionId: string;
  documentMetadata: EntityExtractedWebhookPayloadDocumentMetadata;
  documentExternalId: string | null;
  partition: string;
  syncId: string | null;
  data: EntityExtractedWebhookPayloadData;
};

/** @internal */
export const EntityExtractedWebhookPayloadDocumentMetadata$inboundSchema:
  z.ZodType<
    EntityExtractedWebhookPayloadDocumentMetadata,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type EntityExtractedWebhookPayloadDocumentMetadata$Outbound = {};

/** @internal */
export const EntityExtractedWebhookPayloadDocumentMetadata$outboundSchema:
  z.ZodType<
    EntityExtractedWebhookPayloadDocumentMetadata$Outbound,
    z.ZodTypeDef,
    EntityExtractedWebhookPayloadDocumentMetadata
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityExtractedWebhookPayloadDocumentMetadata$ {
  /** @deprecated use `EntityExtractedWebhookPayloadDocumentMetadata$inboundSchema` instead. */
  export const inboundSchema =
    EntityExtractedWebhookPayloadDocumentMetadata$inboundSchema;
  /** @deprecated use `EntityExtractedWebhookPayloadDocumentMetadata$outboundSchema` instead. */
  export const outboundSchema =
    EntityExtractedWebhookPayloadDocumentMetadata$outboundSchema;
  /** @deprecated use `EntityExtractedWebhookPayloadDocumentMetadata$Outbound` instead. */
  export type Outbound = EntityExtractedWebhookPayloadDocumentMetadata$Outbound;
}

/** @internal */
export const EntityExtractedWebhookPayloadData$inboundSchema: z.ZodType<
  EntityExtractedWebhookPayloadData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type EntityExtractedWebhookPayloadData$Outbound = {};

/** @internal */
export const EntityExtractedWebhookPayloadData$outboundSchema: z.ZodType<
  EntityExtractedWebhookPayloadData$Outbound,
  z.ZodTypeDef,
  EntityExtractedWebhookPayloadData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityExtractedWebhookPayloadData$ {
  /** @deprecated use `EntityExtractedWebhookPayloadData$inboundSchema` instead. */
  export const inboundSchema = EntityExtractedWebhookPayloadData$inboundSchema;
  /** @deprecated use `EntityExtractedWebhookPayloadData$outboundSchema` instead. */
  export const outboundSchema =
    EntityExtractedWebhookPayloadData$outboundSchema;
  /** @deprecated use `EntityExtractedWebhookPayloadData$Outbound` instead. */
  export type Outbound = EntityExtractedWebhookPayloadData$Outbound;
}

/** @internal */
export const EntityExtractedWebhookPayload$inboundSchema: z.ZodType<
  EntityExtractedWebhookPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  entity_id: z.string(),
  document_id: z.string(),
  instruction_id: z.string(),
  document_metadata: z.lazy(() =>
    EntityExtractedWebhookPayloadDocumentMetadata$inboundSchema
  ),
  document_external_id: z.nullable(z.string()),
  partition: z.string(),
  sync_id: z.nullable(z.string()),
  data: z.lazy(() => EntityExtractedWebhookPayloadData$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "entity_id": "entityId",
    "document_id": "documentId",
    "instruction_id": "instructionId",
    "document_metadata": "documentMetadata",
    "document_external_id": "documentExternalId",
    "sync_id": "syncId",
  });
});

/** @internal */
export type EntityExtractedWebhookPayload$Outbound = {
  entity_id: string;
  document_id: string;
  instruction_id: string;
  document_metadata: EntityExtractedWebhookPayloadDocumentMetadata$Outbound;
  document_external_id: string | null;
  partition: string;
  sync_id: string | null;
  data: EntityExtractedWebhookPayloadData$Outbound;
};

/** @internal */
export const EntityExtractedWebhookPayload$outboundSchema: z.ZodType<
  EntityExtractedWebhookPayload$Outbound,
  z.ZodTypeDef,
  EntityExtractedWebhookPayload
> = z.object({
  entityId: z.string(),
  documentId: z.string(),
  instructionId: z.string(),
  documentMetadata: z.lazy(() =>
    EntityExtractedWebhookPayloadDocumentMetadata$outboundSchema
  ),
  documentExternalId: z.nullable(z.string()),
  partition: z.string(),
  syncId: z.nullable(z.string()),
  data: z.lazy(() => EntityExtractedWebhookPayloadData$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    entityId: "entity_id",
    documentId: "document_id",
    instructionId: "instruction_id",
    documentMetadata: "document_metadata",
    documentExternalId: "document_external_id",
    syncId: "sync_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityExtractedWebhookPayload$ {
  /** @deprecated use `EntityExtractedWebhookPayload$inboundSchema` instead. */
  export const inboundSchema = EntityExtractedWebhookPayload$inboundSchema;
  /** @deprecated use `EntityExtractedWebhookPayload$outboundSchema` instead. */
  export const outboundSchema = EntityExtractedWebhookPayload$outboundSchema;
  /** @deprecated use `EntityExtractedWebhookPayload$Outbound` instead. */
  export type Outbound = EntityExtractedWebhookPayload$Outbound;
}
