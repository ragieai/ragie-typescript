/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ModeStatic = {
  HiRes: "hi_res",
  Fast: "fast",
} as const;
export type ModeStatic = ClosedEnum<typeof ModeStatic>;

export const ModeVideo = {
  AudioOnly: "audio_only",
  VideoOnly: "video_only",
  AudioVideo: "audio_video",
} as const;
export type ModeVideo = ClosedEnum<typeof ModeVideo>;

export type Two = {
  static?: ModeStatic | null | undefined;
  audio?: boolean | null | undefined;
  video?: ModeVideo | null | undefined;
};

export type One2 = {};

export const One1 = {
  HiRes: "hi_res",
  Fast: "fast",
} as const;
export type One1 = ClosedEnum<typeof One1>;

export type One = One2 | One1;

/**
 * Partition strategy for the document. Different strategies exist for textual, audio and video file types and you can set the strategy you want for  each file type, or just for textual types.  For textual documents the options are `'hi_res'` or `'fast'`. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`. `hi_res` is only applicable for Word documents, PDFs, Images, and PowerPoints. Images will always be processed in `hi_res`. If `hi_res` is set for an unsupported document type, it will be processed and billed in `fast` mode.  For audio files, the options are true or false. True if you want to process audio, false otherwise.          For video files, the options are `'audio_only'`, `'video_only'`, `'audio_video'`. `'audio_only'` will extract just the audio part of the video. `'video_only'` will similarly just extract the video part, ignoring audio. `'audio_video'` will extract both audio and video.  To process all media types at the highest quality, use `'all'`.  When you specify audio or video stategies, the format must be a JSON object. In this case, textual documents are denoted by the key "static". If you omit a key, that document type won't be processd.  See examples below.  Examples  Textual documents only     "fast"  Video documents only {     "video": "audio_video" }  Specify multiple document types {     "static": "hi_res",     "audio": true,     "video": "video_only" }  Specify only textual or audio document types {     "static": "fast",     "audio": true }  Highest quality processing for all media types     "all"
 */
export type Mode = Two | One2 | One1;

export type Metadata = string | number | boolean | Array<string>;

export type FileT = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

export type CreateDocumentParams = {
  /**
   * Partition strategy for the document. Different strategies exist for textual, audio and video file types and you can set the strategy you want for  each file type, or just for textual types.  For textual documents the options are `'hi_res'` or `'fast'`. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`. `hi_res` is only applicable for Word documents, PDFs, Images, and PowerPoints. Images will always be processed in `hi_res`. If `hi_res` is set for an unsupported document type, it will be processed and billed in `fast` mode.  For audio files, the options are true or false. True if you want to process audio, false otherwise.          For video files, the options are `'audio_only'`, `'video_only'`, `'audio_video'`. `'audio_only'` will extract just the audio part of the video. `'video_only'` will similarly just extract the video part, ignoring audio. `'audio_video'` will extract both audio and video.  To process all media types at the highest quality, use `'all'`.  When you specify audio or video stategies, the format must be a JSON object. In this case, textual documents are denoted by the key "static". If you omit a key, that document type won't be processd.  See examples below.  Examples  Textual documents only     "fast"  Video documents only {     "video": "audio_video" }  Specify multiple document types {     "static": "hi_res",     "audio": true,     "video": "video_only" }  Specify only textual or audio document types {     "static": "fast",     "audio": true }  Highest quality processing for all media types     "all"
   */
  mode?: Two | One2 | One1 | undefined;
  /**
   * Metadata for the document. Keys must be strings. Values may be strings, numbers, booleans, or lists of strings. Numbers may be integers or floating point and will be converted to 64 bit floating point. 1000 total values are allowed. Each item in an array counts towards the total. The following keys are reserved for internal use: `document_id`, `document_type`, `document_source`, `document_name`, `document_uploaded_at`, `start_time`, `end_time`.
   */
  metadata?:
    | { [k: string]: string | number | boolean | Array<string> }
    | undefined;
  /**
   * The binary file to upload, extract, and index for retrieval. The following file types are supported: Plain Text: `.eml` `.html` `.json` `.md` `.msg` `.rst` `.rtf` `.txt` `.xml`
   *
   * @remarks
   * Images: `.png` `.webp` `.jpg` `.jpeg` `.tiff` `.bmp` `.heic`
   * Documents: `.csv` `.doc` `.docx` `.epub` `.epub+zip` `.odt` `.pdf` `.ppt` `.pptx` `.tsv` `.xlsx` `.xls`.
   */
  file: FileT | Blob;
  /**
   * An optional identifier for the document. A common value might be an id in an external system or the URL where the source file may be found.
   */
  externalId?: string | undefined;
  /**
   * An optional name for the document. If set, the document will have this name. Otherwise it will default to the file's name.
   */
  name?: string | undefined;
  /**
   * An optional partition identifier. Documents can be scoped to a partition. Partitions must be lowercase alphanumeric and may only include the special characters `_` and `-`.  A partition is created any time a document is created.
   */
  partition?: string | undefined;
};

