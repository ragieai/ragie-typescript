/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateDocumentRawParamsMetadata =
  | string
  | number
  | boolean
  | Array<string>;

export type Two = {};

/**
 * Document data in a text or JSON format.
 */
export type Data = Two | string;

export type CreateDocumentRawParams = {
  /**
   * An optional name for the document. If set, the document will have this name. Otherwise it will default to the current timestamp.
   */
  name?: string | undefined;
  /**
   * Metadata for the document. Keys must be strings. Values may be strings, numbers, booleans, or lists of strings. Numbers may be integers or floating point and will be converted to 64 bit floating point. 1000 total values are allowed. Each item in an array counts towards the total. The following keys are reserved for internal use: `document_id`, `document_type`, `document_source`, `document_name`, `document_uploaded_at`.
   */
  metadata: { [k: string]: string | number | boolean | Array<string> };
  /**
   * An optional identifier for the document. A common value might be an id in an external system or the URL where the source file may be found.
   */
  externalId?: string | null | undefined;
  /**
   * An optional partition identifier. Documents can be scoped to a partition. Partitions must be lowercase alphanumeric and may only include the special characters `_` and `-`.  A partition is created any time a document is created or moved to a new partition.
   */
  partition?: string | undefined;
  /**
   * Document data in a text or JSON format.
   */
  data: Two | string;
};

/** @internal */
export const CreateDocumentRawParamsMetadata$inboundSchema: z.ZodType<
  CreateDocumentRawParamsMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/** @internal */
export type CreateDocumentRawParamsMetadata$Outbound =
  | string
  | number
  | boolean
  | Array<string>;

/** @internal */
export const CreateDocumentRawParamsMetadata$outboundSchema: z.ZodType<
  CreateDocumentRawParamsMetadata$Outbound,
  z.ZodTypeDef,
  CreateDocumentRawParamsMetadata
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDocumentRawParamsMetadata$ {
  /** @deprecated use `CreateDocumentRawParamsMetadata$inboundSchema` instead. */
  export const inboundSchema = CreateDocumentRawParamsMetadata$inboundSchema;
  /** @deprecated use `CreateDocumentRawParamsMetadata$outboundSchema` instead. */
  export const outboundSchema = CreateDocumentRawParamsMetadata$outboundSchema;
  /** @deprecated use `CreateDocumentRawParamsMetadata$Outbound` instead. */
  export type Outbound = CreateDocumentRawParamsMetadata$Outbound;
}

export function createDocumentRawParamsMetadataToJSON(
  createDocumentRawParamsMetadata: CreateDocumentRawParamsMetadata,
): string {
  return JSON.stringify(
    CreateDocumentRawParamsMetadata$outboundSchema.parse(
      createDocumentRawParamsMetadata,
    ),
  );
}

export function createDocumentRawParamsMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CreateDocumentRawParamsMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDocumentRawParamsMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDocumentRawParamsMetadata' from JSON`,
  );
}

/** @internal */
export const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Two$Outbound = {};

/** @internal */
export const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two> = z
  .object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
  /** @deprecated use `Two$inboundSchema` instead. */
  export const inboundSchema = Two$inboundSchema;
  /** @deprecated use `Two$outboundSchema` instead. */
  export const outboundSchema = Two$outboundSchema;
  /** @deprecated use `Two$Outbound` instead. */
  export type Outbound = Two$Outbound;
}

export function twoToJSON(two: Two): string {
  return JSON.stringify(Two$outboundSchema.parse(two));
}

export function twoFromJSON(
  jsonString: string,
): SafeParseResult<Two, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Two$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Two' from JSON`,
  );
}

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .union([z.lazy(() => Two$inboundSchema), z.string()]);

/** @internal */
export type Data$Outbound = Two$Outbound | string;

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.union([z.lazy(() => Two$outboundSchema), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data$ {
  /** @deprecated use `Data$inboundSchema` instead. */
  export const inboundSchema = Data$inboundSchema;
  /** @deprecated use `Data$outboundSchema` instead. */
  export const outboundSchema = Data$outboundSchema;
  /** @deprecated use `Data$Outbound` instead. */
  export type Outbound = Data$Outbound;
}

export function dataToJSON(data: Data): string {
  return JSON.stringify(Data$outboundSchema.parse(data));
}

export function dataFromJSON(
  jsonString: string,
): SafeParseResult<Data, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data' from JSON`,
  );
}

/** @internal */
export const CreateDocumentRawParams$inboundSchema: z.ZodType<
  CreateDocumentRawParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ),
  external_id: z.nullable(z.string()).optional(),
  partition: z.string().optional(),
  data: z.union([z.lazy(() => Two$inboundSchema), z.string()]),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
  });
});

/** @internal */
export type CreateDocumentRawParams$Outbound = {
  name?: string | undefined;
  metadata: { [k: string]: string | number | boolean | Array<string> };
  external_id?: string | null | undefined;
  partition?: string | undefined;
  data: Two$Outbound | string;
};

/** @internal */
export const CreateDocumentRawParams$outboundSchema: z.ZodType<
  CreateDocumentRawParams$Outbound,
  z.ZodTypeDef,
  CreateDocumentRawParams
> = z.object({
  name: z.string().optional(),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ),
  externalId: z.nullable(z.string()).optional(),
  partition: z.string().optional(),
  data: z.union([z.lazy(() => Two$outboundSchema), z.string()]),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDocumentRawParams$ {
  /** @deprecated use `CreateDocumentRawParams$inboundSchema` instead. */
  export const inboundSchema = CreateDocumentRawParams$inboundSchema;
  /** @deprecated use `CreateDocumentRawParams$outboundSchema` instead. */
  export const outboundSchema = CreateDocumentRawParams$outboundSchema;
  /** @deprecated use `CreateDocumentRawParams$Outbound` instead. */
  export type Outbound = CreateDocumentRawParams$Outbound;
}

export function createDocumentRawParamsToJSON(
  createDocumentRawParams: CreateDocumentRawParams,
): string {
  return JSON.stringify(
    CreateDocumentRawParams$outboundSchema.parse(createDocumentRawParams),
  );
}

export function createDocumentRawParamsFromJSON(
  jsonString: string,
): SafeParseResult<CreateDocumentRawParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDocumentRawParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDocumentRawParams' from JSON`,
  );
}
