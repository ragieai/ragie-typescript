/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  DocumentUpdateWebhookPayload,
  DocumentUpdateWebhookPayload$inboundSchema,
  DocumentUpdateWebhookPayload$Outbound,
  DocumentUpdateWebhookPayload$outboundSchema,
} from "./documentupdatewebhookpayload.js";

export const Type = {
  DocumentStatusUpdated: "document_status_updated",
} as const;
export type Type = ClosedEnum<typeof Type>;

export type DocumentUpdateWebhook = {
  nonce: string;
  type?: "document_status_updated" | undefined;
  payload: DocumentUpdateWebhookPayload;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const DocumentUpdateWebhook$inboundSchema: z.ZodType<
  DocumentUpdateWebhook,
  z.ZodTypeDef,
  unknown
> = z.object({
  nonce: z.string(),
  type: z.literal("document_status_updated").optional(),
  payload: DocumentUpdateWebhookPayload$inboundSchema,
});

/** @internal */
export type DocumentUpdateWebhook$Outbound = {
  nonce: string;
  type: "document_status_updated";
  payload: DocumentUpdateWebhookPayload$Outbound;
};

/** @internal */
export const DocumentUpdateWebhook$outboundSchema: z.ZodType<
  DocumentUpdateWebhook$Outbound,
  z.ZodTypeDef,
  DocumentUpdateWebhook
> = z.object({
  nonce: z.string(),
  type: z.literal("document_status_updated").default("document_status_updated"),
  payload: DocumentUpdateWebhookPayload$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentUpdateWebhook$ {
  /** @deprecated use `DocumentUpdateWebhook$inboundSchema` instead. */
  export const inboundSchema = DocumentUpdateWebhook$inboundSchema;
  /** @deprecated use `DocumentUpdateWebhook$outboundSchema` instead. */
  export const outboundSchema = DocumentUpdateWebhook$outboundSchema;
  /** @deprecated use `DocumentUpdateWebhook$Outbound` instead. */
  export type Outbound = DocumentUpdateWebhook$Outbound;
}
