/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const Status2 = {
  Failed: "failed",
} as const;
export type Status2 = ClosedEnum<typeof Status2>;

export const One = {
  Ready: "ready",
} as const;
export type One = ClosedEnum<typeof One>;

export type Status = One | Status2;

export type DocumentUpdateWebhookPayloadMetadata = {};

export type DocumentUpdateWebhookPayload = {
  documentId: string;
  status: One | Status2;
  partition: string;
  metadata: DocumentUpdateWebhookPayloadMetadata;
  externalId: string | null;
  syncId: string | null;
};

/** @internal */
export const Status2$inboundSchema: z.ZodNativeEnum<typeof Status2> = z
  .nativeEnum(Status2);

/** @internal */
export const Status2$outboundSchema: z.ZodNativeEnum<typeof Status2> =
  Status2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status2$ {
  /** @deprecated use `Status2$inboundSchema` instead. */
  export const inboundSchema = Status2$inboundSchema;
  /** @deprecated use `Status2$outboundSchema` instead. */
  export const outboundSchema = Status2$outboundSchema;
}

/** @internal */
export const One$inboundSchema: z.ZodNativeEnum<typeof One> = z.nativeEnum(One);

/** @internal */
export const One$outboundSchema: z.ZodNativeEnum<typeof One> =
  One$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One$ {
  /** @deprecated use `One$inboundSchema` instead. */
  export const inboundSchema = One$inboundSchema;
  /** @deprecated use `One$outboundSchema` instead. */
  export const outboundSchema = One$outboundSchema;
}

/** @internal */
export const Status$inboundSchema: z.ZodType<Status, z.ZodTypeDef, unknown> = z
  .union([One$inboundSchema, Status2$inboundSchema]);

/** @internal */
export type Status$Outbound = string | string;

/** @internal */
export const Status$outboundSchema: z.ZodType<
  Status$Outbound,
  z.ZodTypeDef,
  Status
> = z.union([One$outboundSchema, Status2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
  /** @deprecated use `Status$Outbound` instead. */
  export type Outbound = Status$Outbound;
}

/** @internal */
export const DocumentUpdateWebhookPayloadMetadata$inboundSchema: z.ZodType<
  DocumentUpdateWebhookPayloadMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type DocumentUpdateWebhookPayloadMetadata$Outbound = {};

/** @internal */
export const DocumentUpdateWebhookPayloadMetadata$outboundSchema: z.ZodType<
  DocumentUpdateWebhookPayloadMetadata$Outbound,
  z.ZodTypeDef,
  DocumentUpdateWebhookPayloadMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentUpdateWebhookPayloadMetadata$ {
  /** @deprecated use `DocumentUpdateWebhookPayloadMetadata$inboundSchema` instead. */
  export const inboundSchema =
    DocumentUpdateWebhookPayloadMetadata$inboundSchema;
  /** @deprecated use `DocumentUpdateWebhookPayloadMetadata$outboundSchema` instead. */
  export const outboundSchema =
    DocumentUpdateWebhookPayloadMetadata$outboundSchema;
  /** @deprecated use `DocumentUpdateWebhookPayloadMetadata$Outbound` instead. */
  export type Outbound = DocumentUpdateWebhookPayloadMetadata$Outbound;
}

/** @internal */
export const DocumentUpdateWebhookPayload$inboundSchema: z.ZodType<
  DocumentUpdateWebhookPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  document_id: z.string(),
  status: z.union([One$inboundSchema, Status2$inboundSchema]),
  partition: z.string(),
  metadata: z.lazy(() => DocumentUpdateWebhookPayloadMetadata$inboundSchema),
  external_id: z.nullable(z.string()),
  sync_id: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "document_id": "documentId",
    "external_id": "externalId",
    "sync_id": "syncId",
  });
});

/** @internal */
export type DocumentUpdateWebhookPayload$Outbound = {
  document_id: string;
  status: string | string;
  partition: string;
  metadata: DocumentUpdateWebhookPayloadMetadata$Outbound;
  external_id: string | null;
  sync_id: string | null;
};

/** @internal */
export const DocumentUpdateWebhookPayload$outboundSchema: z.ZodType<
  DocumentUpdateWebhookPayload$Outbound,
  z.ZodTypeDef,
  DocumentUpdateWebhookPayload
> = z.object({
  documentId: z.string(),
  status: z.union([One$outboundSchema, Status2$outboundSchema]),
  partition: z.string(),
  metadata: z.lazy(() => DocumentUpdateWebhookPayloadMetadata$outboundSchema),
  externalId: z.nullable(z.string()),
  syncId: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    documentId: "document_id",
    externalId: "external_id",
    syncId: "sync_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentUpdateWebhookPayload$ {
  /** @deprecated use `DocumentUpdateWebhookPayload$inboundSchema` instead. */
  export const inboundSchema = DocumentUpdateWebhookPayload$inboundSchema;
  /** @deprecated use `DocumentUpdateWebhookPayload$outboundSchema` instead. */
  export const outboundSchema = DocumentUpdateWebhookPayload$outboundSchema;
  /** @deprecated use `DocumentUpdateWebhookPayload$Outbound` instead. */
  export type Outbound = DocumentUpdateWebhookPayload$Outbound;
}
