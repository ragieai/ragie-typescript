/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ConnectionMetadata = string | number | boolean | Array<string>;

export type Connection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  metadata: { [k: string]: string | number | boolean | Array<string> };
  type: string;
  name: string;
  enabled: boolean;
  disabledBySystemReason?:
    | "connection_over_total_page_limit"
    | null
    | undefined;
  lastSyncedAt?: Date | null | undefined;
  syncing?: boolean | null | undefined;
  partition: string;
  disabledBySystem: boolean;
};

/** @internal */
export const ConnectionMetadata$inboundSchema: z.ZodType<
  ConnectionMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/** @internal */
export type ConnectionMetadata$Outbound =
  | string
  | number
  | boolean
  | Array<string>;

/** @internal */
export const ConnectionMetadata$outboundSchema: z.ZodType<
  ConnectionMetadata$Outbound,
  z.ZodTypeDef,
  ConnectionMetadata
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionMetadata$ {
  /** @deprecated use `ConnectionMetadata$inboundSchema` instead. */
  export const inboundSchema = ConnectionMetadata$inboundSchema;
  /** @deprecated use `ConnectionMetadata$outboundSchema` instead. */
  export const outboundSchema = ConnectionMetadata$outboundSchema;
  /** @deprecated use `ConnectionMetadata$Outbound` instead. */
  export type Outbound = ConnectionMetadata$Outbound;
}

export function connectionMetadataToJSON(
  connectionMetadata: ConnectionMetadata,
): string {
  return JSON.stringify(
    ConnectionMetadata$outboundSchema.parse(connectionMetadata),
  );
}

export function connectionMetadataFromJSON(
  jsonString: string,
): SafeParseResult<ConnectionMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectionMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectionMetadata' from JSON`,
  );
}

/** @internal */
export const Connection$inboundSchema: z.ZodType<
  Connection,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ),
  type: z.string(),
  name: z.string(),
  enabled: z.boolean(),
  disabled_by_system_reason: z.nullable(
    z.literal("connection_over_total_page_limit"),
  ).optional(),
  last_synced_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  syncing: z.nullable(z.boolean()).optional(),
  partition: z.string(),
  disabled_by_system: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "disabled_by_system_reason": "disabledBySystemReason",
    "last_synced_at": "lastSyncedAt",
    "disabled_by_system": "disabledBySystem",
  });
});

/** @internal */
export type Connection$Outbound = {
  id: string;
  created_at: string;
  updated_at: string;
  metadata: { [k: string]: string | number | boolean | Array<string> };
  type: string;
  name: string;
  enabled: boolean;
  disabled_by_system_reason: "connection_over_total_page_limit" | null;
  last_synced_at?: string | null | undefined;
  syncing?: boolean | null | undefined;
  partition: string;
  disabled_by_system: boolean;
};

/** @internal */
export const Connection$outboundSchema: z.ZodType<
  Connection$Outbound,
  z.ZodTypeDef,
  Connection
> = z.object({
  id: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]),
  ),
  type: z.string(),
  name: z.string(),
  enabled: z.boolean(),
  disabledBySystemReason: z.nullable(
    z.literal("connection_over_total_page_limit").default(
      "connection_over_total_page_limit" as const,
    ),
  ),
  lastSyncedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  syncing: z.nullable(z.boolean()).optional(),
  partition: z.string(),
  disabledBySystem: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    disabledBySystemReason: "disabled_by_system_reason",
    lastSyncedAt: "last_synced_at",
    disabledBySystem: "disabled_by_system",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Connection$ {
  /** @deprecated use `Connection$inboundSchema` instead. */
  export const inboundSchema = Connection$inboundSchema;
  /** @deprecated use `Connection$outboundSchema` instead. */
  export const outboundSchema = Connection$outboundSchema;
  /** @deprecated use `Connection$Outbound` instead. */
  export type Outbound = Connection$Outbound;
}

export function connectionToJSON(connection: Connection): string {
  return JSON.stringify(Connection$outboundSchema.parse(connection));
}

export function connectionFromJSON(
  jsonString: string,
): SafeParseResult<Connection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Connection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Connection' from JSON`,
  );
}
