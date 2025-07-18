/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SharepointSiteData = {
  id: string;
  name: string;
};

/** @internal */
export const SharepointSiteData$inboundSchema: z.ZodType<
  SharepointSiteData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type SharepointSiteData$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const SharepointSiteData$outboundSchema: z.ZodType<
  SharepointSiteData$Outbound,
  z.ZodTypeDef,
  SharepointSiteData
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SharepointSiteData$ {
  /** @deprecated use `SharepointSiteData$inboundSchema` instead. */
  export const inboundSchema = SharepointSiteData$inboundSchema;
  /** @deprecated use `SharepointSiteData$outboundSchema` instead. */
  export const outboundSchema = SharepointSiteData$outboundSchema;
  /** @deprecated use `SharepointSiteData$Outbound` instead. */
  export type Outbound = SharepointSiteData$Outbound;
}

export function sharepointSiteDataToJSON(
  sharepointSiteData: SharepointSiteData,
): string {
  return JSON.stringify(
    SharepointSiteData$outboundSchema.parse(sharepointSiteData),
  );
}

export function sharepointSiteDataFromJSON(
  jsonString: string,
): SafeParseResult<SharepointSiteData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SharepointSiteData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SharepointSiteData' from JSON`,
  );
}
