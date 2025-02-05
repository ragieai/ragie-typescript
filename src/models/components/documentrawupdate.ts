/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DocumentRawUpdate = {
  status: string;
};

/** @internal */
export const DocumentRawUpdate$inboundSchema: z.ZodType<
  DocumentRawUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.string(),
});

/** @internal */
export type DocumentRawUpdate$Outbound = {
  status: string;
};

/** @internal */
export const DocumentRawUpdate$outboundSchema: z.ZodType<
  DocumentRawUpdate$Outbound,
  z.ZodTypeDef,
  DocumentRawUpdate
> = z.object({
  status: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentRawUpdate$ {
  /** @deprecated use `DocumentRawUpdate$inboundSchema` instead. */
  export const inboundSchema = DocumentRawUpdate$inboundSchema;
  /** @deprecated use `DocumentRawUpdate$outboundSchema` instead. */
  export const outboundSchema = DocumentRawUpdate$outboundSchema;
  /** @deprecated use `DocumentRawUpdate$Outbound` instead. */
  export type Outbound = DocumentRawUpdate$Outbound;
}

export function documentRawUpdateToJSON(
  documentRawUpdate: DocumentRawUpdate,
): string {
  return JSON.stringify(
    DocumentRawUpdate$outboundSchema.parse(documentRawUpdate),
  );
}

export function documentRawUpdateFromJSON(
  jsonString: string,
): SafeParseResult<DocumentRawUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentRawUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentRawUpdate' from JSON`,
  );
}
