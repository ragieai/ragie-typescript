/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { Entity, Entity$inboundSchema, Entity$Outbound, Entity$outboundSchema } from "./entity.js";
import {
    Pagination,
    Pagination$inboundSchema,
    Pagination$Outbound,
    Pagination$outboundSchema,
} from "./pagination.js";
import * as z from "zod";

export type EntityList = {
    pagination: Pagination;
    entities: Array<Entity>;
};

/** @internal */
export const EntityList$inboundSchema: z.ZodType<EntityList, z.ZodTypeDef, unknown> = z.object({
    pagination: Pagination$inboundSchema,
    entities: z.array(Entity$inboundSchema),
});

/** @internal */
export type EntityList$Outbound = {
    pagination: Pagination$Outbound;
    entities: Array<Entity$Outbound>;
};

/** @internal */
export const EntityList$outboundSchema: z.ZodType<EntityList$Outbound, z.ZodTypeDef, EntityList> =
    z.object({
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
