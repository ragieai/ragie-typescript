/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateInstructionParams = {
  /**
   * Whether the instruction is active. Active instructions are applied to documents when they're created or when their file is updated.
   */
  active: boolean;
};

/** @internal */
export const UpdateInstructionParams$inboundSchema: z.ZodType<
  UpdateInstructionParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean(),
});

/** @internal */
export type UpdateInstructionParams$Outbound = {
  active: boolean;
};

/** @internal */
export const UpdateInstructionParams$outboundSchema: z.ZodType<
  UpdateInstructionParams$Outbound,
  z.ZodTypeDef,
  UpdateInstructionParams
> = z.object({
  active: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateInstructionParams$ {
  /** @deprecated use `UpdateInstructionParams$inboundSchema` instead. */
  export const inboundSchema = UpdateInstructionParams$inboundSchema;
  /** @deprecated use `UpdateInstructionParams$outboundSchema` instead. */
  export const outboundSchema = UpdateInstructionParams$outboundSchema;
  /** @deprecated use `UpdateInstructionParams$Outbound` instead. */
  export type Outbound = UpdateInstructionParams$Outbound;
}

export function updateInstructionParamsToJSON(
  updateInstructionParams: UpdateInstructionParams,
): string {
  return JSON.stringify(
    UpdateInstructionParams$outboundSchema.parse(updateInstructionParams),
  );
}

export function updateInstructionParamsFromJSON(
  jsonString: string,
): SafeParseResult<UpdateInstructionParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateInstructionParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateInstructionParams' from JSON`,
  );
}
