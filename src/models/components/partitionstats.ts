/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PartitionStats = {
  pagesProcessedMonthly: number;
  pagesHostedMonthly: number;
  pagesProcessedTotal: number;
  pagesHostedTotal: number;
  documentCount: number;
};

/** @internal */
export const PartitionStats$inboundSchema: z.ZodType<
  PartitionStats,
  z.ZodTypeDef,
  unknown
> = z.object({
  pages_processed_monthly: z.number(),
  pages_hosted_monthly: z.number(),
  pages_processed_total: z.number(),
  pages_hosted_total: z.number(),
  document_count: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "pages_processed_monthly": "pagesProcessedMonthly",
    "pages_hosted_monthly": "pagesHostedMonthly",
    "pages_processed_total": "pagesProcessedTotal",
    "pages_hosted_total": "pagesHostedTotal",
    "document_count": "documentCount",
  });
});

/** @internal */
export type PartitionStats$Outbound = {
  pages_processed_monthly: number;
  pages_hosted_monthly: number;
  pages_processed_total: number;
  pages_hosted_total: number;
  document_count: number;
};

/** @internal */
export const PartitionStats$outboundSchema: z.ZodType<
  PartitionStats$Outbound,
  z.ZodTypeDef,
  PartitionStats
> = z.object({
  pagesProcessedMonthly: z.number(),
  pagesHostedMonthly: z.number(),
  pagesProcessedTotal: z.number(),
  pagesHostedTotal: z.number(),
  documentCount: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    pagesProcessedMonthly: "pages_processed_monthly",
    pagesHostedMonthly: "pages_hosted_monthly",
    pagesProcessedTotal: "pages_processed_total",
    pagesHostedTotal: "pages_hosted_total",
    documentCount: "document_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartitionStats$ {
  /** @deprecated use `PartitionStats$inboundSchema` instead. */
  export const inboundSchema = PartitionStats$inboundSchema;
  /** @deprecated use `PartitionStats$outboundSchema` instead. */
  export const outboundSchema = PartitionStats$outboundSchema;
  /** @deprecated use `PartitionStats$Outbound` instead. */
  export type Outbound = PartitionStats$Outbound;
}

export function partitionStatsToJSON(partitionStats: PartitionStats): string {
  return JSON.stringify(PartitionStats$outboundSchema.parse(partitionStats));
}

export function partitionStatsFromJSON(
  jsonString: string,
): SafeParseResult<PartitionStats, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PartitionStats$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PartitionStats' from JSON`,
  );
}
