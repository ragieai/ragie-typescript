/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Partition strategy for the document. Options are `'hi_res'` or `'fast'`. Only applicable for rich documents such as word documents and PDFs. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`.
 */
export const UpdateDocumentFileParamsMode = {
  HiRes: "hi_res",
  Fast: "fast",
} as const;
/**
 * Partition strategy for the document. Options are `'hi_res'` or `'fast'`. Only applicable for rich documents such as word documents and PDFs. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`.
 */
export type UpdateDocumentFileParamsMode = ClosedEnum<
  typeof UpdateDocumentFileParamsMode
>;

export type UpdateDocumentFileParamsFile = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

export type UpdateDocumentFileParams = {
  /**
   * The binary file to upload, extract, and index for retrieval. The following file types are supported: Plain Text: `.eml` `.html` `.json` `.md` `.msg` `.rst` `.rtf` `.txt` `.xml`
   *
   * @remarks
   * Images: `.png` `.webp` `.jpg` `.jpeg` `.tiff` `.bmp` `.heic`
   * Documents: `.csv` `.doc` `.docx` `.epub` `.epub+zip` `.odt` `.pdf` `.ppt` `.pptx` `.tsv` `.xlsx` `.xls`.
   */
  file: UpdateDocumentFileParamsFile | Blob;
  /**
   * Partition strategy for the document. Options are `'hi_res'` or `'fast'`. Only applicable for rich documents such as word documents and PDFs. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`.
   */
  mode?: UpdateDocumentFileParamsMode | undefined;
};

/** @internal */
export const UpdateDocumentFileParamsMode$inboundSchema: z.ZodNativeEnum<
  typeof UpdateDocumentFileParamsMode
> = z.nativeEnum(UpdateDocumentFileParamsMode);

/** @internal */
export const UpdateDocumentFileParamsMode$outboundSchema: z.ZodNativeEnum<
  typeof UpdateDocumentFileParamsMode
> = UpdateDocumentFileParamsMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDocumentFileParamsMode$ {
  /** @deprecated use `UpdateDocumentFileParamsMode$inboundSchema` instead. */
  export const inboundSchema = UpdateDocumentFileParamsMode$inboundSchema;
  /** @deprecated use `UpdateDocumentFileParamsMode$outboundSchema` instead. */
  export const outboundSchema = UpdateDocumentFileParamsMode$outboundSchema;
}

/** @internal */
export const UpdateDocumentFileParamsFile$inboundSchema: z.ZodType<
  UpdateDocumentFileParamsFile,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/** @internal */
export type UpdateDocumentFileParamsFile$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const UpdateDocumentFileParamsFile$outboundSchema: z.ZodType<
  UpdateDocumentFileParamsFile$Outbound,
  z.ZodTypeDef,
  UpdateDocumentFileParamsFile
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDocumentFileParamsFile$ {
  /** @deprecated use `UpdateDocumentFileParamsFile$inboundSchema` instead. */
  export const inboundSchema = UpdateDocumentFileParamsFile$inboundSchema;
  /** @deprecated use `UpdateDocumentFileParamsFile$outboundSchema` instead. */
  export const outboundSchema = UpdateDocumentFileParamsFile$outboundSchema;
  /** @deprecated use `UpdateDocumentFileParamsFile$Outbound` instead. */
  export type Outbound = UpdateDocumentFileParamsFile$Outbound;
}

export function updateDocumentFileParamsFileToJSON(
  updateDocumentFileParamsFile: UpdateDocumentFileParamsFile,
): string {
  return JSON.stringify(
    UpdateDocumentFileParamsFile$outboundSchema.parse(
      updateDocumentFileParamsFile,
    ),
  );
}

export function updateDocumentFileParamsFileFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDocumentFileParamsFile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDocumentFileParamsFile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDocumentFileParamsFile' from JSON`,
  );
}

/** @internal */
export const UpdateDocumentFileParams$inboundSchema: z.ZodType<
  UpdateDocumentFileParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => UpdateDocumentFileParamsFile$inboundSchema),
  mode: UpdateDocumentFileParamsMode$inboundSchema.default("fast"),
});

/** @internal */
export type UpdateDocumentFileParams$Outbound = {
  file: UpdateDocumentFileParamsFile$Outbound | Blob;
  mode: string;
};

/** @internal */
export const UpdateDocumentFileParams$outboundSchema: z.ZodType<
  UpdateDocumentFileParams$Outbound,
  z.ZodTypeDef,
  UpdateDocumentFileParams
> = z.object({
  file: z.lazy(() => UpdateDocumentFileParamsFile$outboundSchema).or(
    blobLikeSchema,
  ),
  mode: UpdateDocumentFileParamsMode$outboundSchema.default("fast"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDocumentFileParams$ {
  /** @deprecated use `UpdateDocumentFileParams$inboundSchema` instead. */
  export const inboundSchema = UpdateDocumentFileParams$inboundSchema;
  /** @deprecated use `UpdateDocumentFileParams$outboundSchema` instead. */
  export const outboundSchema = UpdateDocumentFileParams$outboundSchema;
  /** @deprecated use `UpdateDocumentFileParams$Outbound` instead. */
  export type Outbound = UpdateDocumentFileParams$Outbound;
}

export function updateDocumentFileParamsToJSON(
  updateDocumentFileParams: UpdateDocumentFileParams,
): string {
  return JSON.stringify(
    UpdateDocumentFileParams$outboundSchema.parse(updateDocumentFileParams),
  );
}

export function updateDocumentFileParamsFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDocumentFileParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDocumentFileParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDocumentFileParams' from JSON`,
  );
}