/** @internal */
export const ModeStatic$inboundSchema: z.ZodNativeEnum<typeof ModeStatic> = z
  .nativeEnum(ModeStatic);

/** @internal */
export const ModeStatic$outboundSchema: z.ZodNativeEnum<typeof ModeStatic> =
  ModeStatic$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModeStatic$ {
  /** @deprecated use `ModeStatic$inboundSchema` instead. */
  export const inboundSchema = ModeStatic$inboundSchema;
  /** @deprecated use `ModeStatic$outboundSchema` instead. */
  export const outboundSchema = ModeStatic$outboundSchema;
}

/** @internal */
export const ModeVideo$inboundSchema: z.ZodNativeEnum<typeof ModeVideo> = z
  .nativeEnum(ModeVideo);

/** @internal */
export const ModeVideo$outboundSchema: z.ZodNativeEnum<typeof ModeVideo> =
  ModeVideo$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ModeVideo$ {
  /** @deprecated use `ModeVideo$inboundSchema` instead. */
  export const inboundSchema = ModeVideo$inboundSchema;
  /** @deprecated use `ModeVideo$outboundSchema` instead. */
  export const outboundSchema = ModeVideo$outboundSchema;
}

/** @internal */
export const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z
  .object({
    static: z.nullable(ModeStatic$inboundSchema).optional(),
    audio: z.nullable(z.boolean()).optional(),
    video: z.nullable(ModeVideo$inboundSchema).optional(),
  });

/** @internal */
export type Two$Outbound = {
  static?: string | null | undefined;
  audio?: boolean | null | undefined;
  video?: string | null | undefined;
};

/** @internal */
export const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two> = z
  .object({
    static: z.nullable(ModeStatic$outboundSchema).optional(),
    audio: z.nullable(z.boolean()).optional(),
    video: z.nullable(ModeVideo$outboundSchema).optional(),
  });

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
export const One2$inboundSchema: z.ZodType<One2, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type One2$Outbound = {};

/** @internal */
export const One2$outboundSchema: z.ZodType<One2$Outbound, z.ZodTypeDef, One2> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One2$ {
  /** @deprecated use `One2$inboundSchema` instead. */
  export const inboundSchema = One2$inboundSchema;
  /** @deprecated use `One2$outboundSchema` instead. */
  export const outboundSchema = One2$outboundSchema;
  /** @deprecated use `One2$Outbound` instead. */
  export type Outbound = One2$Outbound;
}

export function one2ToJSON(one2: One2): string {
  return JSON.stringify(One2$outboundSchema.parse(one2));
}

export function one2FromJSON(
  jsonString: string,
): SafeParseResult<One2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => One2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'One2' from JSON`,
  );
}

/** @internal */
export const One1$inboundSchema: z.ZodNativeEnum<typeof One1> = z.nativeEnum(
  One1,
);

/** @internal */
export const One1$outboundSchema: z.ZodNativeEnum<typeof One1> =
  One1$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One1$ {
  /** @deprecated use `One1$inboundSchema` instead. */
  export const inboundSchema = One1$inboundSchema;
  /** @deprecated use `One1$outboundSchema` instead. */
  export const outboundSchema = One1$outboundSchema;
}

/** @internal */
export const One$inboundSchema: z.ZodType<One, z.ZodTypeDef, unknown> = z.union(
  [z.lazy(() => One2$inboundSchema), One1$inboundSchema],
);

/** @internal */
export type One$Outbound = One2$Outbound | string;

/** @internal */
export const One$outboundSchema: z.ZodType<One$Outbound, z.ZodTypeDef, One> = z
  .union([z.lazy(() => One2$outboundSchema), One1$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One$ {
  /** @deprecated use `One$inboundSchema` instead. */
  export const inboundSchema = One$inboundSchema;
  /** @deprecated use `One$outboundSchema` instead. */
  export const outboundSchema = One$outboundSchema;
  /** @deprecated use `One$Outbound` instead. */
  export type Outbound = One$Outbound;
}

export function oneToJSON(one: One): string {
  return JSON.stringify(One$outboundSchema.parse(one));
}

export function oneFromJSON(
  jsonString: string,
): SafeParseResult<One, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => One$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'One' from JSON`,
  );
}

/** @internal */
export const Mode$inboundSchema: z.ZodType<Mode, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => Two$inboundSchema),
    z.union([z.lazy(() => One2$inboundSchema), One1$inboundSchema]),
  ]);

/** @internal */
export type Mode$Outbound = Two$Outbound | One2$Outbound | string;

