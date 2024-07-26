/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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

export type Instruction = {
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
    scope?: Scope | undefined;
    /**
     * A natural language instruction which will be applied to documents as they are created and updated. The results of the `instruction_prompt` will be stored as an `entity` in the schema defined by the `entity_schema` parameter.
     */
    prompt: string;
    /**
     * The JSON schema definition of the entity generated by an instruction. The schema must define an `object` at its root. If the instruction is expected to generate multiple items, the root object should have a key which defines an array of the expected items. An instruction which generates multiple emails may be expressed as `{"type": "object", "properties": {"emails": { "type": "array", "items": { "type": "string"}}}}`. Simple values may be expressed as an object with a single key. For example, a summary instruction may generate a single string value. The schema might be `{"type": "object", "properties": { "summary": { "type": "string"}}}`.
     */
    entitySchema: { [k: string]: any };
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
export const Instruction$inboundSchema: z.ZodType<Instruction, z.ZodTypeDef, unknown> = z
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
        scope: Scope$inboundSchema.default("chunk"),
        prompt: z.string(),
        entity_schema: z.record(z.any()),
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            updated_at: "updatedAt",
            entity_schema: "entitySchema",
        });
    });

/** @internal */
export type Instruction$Outbound = {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    active: boolean;
    scope: string;
    prompt: string;
    entity_schema: { [k: string]: any };
};

/** @internal */
export const Instruction$outboundSchema: z.ZodType<
    Instruction$Outbound,
    z.ZodTypeDef,
    Instruction
> = z
    .object({
        id: z.string(),
        createdAt: z.date().transform((v) => v.toISOString()),
        updatedAt: z.date().transform((v) => v.toISOString()),
        name: z.string(),
        active: z.boolean().default(true),
        scope: Scope$outboundSchema.default("chunk"),
        prompt: z.string(),
        entitySchema: z.record(z.any()),
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
export namespace Instruction$ {
    /** @deprecated use `Instruction$inboundSchema` instead. */
    export const inboundSchema = Instruction$inboundSchema;
    /** @deprecated use `Instruction$outboundSchema` instead. */
    export const outboundSchema = Instruction$outboundSchema;
    /** @deprecated use `Instruction$Outbound` instead. */
    export type Outbound = Instruction$Outbound;
}
