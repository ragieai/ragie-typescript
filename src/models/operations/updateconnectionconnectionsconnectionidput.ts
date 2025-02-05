/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateConnectionConnectionsConnectionIdPutRequest = {
  connectionId: string;
  connectionBase: components.ConnectionBase;
};

/** @internal */
export const UpdateConnectionConnectionsConnectionIdPutRequest$inboundSchema:
  z.ZodType<
    UpdateConnectionConnectionsConnectionIdPutRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    connection_id: z.string(),
    ConnectionBase: components.ConnectionBase$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "connection_id": "connectionId",
      "ConnectionBase": "connectionBase",
    });
  });

/** @internal */
export type UpdateConnectionConnectionsConnectionIdPutRequest$Outbound = {
  connection_id: string;
  ConnectionBase: components.ConnectionBase$Outbound;
};

/** @internal */
export const UpdateConnectionConnectionsConnectionIdPutRequest$outboundSchema:
  z.ZodType<
    UpdateConnectionConnectionsConnectionIdPutRequest$Outbound,
    z.ZodTypeDef,
    UpdateConnectionConnectionsConnectionIdPutRequest
  > = z.object({
    connectionId: z.string(),
    connectionBase: components.ConnectionBase$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      connectionId: "connection_id",
      connectionBase: "ConnectionBase",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateConnectionConnectionsConnectionIdPutRequest$ {
  /** @deprecated use `UpdateConnectionConnectionsConnectionIdPutRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateConnectionConnectionsConnectionIdPutRequest$inboundSchema;
  /** @deprecated use `UpdateConnectionConnectionsConnectionIdPutRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateConnectionConnectionsConnectionIdPutRequest$outboundSchema;
  /** @deprecated use `UpdateConnectionConnectionsConnectionIdPutRequest$Outbound` instead. */
  export type Outbound =
    UpdateConnectionConnectionsConnectionIdPutRequest$Outbound;
}

export function updateConnectionConnectionsConnectionIdPutRequestToJSON(
  updateConnectionConnectionsConnectionIdPutRequest:
    UpdateConnectionConnectionsConnectionIdPutRequest,
): string {
  return JSON.stringify(
    UpdateConnectionConnectionsConnectionIdPutRequest$outboundSchema.parse(
      updateConnectionConnectionsConnectionIdPutRequest,
    ),
  );
}

export function updateConnectionConnectionsConnectionIdPutRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  UpdateConnectionConnectionsConnectionIdPutRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateConnectionConnectionsConnectionIdPutRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UpdateConnectionConnectionsConnectionIdPutRequest' from JSON`,
  );
}