/** @internal */
export const Mode$outboundSchema: z.ZodType<Mode$Outbound, z.ZodTypeDef, Mode> =
  z.union([
    z.lazy(() => Two$outboundSchema),
    z.union([z.lazy(() => One2$outboundSchema), One1$outboundSchema]),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Mode$ {
  /** @deprecated use `Mode$inboundSchema` instead. */
  export const inboundSchema = Mode$inboundSchema;
  /** @deprecated use `Mode$outboundSchema` instead. */
  export const outboundSchema = Mode$outboundSchema;
  /** @deprecated use `Mode$Outbound` instead. */
  export type Outbound = Mode$Outbound;
}

export function modeToJSON(mode: Mode): string {
  return JSON.stringify(Mode$outboundSchema.parse(mode));
}

export function modeFromJSON(
  jsonString: string,
): SafeParseResult<Mode, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Mode$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Mode' from JSON`,
  );
}

/** @internal */
export const Metadata$inboundSchema: z.ZodType<
  Metadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number(), z.boolean(), z.array(z.string())]);

/** @internal */
export type Metadata$Outbound = string | number | boolean | Array<string>;

/** @internal */
export const Metadata$outboundSchema: z.ZodType<
  Metadata$Outbound,
  z.ZodTypeDef,
  Metadata
> = z.union([z.string(), z.number(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Metadata$ {
  /** @deprecated use `Metadata$inboundSchema` instead. */
  export const inboundSchema = Metadata$inboundSchema;
  /** @deprecated use `Metadata$outboundSchema` instead. */
  export const outboundSchema = Metadata$outboundSchema;
  /** @deprecated use `Metadata$Outbound` instead. */
  export type Outbound = Metadata$Outbound;
}

export function metadataToJSON(metadata: Metadata): string {
  return JSON.stringify(Metadata$outboundSchema.parse(metadata));
}

export function metadataFromJSON(
  jsonString: string,
): SafeParseResult<Metadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Metadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Metadata' from JSON`,
  );
}

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    fileName: z.string(),
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
  });

/** @internal */
export type FileT$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
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
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

export function fileToJSON(fileT: FileT): string {
  return JSON.stringify(FileT$outboundSchema.parse(fileT));
}

export function fileFromJSON(
  jsonString: string,
): SafeParseResult<FileT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileT' from JSON`,
  );
}

/** @internal */
export const CreateDocumentParams$inboundSchema: z.ZodType<
  CreateDocumentParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  mode: z.union([
    z.lazy(() => Two$inboundSchema),
    z.union([z.lazy(() => One2$inboundSchema), One1$inboundSchema]),
  ]).optional(),
  metadata: z.record(
    z.union([z.string(), z.number(), z.boolean(), z.array(z.string())]),
  ).optional(),
  file: z.lazy(() => FileT$inboundSchema),
  external_id: z.string().optional(),
  name: z.string().optional(),
  partition: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
  });
});

/** @internal */
export type CreateDocumentParams$Outbound = {
  mode?: Two$Outbound | One2$Outbound | string | undefined;
  metadata?:
    | { [k: string]: string | number | boolean | Array<string> }
    | undefined;
  file: FileT$Outbound | Blob;
  external_id?: string | undefined;
  name?: string | undefined;
  partition?: string | undefined;
};

/** @internal */
export const CreateDocumentParams$outboundSchema: z.ZodType<
  CreateDocumentParams$Outbound,
  z.ZodTypeDef,
  CreateDocumentParams
> = z.object({
  mode: z.union([
    z.lazy(() => Two$outboundSchema),
    z.union([z.lazy(() => One2$outboundSchema), One1$outboundSchema]),
  ]).optional(),
  metadata: z.record(
    z.union([z.string(), z.number(), z.boolean(), z.array(z.string())]),
  ).optional(),
  file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema),
  externalId: z.string().optional(),
  name: z.string().optional(),
  partition: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDocumentParams$ {
  /** @deprecated use `CreateDocumentParams$inboundSchema` instead. */
  export const inboundSchema = CreateDocumentParams$inboundSchema;
  /** @deprecated use `CreateDocumentParams$outboundSchema` instead. */
  export const outboundSchema = CreateDocumentParams$outboundSchema;
  /** @deprecated use `CreateDocumentParams$Outbound` instead. */
  export type Outbound = CreateDocumentParams$Outbound;
}

export function createDocumentParamsToJSON(
  createDocumentParams: CreateDocumentParams,
): string {
  return JSON.stringify(
    CreateDocumentParams$outboundSchema.parse(createDocumentParams),
  );
}

export function createDocumentParamsFromJSON(
  jsonString: string,
): SafeParseResult<CreateDocumentParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDocumentParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDocumentParams' from JSON`,
  );
}
