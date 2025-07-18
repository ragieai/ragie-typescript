/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConfluenceData,
  ConfluenceData$inboundSchema,
  ConfluenceData$Outbound,
  ConfluenceData$outboundSchema,
} from "./confluencedata.js";
import {
  OAuthRefreshTokenCredentials,
  OAuthRefreshTokenCredentials$inboundSchema,
  OAuthRefreshTokenCredentials$Outbound,
  OAuthRefreshTokenCredentials$outboundSchema,
} from "./oauthrefreshtokencredentials.js";

export type AuthenticatorConfluenceConnection = {
  provider?: "confluence" | undefined;
  data: Array<ConfluenceData>;
  credentials: OAuthRefreshTokenCredentials;
};

/** @internal */
export const AuthenticatorConfluenceConnection$inboundSchema: z.ZodType<
  AuthenticatorConfluenceConnection,
  z.ZodTypeDef,
  unknown
> = z.object({
  provider: z.literal("confluence").default("confluence").optional(),
  data: z.array(ConfluenceData$inboundSchema),
  credentials: OAuthRefreshTokenCredentials$inboundSchema,
});

/** @internal */
export type AuthenticatorConfluenceConnection$Outbound = {
  provider: "confluence";
  data: Array<ConfluenceData$Outbound>;
  credentials: OAuthRefreshTokenCredentials$Outbound;
};

/** @internal */
export const AuthenticatorConfluenceConnection$outboundSchema: z.ZodType<
  AuthenticatorConfluenceConnection$Outbound,
  z.ZodTypeDef,
  AuthenticatorConfluenceConnection
> = z.object({
  provider: z.literal("confluence").default("confluence" as const),
  data: z.array(ConfluenceData$outboundSchema),
  credentials: OAuthRefreshTokenCredentials$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticatorConfluenceConnection$ {
  /** @deprecated use `AuthenticatorConfluenceConnection$inboundSchema` instead. */
  export const inboundSchema = AuthenticatorConfluenceConnection$inboundSchema;
  /** @deprecated use `AuthenticatorConfluenceConnection$outboundSchema` instead. */
  export const outboundSchema =
    AuthenticatorConfluenceConnection$outboundSchema;
  /** @deprecated use `AuthenticatorConfluenceConnection$Outbound` instead. */
  export type Outbound = AuthenticatorConfluenceConnection$Outbound;
}

export function authenticatorConfluenceConnectionToJSON(
  authenticatorConfluenceConnection: AuthenticatorConfluenceConnection,
): string {
  return JSON.stringify(
    AuthenticatorConfluenceConnection$outboundSchema.parse(
      authenticatorConfluenceConnection,
    ),
  );
}

export function authenticatorConfluenceConnectionFromJSON(
  jsonString: string,
): SafeParseResult<AuthenticatorConfluenceConnection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuthenticatorConfluenceConnection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuthenticatorConfluenceConnection' from JSON`,
  );
}
