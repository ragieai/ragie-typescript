/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListEntitiesByInstructionRequest = {
  /**
   * The ID of the instruction.
   */
  instructionId: string;
  /**
   * An opaque cursor for pagination
   */
  cursor?: string | null | undefined;
  /**
   * The number of items per page (must be greater than 0 and less than or equal to 100)
   */
  pageSize?: number | undefined;
};

export type ListEntitiesByInstructionResponse = {
  result: components.EntityList;
};

/** @internal */
export const ListEntitiesByInstructionRequest$inboundSchema: z.ZodType<
  ListEntitiesByInstructionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  instruction_id: z.string(),
  cursor: z.nullable(z.string()).optional(),
  page_size: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "instruction_id": "instructionId",
    "page_size": "pageSize",
  });
});

/** @internal */
export type ListEntitiesByInstructionRequest$Outbound = {
  instruction_id: string;
  cursor?: string | null | undefined;
  page_size: number;
};

/** @internal */
export const ListEntitiesByInstructionRequest$outboundSchema: z.ZodType<
  ListEntitiesByInstructionRequest$Outbound,
  z.ZodTypeDef,
  ListEntitiesByInstructionRequest
> = z.object({
  instructionId: z.string(),
  cursor: z.nullable(z.string()).optional(),
  pageSize: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    instructionId: "instruction_id",
    pageSize: "page_size",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEntitiesByInstructionRequest$ {
  /** @deprecated use `ListEntitiesByInstructionRequest$inboundSchema` instead. */
  export const inboundSchema = ListEntitiesByInstructionRequest$inboundSchema;
  /** @deprecated use `ListEntitiesByInstructionRequest$outboundSchema` instead. */
  export const outboundSchema = ListEntitiesByInstructionRequest$outboundSchema;
  /** @deprecated use `ListEntitiesByInstructionRequest$Outbound` instead. */
  export type Outbound = ListEntitiesByInstructionRequest$Outbound;
}

/** @internal */
export const ListEntitiesByInstructionResponse$inboundSchema: z.ZodType<
  ListEntitiesByInstructionResponse,
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
export type ListEntitiesByInstructionResponse$Outbound = {
  Result: components.EntityList$Outbound;
};

/** @internal */
export const ListEntitiesByInstructionResponse$outboundSchema: z.ZodType<
  ListEntitiesByInstructionResponse$Outbound,
  z.ZodTypeDef,
  ListEntitiesByInstructionResponse
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
export namespace ListEntitiesByInstructionResponse$ {
  /** @deprecated use `ListEntitiesByInstructionResponse$inboundSchema` instead. */
  export const inboundSchema = ListEntitiesByInstructionResponse$inboundSchema;
  /** @deprecated use `ListEntitiesByInstructionResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListEntitiesByInstructionResponse$outboundSchema;
  /** @deprecated use `ListEntitiesByInstructionResponse$Outbound` instead. */
  export type Outbound = ListEntitiesByInstructionResponse$Outbound;
}
