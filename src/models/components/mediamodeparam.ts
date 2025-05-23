/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Static = {
  HiRes: "hi_res",
  Fast: "fast",
} as const;
export type Static = ClosedEnum<typeof Static>;

export const Video = {
  AudioOnly: "audio_only",
  VideoOnly: "video_only",
  AudioVideo: "audio_video",
} as const;
export type Video = ClosedEnum<typeof Video>;

export type MediaModeParam = {
  static?: Static | null | undefined;
  audio?: boolean | null | undefined;
  video?: Video | null | undefined;
};

/** @internal */
export const Static$inboundSchema: z.ZodNativeEnum<typeof Static> = z
  .nativeEnum(Static);

/** @internal */
export const Static$outboundSchema: z.ZodNativeEnum<typeof Static> =
  Static$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Static$ {
  /** @deprecated use `Static$inboundSchema` instead. */
  export const inboundSchema = Static$inboundSchema;
  /** @deprecated use `Static$outboundSchema` instead. */
  export const outboundSchema = Static$outboundSchema;
}

/** @internal */
export const Video$inboundSchema: z.ZodNativeEnum<typeof Video> = z.nativeEnum(
  Video,
);

/** @internal */
export const Video$outboundSchema: z.ZodNativeEnum<typeof Video> =
  Video$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Video$ {
  /** @deprecated use `Video$inboundSchema` instead. */
  export const inboundSchema = Video$inboundSchema;
  /** @deprecated use `Video$outboundSchema` instead. */
  export const outboundSchema = Video$outboundSchema;
}

/** @internal */
export const MediaModeParam$inboundSchema: z.ZodType<
  MediaModeParam,
  z.ZodTypeDef,
  unknown
> = z.object({
  static: z.nullable(Static$inboundSchema).optional(),
  audio: z.nullable(z.boolean()).optional(),
  video: z.nullable(Video$inboundSchema).optional(),
});

/** @internal */
export type MediaModeParam$Outbound = {
  static?: string | null | undefined;
  audio?: boolean | null | undefined;
  video?: string | null | undefined;
};

/** @internal */
export const MediaModeParam$outboundSchema: z.ZodType<
  MediaModeParam$Outbound,
  z.ZodTypeDef,
  MediaModeParam
> = z.object({
  static: z.nullable(Static$outboundSchema).optional(),
  audio: z.nullable(z.boolean()).optional(),
  video: z.nullable(Video$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaModeParam$ {
  /** @deprecated use `MediaModeParam$inboundSchema` instead. */
  export const inboundSchema = MediaModeParam$inboundSchema;
  /** @deprecated use `MediaModeParam$outboundSchema` instead. */
  export const outboundSchema = MediaModeParam$outboundSchema;
  /** @deprecated use `MediaModeParam$Outbound` instead. */
  export type Outbound = MediaModeParam$Outbound;
}

export function mediaModeParamToJSON(mediaModeParam: MediaModeParam): string {
  return JSON.stringify(MediaModeParam$outboundSchema.parse(mediaModeParam));
}

export function mediaModeParamFromJSON(
  jsonString: string,
): SafeParseResult<MediaModeParam, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaModeParam$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaModeParam' from JSON`,
  );
}
