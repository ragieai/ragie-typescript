/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IntercomCredentials,
  IntercomCredentials$inboundSchema,
  IntercomCredentials$Outbound,
  IntercomCredentials$outboundSchema,
} from "./intercomcredentials.js";
import {
  IntercomData,
  IntercomData$inboundSchema,
  IntercomData$Outbound,
  IntercomData$outboundSchema,
} from "./intercomdata.js";

export type PublicIntercomConnection = {
  provider?: "intercom" | undefined;
  data: IntercomData;
  credentials: IntercomCredentials;
};

/** @internal */
export const PublicIntercomConnection$inboundSchema: z.ZodType<
  PublicIntercomConnection,
  z.ZodTypeDef,
  unknown
> = z.object({
  provider: z.literal("intercom").default("intercom").optional(),
  data: IntercomData$inboundSchema,
  credentials: IntercomCredentials$inboundSchema,
});

/** @internal */
export type PublicIntercomConnection$Outbound = {
  provider: "intercom";
  data: IntercomData$Outbound;
  credentials: IntercomCredentials$Outbound;
};

/** @internal */
export const PublicIntercomConnection$outboundSchema: z.ZodType<
  PublicIntercomConnection$Outbound,
  z.ZodTypeDef,
  PublicIntercomConnection
> = z.object({
  provider: z.literal("intercom").default("intercom" as const),
  data: IntercomData$outboundSchema,
  credentials: IntercomCredentials$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PublicIntercomConnection$ {
  /** @deprecated use `PublicIntercomConnection$inboundSchema` instead. */
  export const inboundSchema = PublicIntercomConnection$inboundSchema;
  /** @deprecated use `PublicIntercomConnection$outboundSchema` instead. */
  export const outboundSchema = PublicIntercomConnection$outboundSchema;
  /** @deprecated use `PublicIntercomConnection$Outbound` instead. */
  export type Outbound = PublicIntercomConnection$Outbound;
}

export function publicIntercomConnectionToJSON(
  publicIntercomConnection: PublicIntercomConnection,
): string {
  return JSON.stringify(
    PublicIntercomConnection$outboundSchema.parse(publicIntercomConnection),
  );
}

export function publicIntercomConnectionFromJSON(
  jsonString: string,
): SafeParseResult<PublicIntercomConnection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PublicIntercomConnection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PublicIntercomConnection' from JSON`,
  );
}
