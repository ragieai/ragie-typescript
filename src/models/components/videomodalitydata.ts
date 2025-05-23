/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WordTimestamp,
  WordTimestamp$inboundSchema,
  WordTimestamp$Outbound,
  WordTimestamp$outboundSchema,
} from "./wordtimestamp.js";

export type VideoModalityData = {
  type?: "video" | undefined;
  wordTimestamps?: Array<WordTimestamp> | undefined;
};

/** @internal */
export const VideoModalityData$inboundSchema: z.ZodType<
  VideoModalityData,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("video").default("video"),
  word_timestamps: z.array(WordTimestamp$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "word_timestamps": "wordTimestamps",
  });
});

/** @internal */
export type VideoModalityData$Outbound = {
  type: "video";
  word_timestamps?: Array<WordTimestamp$Outbound> | undefined;
};

/** @internal */
export const VideoModalityData$outboundSchema: z.ZodType<
  VideoModalityData$Outbound,
  z.ZodTypeDef,
  VideoModalityData
> = z.object({
  type: z.literal("video").default("video" as const),
  wordTimestamps: z.array(WordTimestamp$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    wordTimestamps: "word_timestamps",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VideoModalityData$ {
  /** @deprecated use `VideoModalityData$inboundSchema` instead. */
  export const inboundSchema = VideoModalityData$inboundSchema;
  /** @deprecated use `VideoModalityData$outboundSchema` instead. */
  export const outboundSchema = VideoModalityData$outboundSchema;
  /** @deprecated use `VideoModalityData$Outbound` instead. */
  export type Outbound = VideoModalityData$Outbound;
}

export function videoModalityDataToJSON(
  videoModalityData: VideoModalityData,
): string {
  return JSON.stringify(
    VideoModalityData$outboundSchema.parse(videoModalityData),
  );
}

export function videoModalityDataFromJSON(
  jsonString: string,
): SafeParseResult<VideoModalityData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VideoModalityData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VideoModalityData' from JSON`,
  );
}
