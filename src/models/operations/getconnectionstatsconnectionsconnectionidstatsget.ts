/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetConnectionStatsConnectionsConnectionIdStatsGetRequest = {
  connectionId: string;
};

/** @internal */
export const GetConnectionStatsConnectionsConnectionIdStatsGetRequest$inboundSchema:
  z.ZodType<
    GetConnectionStatsConnectionsConnectionIdStatsGetRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    connection_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "connection_id": "connectionId",
    });
  });

/** @internal */
export type GetConnectionStatsConnectionsConnectionIdStatsGetRequest$Outbound =
  {
    connection_id: string;
  };

/** @internal */
export const GetConnectionStatsConnectionsConnectionIdStatsGetRequest$outboundSchema:
  z.ZodType<
    GetConnectionStatsConnectionsConnectionIdStatsGetRequest$Outbound,
    z.ZodTypeDef,
    GetConnectionStatsConnectionsConnectionIdStatsGetRequest
  > = z.object({
    connectionId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      connectionId: "connection_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionStatsConnectionsConnectionIdStatsGetRequest$ {
  /** @deprecated use `GetConnectionStatsConnectionsConnectionIdStatsGetRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetConnectionStatsConnectionsConnectionIdStatsGetRequest$inboundSchema;
  /** @deprecated use `GetConnectionStatsConnectionsConnectionIdStatsGetRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetConnectionStatsConnectionsConnectionIdStatsGetRequest$outboundSchema;
  /** @deprecated use `GetConnectionStatsConnectionsConnectionIdStatsGetRequest$Outbound` instead. */
  export type Outbound =
    GetConnectionStatsConnectionsConnectionIdStatsGetRequest$Outbound;
}

export function getConnectionStatsConnectionsConnectionIdStatsGetRequestToJSON(
  getConnectionStatsConnectionsConnectionIdStatsGetRequest:
    GetConnectionStatsConnectionsConnectionIdStatsGetRequest,
): string {
  return JSON.stringify(
    GetConnectionStatsConnectionsConnectionIdStatsGetRequest$outboundSchema
      .parse(getConnectionStatsConnectionsConnectionIdStatsGetRequest),
  );
}

export function getConnectionStatsConnectionsConnectionIdStatsGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetConnectionStatsConnectionsConnectionIdStatsGetRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetConnectionStatsConnectionsConnectionIdStatsGetRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionStatsConnectionsConnectionIdStatsGetRequest' from JSON`,
  );
}
