/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateInstructionRequest = {
  /**
   * The ID of the instruction.
   */
  instructionId: string;
  updateInstructionParams: components.UpdateInstructionParams;
};

/** @internal */
export const UpdateInstructionRequest$inboundSchema: z.ZodType<
  UpdateInstructionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  instruction_id: z.string(),
  UpdateInstructionParams: components.UpdateInstructionParams$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "instruction_id": "instructionId",
    "UpdateInstructionParams": "updateInstructionParams",
  });
});

/** @internal */
export type UpdateInstructionRequest$Outbound = {
  instruction_id: string;
  UpdateInstructionParams: components.UpdateInstructionParams$Outbound;
};

/** @internal */
export const UpdateInstructionRequest$outboundSchema: z.ZodType<
  UpdateInstructionRequest$Outbound,
  z.ZodTypeDef,
  UpdateInstructionRequest
> = z.object({
  instructionId: z.string(),
  updateInstructionParams: components.UpdateInstructionParams$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    instructionId: "instruction_id",
    updateInstructionParams: "UpdateInstructionParams",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateInstructionRequest$ {
  /** @deprecated use `UpdateInstructionRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateInstructionRequest$inboundSchema;
  /** @deprecated use `UpdateInstructionRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateInstructionRequest$outboundSchema;
  /** @deprecated use `UpdateInstructionRequest$Outbound` instead. */
  export type Outbound = UpdateInstructionRequest$Outbound;
}

export function updateInstructionRequestToJSON(
  updateInstructionRequest: UpdateInstructionRequest,
): string {
  return JSON.stringify(
    UpdateInstructionRequest$outboundSchema.parse(updateInstructionRequest),
  );
}

export function updateInstructionRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateInstructionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateInstructionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateInstructionRequest' from JSON`,
  );
}
