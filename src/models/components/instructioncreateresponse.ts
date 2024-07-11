/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The scope of the instruction. Determines whether the instruction is applied to the entire document or to each chunk of the document. Options are `'document'` or `'chunk'`. Generally `'document'` should be used when analyzing the full document is desired, such as when generating a summary or determining sentiment, and `'chunk'` should be used when a fine grained search over a document is desired.
 */
export const InstructionCreateResponseScope = {
    Document: "document",
    Chunk: "chunk",
} as const;
/**
 * The scope of the instruction. Determines whether the instruction is applied to the entire document or to each chunk of the document. Options are `'document'` or `'chunk'`. Generally `'document'` should be used when analyzing the full document is desired, such as when generating a summary or determining sentiment, and `'chunk'` should be used when a fine grained search over a document is desired.
 */
export type InstructionCreateResponseScope = ClosedEnum<typeof InstructionCreateResponseScope>;

/**
 * The JSON schema definition of the entity generated by an instruction. The schema must define an `object` at its root. If the instruction is expected to generate multiple items, the root object should have a key which defines an array of the expected items. An instruction which generates multiple emails may be expressed as `{"type": "object", "properties": {"emails": { "type": "array", "items": { "type": "string"}}}}`. Simple values may be expressed as an object with a single key. For example, a summary instruction may generate a single string value. The schema might be `{"type": "object", "properties": { "summary": { "type": "string"}}}`.
 */
export type InstructionCreateResponseEntitySchema = {};

export type InstructionCreateResponse = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    /**
     * The name of the instruction. Must be unique.
     */
    name: string;
    /**
     * Whether the instruction is active. Active instructions are applied to documents when they're created or when their file is updated.
     */
    active?: boolean | undefined;
    /**
     * The scope of the instruction. Determines whether the instruction is applied to the entire document or to each chunk of the document. Options are `'document'` or `'chunk'`. Generally `'document'` should be used when analyzing the full document is desired, such as when generating a summary or determining sentiment, and `'chunk'` should be used when a fine grained search over a document is desired.
     */
    scope?: InstructionCreateResponseScope | undefined;
    /**
     * A natural language instruction which will be applied to documents as they are created and updated. The results of the `instruction_prompt` will be stored as an `entity` in the schema defined by the `entity_schema` parameter.
     */
    prompt: string;
    /**
     * The JSON schema definition of the entity generated by an instruction. The schema must define an `object` at its root. If the instruction is expected to generate multiple items, the root object should have a key which defines an array of the expected items. An instruction which generates multiple emails may be expressed as `{"type": "object", "properties": {"emails": { "type": "array", "items": { "type": "string"}}}}`. Simple values may be expressed as an object with a single key. For example, a summary instruction may generate a single string value. The schema might be `{"type": "object", "properties": { "summary": { "type": "string"}}}`.
     */
    entitySchema: InstructionCreateResponseEntitySchema;
};

/** @internal */
export const InstructionCreateResponseScope$inboundSchema: z.ZodNativeEnum<
    typeof InstructionCreateResponseScope
> = z.nativeEnum(InstructionCreateResponseScope);

/** @internal */
export const InstructionCreateResponseScope$outboundSchema: z.ZodNativeEnum<
    typeof InstructionCreateResponseScope
> = InstructionCreateResponseScope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstructionCreateResponseScope$ {
    /** @deprecated use `InstructionCreateResponseScope$inboundSchema` instead. */
    export const inboundSchema = InstructionCreateResponseScope$inboundSchema;
    /** @deprecated use `InstructionCreateResponseScope$outboundSchema` instead. */
    export const outboundSchema = InstructionCreateResponseScope$outboundSchema;
}

/** @internal */
export const InstructionCreateResponseEntitySchema$inboundSchema: z.ZodType<
    InstructionCreateResponseEntitySchema,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type InstructionCreateResponseEntitySchema$Outbound = {};

/** @internal */
export const InstructionCreateResponseEntitySchema$outboundSchema: z.ZodType<
    InstructionCreateResponseEntitySchema$Outbound,
    z.ZodTypeDef,
    InstructionCreateResponseEntitySchema
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstructionCreateResponseEntitySchema$ {
    /** @deprecated use `InstructionCreateResponseEntitySchema$inboundSchema` instead. */
    export const inboundSchema = InstructionCreateResponseEntitySchema$inboundSchema;
    /** @deprecated use `InstructionCreateResponseEntitySchema$outboundSchema` instead. */
    export const outboundSchema = InstructionCreateResponseEntitySchema$outboundSchema;
    /** @deprecated use `InstructionCreateResponseEntitySchema$Outbound` instead. */
    export type Outbound = InstructionCreateResponseEntitySchema$Outbound;
}

/** @internal */
export const InstructionCreateResponse$inboundSchema: z.ZodType<
    InstructionCreateResponse,
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
        name: z.string(),
        active: z.boolean().default(true),
        scope: InstructionCreateResponseScope$inboundSchema.default("chunk"),
        prompt: z.string(),
        entity_schema: z.lazy(() => InstructionCreateResponseEntitySchema$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            updated_at: "updatedAt",
            entity_schema: "entitySchema",
        });
    });

/** @internal */
export type InstructionCreateResponse$Outbound = {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    active: boolean;
    scope: string;
    prompt: string;
    entity_schema: InstructionCreateResponseEntitySchema$Outbound;
};

/** @internal */
export const InstructionCreateResponse$outboundSchema: z.ZodType<
    InstructionCreateResponse$Outbound,
    z.ZodTypeDef,
    InstructionCreateResponse
> = z
    .object({
        id: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        updatedAt: z.date().transform((v) => v.toISOString()),
        name: z.string(),
        active: z.boolean().default(true),
        scope: InstructionCreateResponseScope$outboundSchema.default("chunk"),
        prompt: z.string(),
        entitySchema: z.lazy(() => InstructionCreateResponseEntitySchema$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            updatedAt: "updated_at",
            entitySchema: "entity_schema",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstructionCreateResponse$ {
    /** @deprecated use `InstructionCreateResponse$inboundSchema` instead. */
    export const inboundSchema = InstructionCreateResponse$inboundSchema;
    /** @deprecated use `InstructionCreateResponse$outboundSchema` instead. */
    export const outboundSchema = InstructionCreateResponse$outboundSchema;
    /** @deprecated use `InstructionCreateResponse$Outbound` instead. */
    export type Outbound = InstructionCreateResponse$Outbound;
}
