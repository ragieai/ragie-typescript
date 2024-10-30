/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type EventeventPostBody =
  | components.DocumentUpdateWebhook
  | components.DocumentDeleteWebhook
  | components.EntityExtractedWebhook;

/** @internal */
export const EventeventPostBody$inboundSchema: z.ZodType<
  EventeventPostBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DocumentUpdateWebhook$inboundSchema,
  components.DocumentDeleteWebhook$inboundSchema,
  components.EntityExtractedWebhook$inboundSchema,
]);

/** @internal */
export type EventeventPostBody$Outbound =
  | components.DocumentUpdateWebhook$Outbound
  | components.DocumentDeleteWebhook$Outbound
  | components.EntityExtractedWebhook$Outbound;

/** @internal */
export const EventeventPostBody$outboundSchema: z.ZodType<
  EventeventPostBody$Outbound,
  z.ZodTypeDef,
  EventeventPostBody
> = z.union([
  components.DocumentUpdateWebhook$outboundSchema,
  components.DocumentDeleteWebhook$outboundSchema,
  components.EntityExtractedWebhook$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventeventPostBody$ {
  /** @deprecated use `EventeventPostBody$inboundSchema` instead. */
  export const inboundSchema = EventeventPostBody$inboundSchema;
  /** @deprecated use `EventeventPostBody$outboundSchema` instead. */
  export const outboundSchema = EventeventPostBody$outboundSchema;
  /** @deprecated use `EventeventPostBody$Outbound` instead. */
  export type Outbound = EventeventPostBody$Outbound;
}