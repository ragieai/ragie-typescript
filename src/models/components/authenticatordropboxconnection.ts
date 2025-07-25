/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FolderData,
  FolderData$inboundSchema,
  FolderData$Outbound,
  FolderData$outboundSchema,
} from "./folderdata.js";
import {
  OAuthRefreshTokenCredentials,
  OAuthRefreshTokenCredentials$inboundSchema,
  OAuthRefreshTokenCredentials$Outbound,
  OAuthRefreshTokenCredentials$outboundSchema,
} from "./oauthrefreshtokencredentials.js";

export type AuthenticatorDropboxConnection = {
  provider?: "dropbox" | undefined;
  data: FolderData;
  /**
   * The email of the Dropbox account this is for
   */
  email: string;
  credentials: OAuthRefreshTokenCredentials;
};

/** @internal */
export const AuthenticatorDropboxConnection$inboundSchema: z.ZodType<
  AuthenticatorDropboxConnection,
  z.ZodTypeDef,
  unknown
> = z.object({
  provider: z.literal("dropbox").default("dropbox").optional(),
  data: FolderData$inboundSchema,
  email: z.string(),
  credentials: OAuthRefreshTokenCredentials$inboundSchema,
});

/** @internal */
export type AuthenticatorDropboxConnection$Outbound = {
  provider: "dropbox";
  data: FolderData$Outbound;
  email: string;
  credentials: OAuthRefreshTokenCredentials$Outbound;
};

/** @internal */
export const AuthenticatorDropboxConnection$outboundSchema: z.ZodType<
  AuthenticatorDropboxConnection$Outbound,
  z.ZodTypeDef,
  AuthenticatorDropboxConnection
> = z.object({
  provider: z.literal("dropbox").default("dropbox" as const),
  data: FolderData$outboundSchema,
  email: z.string(),
  credentials: OAuthRefreshTokenCredentials$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthenticatorDropboxConnection$ {
  /** @deprecated use `AuthenticatorDropboxConnection$inboundSchema` instead. */
  export const inboundSchema = AuthenticatorDropboxConnection$inboundSchema;
  /** @deprecated use `AuthenticatorDropboxConnection$outboundSchema` instead. */
  export const outboundSchema = AuthenticatorDropboxConnection$outboundSchema;
  /** @deprecated use `AuthenticatorDropboxConnection$Outbound` instead. */
  export type Outbound = AuthenticatorDropboxConnection$Outbound;
}

export function authenticatorDropboxConnectionToJSON(
  authenticatorDropboxConnection: AuthenticatorDropboxConnection,
): string {
  return JSON.stringify(
    AuthenticatorDropboxConnection$outboundSchema.parse(
      authenticatorDropboxConnection,
    ),
  );
}

export function authenticatorDropboxConnectionFromJSON(
  jsonString: string,
): SafeParseResult<AuthenticatorDropboxConnection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AuthenticatorDropboxConnection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AuthenticatorDropboxConnection' from JSON`,
  );
}
