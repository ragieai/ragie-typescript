/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConnectorSource,
  ConnectorSource$inboundSchema,
  ConnectorSource$outboundSchema,
} from "./connectorsource.js";

export type OAuthUrlCreateMetadata = string | number | boolean | Array<string>;

export const Mode = {
  HiRes: "hi_res",
  Fast: "fast",
} as const;
export type Mode = ClosedEnum<typeof Mode>;

export const Theme = {
  Light: "light",
  Dark: "dark",
  System: "system",
} as const;
export type Theme = ClosedEnum<typeof Theme>;

export type OAuthUrlCreate = {
  redirectUri: string;
  sourceType?: ConnectorSource | undefined;
  /**
   * Metadata for the document. Keys must be strings. Values may be strings, numbers, booleans, or lists of strings. Numbers may be integers or floating point and will be converted to 64 bit floating point. 1000 total values are allowed. Each item in an array counts towards the total. The following keys are reserved for internal use: `document_id`, `document_type`, `document_source`, `document_name`, `document_uploaded_at`.
   */
  metadata?:
    | { [k: string]: string | number | boolean | Array<string> }
    | undefined;
  mode?: Mode | null | undefined;
  partition?: string | null | undefined;
  /**
   * Sets the theme of the Ragie Web UI when the user lands there. Can be light, dark, or system to use whatever the system value is. If omitted, system is used.
   */
  theme?: Theme | null | undefined;
  /**
   * The maximum number of pages a connection will sync. The connection will be disabled after this limit is reached. Some in progress documents may continue processing after the limit is reached. The limit will be enforced at the start of the next document sync. Remove the limit by setting to null.
   */
  pageLimit?: number | null | undefined;
};

/** @internal */
export const OAuthUrlCreateMetadata$inboundSchema: z.ZodType<
  OAuthUrlCreateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/** @internal */
export type OAuthUrlCreateMetadata$Outbound =
  | string
  | number
  | boolean
  | Array<string>;

/** @internal */
export const OAuthUrlCreateMetadata$outboundSchema: z.ZodType<
  OAuthUrlCreateMetadata$Outbound,
  z.ZodTypeDef,
  OAuthUrlCreateMetadata
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuthUrlCreateMetadata$ {
  /** @deprecated use `OAuthUrlCreateMetadata$inboundSchema` instead. */
  export const inboundSchema = OAuthUrlCreateMetadata$inboundSchema;
  /** @deprecated use `OAuthUrlCreateMetadata$outboundSchema` instead. */
  export const outboundSchema = OAuthUrlCreateMetadata$outboundSchema;
  /** @deprecated use `OAuthUrlCreateMetadata$Outbound` instead. */
  export type Outbound = OAuthUrlCreateMetadata$Outbound;
}

export function oAuthUrlCreateMetadataToJSON(
  oAuthUrlCreateMetadata: OAuthUrlCreateMetadata,
): string {
  return JSON.stringify(
    OAuthUrlCreateMetadata$outboundSchema.parse(oAuthUrlCreateMetadata),
  );
}

export function oAuthUrlCreateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<OAuthUrlCreateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OAuthUrlCreateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OAuthUrlCreateMetadata' from JSON`,
  );
}

/** @internal */
export const Mode$inboundSchema: z.ZodNativeEnum<typeof Mode> = z.nativeEnum(
  Mode,
);

/** @internal */
export const Mode$outboundSchema: z.ZodNativeEnum<typeof Mode> =
  Mode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Mode$ {
  /** @deprecated use `Mode$inboundSchema` instead. */
  export const inboundSchema = Mode$inboundSchema;
  /** @deprecated use `Mode$outboundSchema` instead. */
  export const outboundSchema = Mode$outboundSchema;
}

/** @internal */
export const Theme$inboundSchema: z.ZodNativeEnum<typeof Theme> = z.nativeEnum(
  Theme,
);

/** @internal */
export const Theme$outboundSchema: z.ZodNativeEnum<typeof Theme> =
  Theme$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Theme$ {
  /** @deprecated use `Theme$inboundSchema` instead. */
  export const inboundSchema = Theme$inboundSchema;
  /** @deprecated use `Theme$outboundSchema` instead. */
  export const outboundSchema = Theme$outboundSchema;
}

/** @internal */
export const OAuthUrlCreate$inboundSchema: z.ZodType<
  OAuthUrlCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  redirect_uri: z.string(),
  source_type: ConnectorSource$inboundSchema.optional(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ).optional(),
  mode: z.nullable(Mode$inboundSchema).optional(),
  partition: z.nullable(z.string()).optional(),
  theme: z.nullable(Theme$inboundSchema).optional(),
  page_limit: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "redirect_uri": "redirectUri",
    "source_type": "sourceType",
    "page_limit": "pageLimit",
  });
});

/** @internal */
export type OAuthUrlCreate$Outbound = {
  redirect_uri: string;
  source_type?: string | undefined;
  metadata?:
    | { [k: string]: string | number | boolean | Array<string> }
    | undefined;
  mode?: string | null | undefined;
  partition?: string | null | undefined;
  theme?: string | null | undefined;
  page_limit?: number | null | undefined;
};

/** @internal */
export const OAuthUrlCreate$outboundSchema: z.ZodType<
  OAuthUrlCreate$Outbound,
  z.ZodTypeDef,
  OAuthUrlCreate
> = z.object({
  redirectUri: z.string(),
  sourceType: ConnectorSource$outboundSchema.optional(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ).optional(),
  mode: z.nullable(Mode$outboundSchema).optional(),
  partition: z.nullable(z.string()).optional(),
  theme: z.nullable(Theme$outboundSchema).optional(),
  pageLimit: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    redirectUri: "redirect_uri",
    sourceType: "source_type",
    pageLimit: "page_limit",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuthUrlCreate$ {
  /** @deprecated use `OAuthUrlCreate$inboundSchema` instead. */
  export const inboundSchema = OAuthUrlCreate$inboundSchema;
  /** @deprecated use `OAuthUrlCreate$outboundSchema` instead. */
  export const outboundSchema = OAuthUrlCreate$outboundSchema;
  /** @deprecated use `OAuthUrlCreate$Outbound` instead. */
  export type Outbound = OAuthUrlCreate$Outbound;
}

export function oAuthUrlCreateToJSON(oAuthUrlCreate: OAuthUrlCreate): string {
  return JSON.stringify(OAuthUrlCreate$outboundSchema.parse(oAuthUrlCreate));
}

export function oAuthUrlCreateFromJSON(
  jsonString: string,
): SafeParseResult<OAuthUrlCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OAuthUrlCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OAuthUrlCreate' from JSON`,
  );
}
