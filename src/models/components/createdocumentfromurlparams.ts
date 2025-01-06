/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateDocumentFromUrlParamsMetadata =
  | string
  | number
  | boolean
  | Array<string>;

/**
 * Partition strategy for the document. Options are `'hi_res'` or `'fast'`. Only applicable for rich documents such as word documents and PDFs. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`.
 */
export const CreateDocumentFromUrlParamsMode = {
  HiRes: "hi_res",
  Fast: "fast",
} as const;
/**
 * Partition strategy for the document. Options are `'hi_res'` or `'fast'`. Only applicable for rich documents such as word documents and PDFs. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`.
 */
export type CreateDocumentFromUrlParamsMode = ClosedEnum<
  typeof CreateDocumentFromUrlParamsMode
>;

export type CreateDocumentFromUrlParams = {
  name?: string | undefined;
  /**
   * Metadata for the document. Keys must be strings. Values may be strings, numbers, booleans, or lists of strings. Numbers may be integers or floating point and will be converted to 64 bit floating point. 1000 total values are allowed. Each item in an array counts towards the total. The following keys are reserved for internal use: `document_id`, `document_type`, `document_source`, `document_name`, `document_uploaded_at`.
   */
  metadata?:
    | { [k: string]: string | number | boolean | Array<string> }
    | undefined;
  /**
   * Partition strategy for the document. Options are `'hi_res'` or `'fast'`. Only applicable for rich documents such as word documents and PDFs. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`.
   */
  mode?: CreateDocumentFromUrlParamsMode | undefined;
  /**
   * An optional identifier for the document. A common value might be an id in an external system or the URL where the source file may be found.
   */
  externalId?: string | null | undefined;
  /**
   * An optional partition identifier. Documents can be scoped to a partition. Partitions must be lowercase alphanumeric and may only include the special characters `_` and `-`.  A partition is created any time a document is created.
   */
  partition?: string | undefined;
  /**
   * Url of the file to download. Must be publicly accessible and HTTP or HTTPS scheme
   */
  url: string;
};

/** @internal */
export const CreateDocumentFromUrlParamsMetadata$inboundSchema: z.ZodType<
  CreateDocumentFromUrlParamsMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/** @internal */
export type CreateDocumentFromUrlParamsMetadata$Outbound =
  | string
  | number
  | boolean
  | Array<string>;

/** @internal */
export const CreateDocumentFromUrlParamsMetadata$outboundSchema: z.ZodType<
  CreateDocumentFromUrlParamsMetadata$Outbound,
  z.ZodTypeDef,
  CreateDocumentFromUrlParamsMetadata
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDocumentFromUrlParamsMetadata$ {
  /** @deprecated use `CreateDocumentFromUrlParamsMetadata$inboundSchema` instead. */
  export const inboundSchema =
    CreateDocumentFromUrlParamsMetadata$inboundSchema;
  /** @deprecated use `CreateDocumentFromUrlParamsMetadata$outboundSchema` instead. */
  export const outboundSchema =
    CreateDocumentFromUrlParamsMetadata$outboundSchema;
  /** @deprecated use `CreateDocumentFromUrlParamsMetadata$Outbound` instead. */
  export type Outbound = CreateDocumentFromUrlParamsMetadata$Outbound;
}

export function createDocumentFromUrlParamsMetadataToJSON(
  createDocumentFromUrlParamsMetadata: CreateDocumentFromUrlParamsMetadata,
): string {
  return JSON.stringify(
    CreateDocumentFromUrlParamsMetadata$outboundSchema.parse(
      createDocumentFromUrlParamsMetadata,
    ),
  );
}

export function createDocumentFromUrlParamsMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CreateDocumentFromUrlParamsMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateDocumentFromUrlParamsMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDocumentFromUrlParamsMetadata' from JSON`,
  );
}

/** @internal */
export const CreateDocumentFromUrlParamsMode$inboundSchema: z.ZodNativeEnum<
  typeof CreateDocumentFromUrlParamsMode
> = z.nativeEnum(CreateDocumentFromUrlParamsMode);

/** @internal */
export const CreateDocumentFromUrlParamsMode$outboundSchema: z.ZodNativeEnum<
  typeof CreateDocumentFromUrlParamsMode
> = CreateDocumentFromUrlParamsMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDocumentFromUrlParamsMode$ {
  /** @deprecated use `CreateDocumentFromUrlParamsMode$inboundSchema` instead. */
  export const inboundSchema = CreateDocumentFromUrlParamsMode$inboundSchema;
  /** @deprecated use `CreateDocumentFromUrlParamsMode$outboundSchema` instead. */
  export const outboundSchema = CreateDocumentFromUrlParamsMode$outboundSchema;
}

/** @internal */
export const CreateDocumentFromUrlParams$inboundSchema: z.ZodType<
  CreateDocumentFromUrlParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ).optional(),
  mode: CreateDocumentFromUrlParamsMode$inboundSchema.default("fast"),
  external_id: z.nullable(z.string()).optional(),
  partition: z.string().optional(),
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
  });
});

/** @internal */
export type CreateDocumentFromUrlParams$Outbound = {
  name?: string | undefined;
  metadata?:
    | { [k: string]: string | number | boolean | Array<string> }
    | undefined;
  mode: string;
  external_id?: string | null | undefined;
  partition?: string | undefined;
  url: string;
};

/** @internal */
export const CreateDocumentFromUrlParams$outboundSchema: z.ZodType<
  CreateDocumentFromUrlParams$Outbound,
  z.ZodTypeDef,
  CreateDocumentFromUrlParams
> = z.object({
  name: z.string().optional(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ).optional(),
  mode: CreateDocumentFromUrlParamsMode$outboundSchema.default("fast"),
  externalId: z.nullable(z.string()).optional(),
  partition: z.string().optional(),
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDocumentFromUrlParams$ {
  /** @deprecated use `CreateDocumentFromUrlParams$inboundSchema` instead. */
  export const inboundSchema = CreateDocumentFromUrlParams$inboundSchema;
  /** @deprecated use `CreateDocumentFromUrlParams$outboundSchema` instead. */
  export const outboundSchema = CreateDocumentFromUrlParams$outboundSchema;
  /** @deprecated use `CreateDocumentFromUrlParams$Outbound` instead. */
  export type Outbound = CreateDocumentFromUrlParams$Outbound;
}

export function createDocumentFromUrlParamsToJSON(
  createDocumentFromUrlParams: CreateDocumentFromUrlParams,
): string {
  return JSON.stringify(
    CreateDocumentFromUrlParams$outboundSchema.parse(
      createDocumentFromUrlParams,
    ),
  );
}

export function createDocumentFromUrlParamsFromJSON(
  jsonString: string,
): SafeParseResult<CreateDocumentFromUrlParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDocumentFromUrlParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDocumentFromUrlParams' from JSON`,
  );
}
