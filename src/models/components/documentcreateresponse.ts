/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type DocumentCreateResponseMetadata = string | number | boolean | Array<string>;

export type DocumentCreateResponse = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    name: string;
    metadata: { [k: string]: string | number | boolean | Array<string> };
};

/** @internal */
export const DocumentCreateResponseMetadata$inboundSchema: z.ZodType<
    DocumentCreateResponseMetadata,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/** @internal */
export type DocumentCreateResponseMetadata$Outbound = string | number | boolean | Array<string>;

/** @internal */
export const DocumentCreateResponseMetadata$outboundSchema: z.ZodType<
    DocumentCreateResponseMetadata$Outbound,
    z.ZodTypeDef,
    DocumentCreateResponseMetadata
> = z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentCreateResponseMetadata$ {
    /** @deprecated use `DocumentCreateResponseMetadata$inboundSchema` instead. */
    export const inboundSchema = DocumentCreateResponseMetadata$inboundSchema;
    /** @deprecated use `DocumentCreateResponseMetadata$outboundSchema` instead. */
    export const outboundSchema = DocumentCreateResponseMetadata$outboundSchema;
    /** @deprecated use `DocumentCreateResponseMetadata$Outbound` instead. */
    export type Outbound = DocumentCreateResponseMetadata$Outbound;
}

/** @internal */
export const DocumentCreateResponse$inboundSchema: z.ZodType<
    DocumentCreateResponse,
    z.ZodTypeDef,
    unknown
> = z
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
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type DocumentCreateResponse$Outbound = {
    id: string;
    created_at: string;
    updated_at: string;
    status: string;
    name: string;
    metadata: { [k: string]: string | number | boolean | Array<string> };
};

/** @internal */
export const DocumentCreateResponse$outboundSchema: z.ZodType<
    DocumentCreateResponse$Outbound,
    z.ZodTypeDef,
    DocumentCreateResponse
> = z
    .object({
        id: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        updatedAt: z.date().transform((v) => v.toISOString()),
        status: z.string(),
        name: z.string(),
        metadata: z.record(
            z.union([z.string(), z.number().int(), z.boolean(), z.array(z.string())])
        ),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentCreateResponse$ {
    /** @deprecated use `DocumentCreateResponse$inboundSchema` instead. */
    export const inboundSchema = DocumentCreateResponse$inboundSchema;
    /** @deprecated use `DocumentCreateResponse$outboundSchema` instead. */
    export const outboundSchema = DocumentCreateResponse$outboundSchema;
    /** @deprecated use `DocumentCreateResponse$Outbound` instead. */
    export type Outbound = DocumentCreateResponse$Outbound;
}