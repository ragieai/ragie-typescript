/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

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
   * Metadata for the document. Keys must be strings. Values may be strings, numbers, booleans, or lists of strings. Numbers may be integers or floating point and will be converted to 64 bit floating point. 1000 total values are allowed. Each item in an array counts towards the total. The following keys are reserved for internal use: `document_id`, `document_type`, `document_source`, `document_name`, `document_uploaded_at`.
   */
  metadata?:
    | { [k: string]: string | number | boolean | Array<string> }
    | undefined;
  /**
   * Document data in a text or JSON format.
   */
  data: Two | string;
  /**
   * An optional partition identifier. Documents can be scoped to a partition. A partition is created any time a document is created or moved to a new partition.
   */
  partition?: string | undefined;
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

/** @internal */
export const CreateDocumentRawParams$inboundSchema: z.ZodType<
  CreateDocumentRawParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ).optional(),
  data: z.union([z.lazy(() => Two$inboundSchema), z.string()]),
  partition: z.string().optional(),
});

/** @internal */
export type CreateDocumentRawParams$Outbound = {
  metadata?:
    | { [k: string]: string | number | boolean | Array<string> }
    | undefined;
  data: Two$Outbound | string;
  partition?: string | undefined;
};

/** @internal */
export const CreateDocumentRawParams$outboundSchema: z.ZodType<
  CreateDocumentRawParams$Outbound,
  z.ZodTypeDef,
  CreateDocumentRawParams
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ).optional(),
  data: z.union([z.lazy(() => Two$outboundSchema), z.string()]),
  partition: z.string().optional(),
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
