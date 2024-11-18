/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Entity,
  Entity$inboundSchema,
  Entity$Outbound,
  Entity$outboundSchema,
} from "./entity.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";

export type EntityList = {
  pagination: Pagination;
  entities: Array<Entity>;
};

/** @internal */
export const EntityList$inboundSchema: z.ZodType<
  EntityList,
  z.ZodTypeDef,
  unknown
> = z.object({
  pagination: Pagination$inboundSchema,
  entities: z.array(Entity$inboundSchema),
});

/** @internal */
export type EntityList$Outbound = {
  pagination: Pagination$Outbound;
  entities: Array<Entity$Outbound>;
};

/** @internal */
export const EntityList$outboundSchema: z.ZodType<
  EntityList$Outbound,
  z.ZodTypeDef,
  EntityList
> = z.object({
  pagination: Pagination$outboundSchema,
  entities: z.array(Entity$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityList$ {
  /** @deprecated use `EntityList$inboundSchema` instead. */
  export const inboundSchema = EntityList$inboundSchema;
  /** @deprecated use `EntityList$outboundSchema` instead. */
  export const outboundSchema = EntityList$outboundSchema;
  /** @deprecated use `EntityList$Outbound` instead. */
  export type Outbound = EntityList$Outbound;
}

export function entityListToJSON(entityList: EntityList): string {
  return JSON.stringify(EntityList$outboundSchema.parse(entityList));
}

export function entityListFromJSON(
  jsonString: string,
): SafeParseResult<EntityList, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EntityList$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EntityList' from JSON`,
  );
}
