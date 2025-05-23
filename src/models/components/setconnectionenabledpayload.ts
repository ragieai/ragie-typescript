/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Reason = {
  ConnectionOverTotalPageLimit: "connection_over_total_page_limit",
  AuthenticationFailed: "authentication_failed",
} as const;
export type Reason = ClosedEnum<typeof Reason>;

export type SetConnectionEnabledPayload = {
  enabled: boolean;
  reason?: Reason | null | undefined;
};

/** @internal */
export const Reason$inboundSchema: z.ZodNativeEnum<typeof Reason> = z
  .nativeEnum(Reason);

/** @internal */
export const Reason$outboundSchema: z.ZodNativeEnum<typeof Reason> =
  Reason$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reason$ {
  /** @deprecated use `Reason$inboundSchema` instead. */
  export const inboundSchema = Reason$inboundSchema;
  /** @deprecated use `Reason$outboundSchema` instead. */
  export const outboundSchema = Reason$outboundSchema;
}

/** @internal */
export const SetConnectionEnabledPayload$inboundSchema: z.ZodType<
  SetConnectionEnabledPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  enabled: z.boolean(),
  reason: z.nullable(Reason$inboundSchema).optional(),
});

/** @internal */
export type SetConnectionEnabledPayload$Outbound = {
  enabled: boolean;
  reason?: string | null | undefined;
};

/** @internal */
export const SetConnectionEnabledPayload$outboundSchema: z.ZodType<
  SetConnectionEnabledPayload$Outbound,
  z.ZodTypeDef,
  SetConnectionEnabledPayload
> = z.object({
  enabled: z.boolean(),
  reason: z.nullable(Reason$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetConnectionEnabledPayload$ {
  /** @deprecated use `SetConnectionEnabledPayload$inboundSchema` instead. */
  export const inboundSchema = SetConnectionEnabledPayload$inboundSchema;
  /** @deprecated use `SetConnectionEnabledPayload$outboundSchema` instead. */
  export const outboundSchema = SetConnectionEnabledPayload$outboundSchema;
  /** @deprecated use `SetConnectionEnabledPayload$Outbound` instead. */
  export type Outbound = SetConnectionEnabledPayload$Outbound;
}

export function setConnectionEnabledPayloadToJSON(
  setConnectionEnabledPayload: SetConnectionEnabledPayload,
): string {
  return JSON.stringify(
    SetConnectionEnabledPayload$outboundSchema.parse(
      setConnectionEnabledPayload,
    ),
  );
}

export function setConnectionEnabledPayloadFromJSON(
  jsonString: string,
): SafeParseResult<SetConnectionEnabledPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SetConnectionEnabledPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SetConnectionEnabledPayload' from JSON`,
  );
}
