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
 * Partition strategy for the document. Options are `'hi_res'` or `'fast'`. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`. `hi_res` is only applicable for Word documents, PDFs, Images, and PowerPoints. Images will always be processed in `hi_res`. If `hi_res` is set for an unsupported document type, it will be processed and billed in `fast` mode.
 */
export const UpdateDocumentFileParamsMode = {
  HiRes: "hi_res",
  Fast: "fast",
} as const;
/**
 * Partition strategy for the document. Options are `'hi_res'` or `'fast'`. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`. `hi_res` is only applicable for Word documents, PDFs, Images, and PowerPoints. Images will always be processed in `hi_res`. If `hi_res` is set for an unsupported document type, it will be processed and billed in `fast` mode.
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
   * Partition strategy for the document. Options are `'hi_res'` or `'fast'`. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`. `hi_res` is only applicable for Word documents, PDFs, Images, and PowerPoints. Images will always be processed in `hi_res`. If `hi_res` is set for an unsupported document type, it will be processed and billed in `fast` mode.
   */
  mode?: UpdateDocumentFileParamsMode | undefined;
  /**
   * The binary file to upload, extract, and index for retrieval. The following file types are supported: Plain Text: `.eml` `.html` `.json` `.md` `.msg` `.rst` `.rtf` `.txt` `.xml`
   *
   * @remarks
   * Images: `.png` `.webp` `.jpg` `.jpeg` `.tiff` `.bmp` `.heic`
   * Documents: `.csv` `.doc` `.docx` `.epub` `.epub+zip` `.odt` `.pdf` `.ppt` `.pptx` `.tsv` `.xlsx` `.xls`.
   */
  file: UpdateDocumentFileParamsFile | Blob;
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
  mode: UpdateDocumentFileParamsMode$inboundSchema.default("fast"),
  file: z.lazy(() => UpdateDocumentFileParamsFile$inboundSchema),
});

/** @internal */
export type UpdateDocumentFileParams$Outbound = {
  mode: string;
  file: UpdateDocumentFileParamsFile$Outbound | Blob;
};

/** @internal */
export const UpdateDocumentFileParams$outboundSchema: z.ZodType<
  UpdateDocumentFileParams$Outbound,
  z.ZodTypeDef,
  UpdateDocumentFileParams
> = z.object({
  mode: UpdateDocumentFileParamsMode$outboundSchema.default("fast"),
  file: z.lazy(() => UpdateDocumentFileParamsFile$outboundSchema).or(
    blobLikeSchema,
  ),
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
