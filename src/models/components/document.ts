/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type Metadata = string | number | boolean | Array<string>;

export type Document = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    name: string;
    metadata: { [k: string]: string | number | boolean | Array<string> };
    chunkCount?: number | null | undefined;
    externalId?: string | null | undefined;
};

/** @internal */
export const Metadata$inboundSchema: z.ZodType<Metadata, z.ZodTypeDef, unknown> = z.union([
    z.string(),
    z.number().int(),
    z.boolean(),
    z.array(z.string()),
]);

/** @internal */
export type Metadata$Outbound = string | number | boolean | Array<string>;

/** @internal */
export const Metadata$outboundSchema: z.ZodType<Metadata$Outbound, z.ZodTypeDef, Metadata> =
    z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Metadata$ {
    /** @deprecated use `Metadata$inboundSchema` instead. */
    export const inboundSchema = Metadata$inboundSchema;
    /** @deprecated use `Metadata$outboundSchema` instead. */
    export const outboundSchema = Metadata$outboundSchema;
    /** @deprecated use `Metadata$Outbound` instead. */
    export type Outbound = Metadata$Outbound;
}

/** @internal */
export const Document$inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown> = z
    .object({
        id: z.string(),
        created_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        updated_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        status: z.string(),
        name: z.string(),
        metadata: z.record(
            z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())])
        ),
        chunk_count: z.nullable(z.number().int()).optional(),
        external_id: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            updated_at: "updatedAt",
            chunk_count: "chunkCount",
            external_id: "externalId",
        });
    });

/** @internal */
export type Document$Outbound = {
    id: string;
    created_at: string;
    updated_at: string;
    status: string;
    name: string;
    metadata: { [k: string]: string | number | boolean | Array<string> };
    chunk_count?: number | null | undefined;
    external_id?: string | null | undefined;
};

/** @internal */
export const Document$outboundSchema: z.ZodType<Document$Outbound, z.ZodTypeDef, Document> = z
    .object({
        id: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        updatedAt: z.date().transform((v) => v.toISOString()),
        status: z.string(),
        name: z.string(),
        metadata: z.record(
            z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())])
        ),
        chunkCount: z.nullable(z.number().int()).optional(),
        externalId: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            updatedAt: "updated_at",
            chunkCount: "chunk_count",
            externalId: "external_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Document$ {
    /** @deprecated use `Document$inboundSchema` instead. */
    export const inboundSchema = Document$inboundSchema;
    /** @deprecated use `Document$outboundSchema` instead. */
    export const outboundSchema = Document$outboundSchema;
    /** @deprecated use `Document$Outbound` instead. */
    export type Outbound = Document$Outbound;
}
