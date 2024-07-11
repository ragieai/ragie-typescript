/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Unauthorized
 */
export type ErrorMessageData = {
    detail: string;
};

/**
 * Unauthorized
 */
export class ErrorMessage extends Error {
    detail: string;

    /** The original data that was passed to this error instance. */
    data$: ErrorMessageData;

    constructor(err: ErrorMessageData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.detail = err.detail;

        this.name = "ErrorMessage";
    }
}

/** @internal */
export const ErrorMessage$inboundSchema: z.ZodType<ErrorMessage, z.ZodTypeDef, unknown> = z
    .object({
        detail: z.string(),
    })
    .transform((v) => {
        return new ErrorMessage(v);
    });

/** @internal */
export type ErrorMessage$Outbound = {
    detail: string;
};

/** @internal */
export const ErrorMessage$outboundSchema: z.ZodType<
    ErrorMessage$Outbound,
    z.ZodTypeDef,
    ErrorMessage
> = z
    .instanceof(ErrorMessage)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            detail: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorMessage$ {
    /** @deprecated use `ErrorMessage$inboundSchema` instead. */
    export const inboundSchema = ErrorMessage$inboundSchema;
    /** @deprecated use `ErrorMessage$outboundSchema` instead. */
    export const outboundSchema = ErrorMessage$outboundSchema;
    /** @deprecated use `ErrorMessage$Outbound` instead. */
    export type Outbound = ErrorMessage$Outbound;
}