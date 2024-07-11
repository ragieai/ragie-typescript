/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The scope of the instruction. Determines whether the instruction is applied to the entire document or to each chunk of the document. Options are `'document'` or `'chunk'`. Generally `'document'` should be used when analyzing the full document is desired, such as when generating a summary or determining sentiment, and `'chunk'` should be used when a fine grained search over a document is desired.
 */
export const Scope = {
    Document: "document",
    Chunk: "chunk",
} as const;
/**
 * The scope of the instruction. Determines whether the instruction is applied to the entire document or to each chunk of the document. Options are `'document'` or `'chunk'`. Generally `'document'` should be used when analyzing the full document is desired, such as when generating a summary or determining sentiment, and `'chunk'` should be used when a fine grained search over a document is desired.
 */
export type Scope = ClosedEnum<typeof Scope>;

/**
 * The JSON schema definition of the entity generated by an instruction. The schema must define an `object` at its root. If the instruction is expected to generate multiple items, the root object should have a key which defines an array of the expected items. An instruction which generates multiple emails may be expressed as `{"type": "object", "properties": {"emails": { "type": "array", "items": { "type": "string"}}}}`. Simple values may be expressed as an object with a single key. For example, a summary instruction may generate a single string value. The schema might be `{"type": "object", "properties": { "summary": { "type": "string"}}}`.
 */
export type EntitySchema = {};

export type InstructionCreateRequest = {
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
    scope?: Scope | undefined;
    /**
     * A natural language instruction which will be applied to documents as they are created and updated. The results of the `instruction_prompt` will be stored as an `entity` in the schema defined by the `entity_schema` parameter.
     */
    prompt: string;
    /**
     * The JSON schema definition of the entity generated by an instruction. The schema must define an `object` at its root. If the instruction is expected to generate multiple items, the root object should have a key which defines an array of the expected items. An instruction which generates multiple emails may be expressed as `{"type": "object", "properties": {"emails": { "type": "array", "items": { "type": "string"}}}}`. Simple values may be expressed as an object with a single key. For example, a summary instruction may generate a single string value. The schema might be `{"type": "object", "properties": { "summary": { "type": "string"}}}`.
     */
    entitySchema: EntitySchema;
};

/** @internal */
export const Scope$inboundSchema: z.ZodNativeEnum<typeof Scope> = z.nativeEnum(Scope);

/** @internal */
export const Scope$outboundSchema: z.ZodNativeEnum<typeof Scope> = Scope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scope$ {
    /** @deprecated use `Scope$inboundSchema` instead. */
    export const inboundSchema = Scope$inboundSchema;
    /** @deprecated use `Scope$outboundSchema` instead. */
    export const outboundSchema = Scope$outboundSchema;
}

/** @internal */
export const EntitySchema$inboundSchema: z.ZodType<EntitySchema, z.ZodTypeDef, unknown> = z.object(
    {}
);

/** @internal */
export type EntitySchema$Outbound = {};

/** @internal */
export const EntitySchema$outboundSchema: z.ZodType<
    EntitySchema$Outbound,
    z.ZodTypeDef,
    EntitySchema
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitySchema$ {
    /** @deprecated use `EntitySchema$inboundSchema` instead. */
    export const inboundSchema = EntitySchema$inboundSchema;
    /** @deprecated use `EntitySchema$outboundSchema` instead. */
    export const outboundSchema = EntitySchema$outboundSchema;
    /** @deprecated use `EntitySchema$Outbound` instead. */
    export type Outbound = EntitySchema$Outbound;
}

/** @internal */
export const InstructionCreateRequest$inboundSchema: z.ZodType<
    InstructionCreateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        active: z.boolean().default(true),
        scope: Scope$inboundSchema.default("chunk"),
        prompt: z.string(),
        entity_schema: z.lazy(() => EntitySchema$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            entity_schema: "entitySchema",
        });
    });

/** @internal */
export type InstructionCreateRequest$Outbound = {
    name: string;
    active: boolean;
    scope: string;
    prompt: string;
    entity_schema: EntitySchema$Outbound;
};

/** @internal */
export const InstructionCreateRequest$outboundSchema: z.ZodType<
    InstructionCreateRequest$Outbound,
    z.ZodTypeDef,
    InstructionCreateRequest
> = z
    .object({
        name: z.string(),
        active: z.boolean().default(true),
        scope: Scope$outboundSchema.default("chunk"),
        prompt: z.string(),
        entitySchema: z.lazy(() => EntitySchema$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            entitySchema: "entity_schema",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InstructionCreateRequest$ {
    /** @deprecated use `InstructionCreateRequest$inboundSchema` instead. */
    export const inboundSchema = InstructionCreateRequest$inboundSchema;
    /** @deprecated use `InstructionCreateRequest$outboundSchema` instead. */
    export const outboundSchema = InstructionCreateRequest$outboundSchema;
    /** @deprecated use `InstructionCreateRequest$Outbound` instead. */
    export type Outbound = InstructionCreateRequest$Outbound;
}
