/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DocumentUrlUpdate = {
  status: string;
};

/** @internal */
export const DocumentUrlUpdate$inboundSchema: z.ZodType<
  DocumentUrlUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.string(),
});

/** @internal */
export type DocumentUrlUpdate$Outbound = {
  status: string;
};

/** @internal */
export const DocumentUrlUpdate$outboundSchema: z.ZodType<
  DocumentUrlUpdate$Outbound,
  z.ZodTypeDef,
  DocumentUrlUpdate
> = z.object({
  status: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentUrlUpdate$ {
  /** @deprecated use `DocumentUrlUpdate$inboundSchema` instead. */
  export const inboundSchema = DocumentUrlUpdate$inboundSchema;
  /** @deprecated use `DocumentUrlUpdate$outboundSchema` instead. */
  export const outboundSchema = DocumentUrlUpdate$outboundSchema;
  /** @deprecated use `DocumentUrlUpdate$Outbound` instead. */
  export type Outbound = DocumentUrlUpdate$Outbound;
}

export function documentUrlUpdateToJSON(
  documentUrlUpdate: DocumentUrlUpdate,
): string {
  return JSON.stringify(
    DocumentUrlUpdate$outboundSchema.parse(documentUrlUpdate),
  );
}

export function documentUrlUpdateFromJSON(
  jsonString: string,
): SafeParseResult<DocumentUrlUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentUrlUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentUrlUpdate' from JSON`,
  );
}
