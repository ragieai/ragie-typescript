/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { dlv } from "../lib/dlv.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";
import * as z from "zod";

export class Entities extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List Instructions
     *
     * @remarks
     * List all instructions.
     */
    async listInstructions(options?: RequestOptions): Promise<Array<components.Instruction>> {
        const path$ = this.templateURLComponent("/instructions")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.auth === "function") {
            security$ = { auth: await this.options$.auth() };
        } else if (this.options$.auth) {
            security$ = { auth: this.options$.auth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "ListInstructions",
            oAuth2Scopes: [],
            securitySource: this.options$.auth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<components.Instruction>>()
            .json(200, z.array(components.Instruction$inboundSchema))
            .json(401, errors.ErrorMessage$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create Instruction
     *
     * @remarks
     * Create a new instruction. Instructions are applied to documents as they are created or updated. The results of the instruction are stored as structured data in the schema defined by the `entity_schema` parameter. The `prompt` parameter is a natural language instruction which will be applied to documents. This feature is in beta and may change in the future.
     */
    async createInstruction(
        request: components.CreateInstructionParams,
        options?: RequestOptions
    ): Promise<components.Instruction> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.CreateInstructionParams$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/instructions")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.auth === "function") {
            security$ = { auth: await this.options$.auth() };
        } else if (this.options$.auth) {
            security$ = { auth: this.options$.auth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "CreateInstruction",
            oAuth2Scopes: [],
            securitySource: this.options$.auth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Instruction>()
            .json(200, components.Instruction$inboundSchema)
            .json(401, errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update Instruction
     */
    async updateInstruction(
        instructionId: string,
        updateInstructionParams: components.UpdateInstructionParams,
        options?: RequestOptions
    ): Promise<components.Instruction> {
        const input$: operations.UpdateInstructionRequest = {
            instructionId: instructionId,
            updateInstructionParams: updateInstructionParams,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateInstructionRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateInstructionParams, { explode: true });

        const pathParams$ = {
            instruction_id: encodeSimple$("instruction_id", payload$.instruction_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/instructions/{instruction_id}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.auth === "function") {
            security$ = { auth: await this.options$.auth() };
        } else if (this.options$.auth) {
            security$ = { auth: this.options$.auth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "UpdateInstruction",
            oAuth2Scopes: [],
            securitySource: this.options$.auth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Instruction>()
            .json(200, components.Instruction$inboundSchema)
            .json(401, errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Instruction Extracted Entities
     */
    async listByInstruction(
        instructionId: string,
        cursor?: string | null | undefined,
        pageSize?: number | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListEntitiesByInstructionResponse>> {
        const input$: operations.ListEntitiesByInstructionRequest = {
            instructionId: instructionId,
            cursor: cursor,
            pageSize: pageSize,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListEntitiesByInstructionRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            instruction_id: encodeSimple$("instruction_id", payload$.instruction_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/instructions/{instruction_id}/entities")(
            pathParams$
        );

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            page_size: payload$.page_size,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.auth === "function") {
            security$ = { auth: await this.options$.auth() };
        } else if (this.options$.auth) {
            security$ = { auth: this.options$.auth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "ListEntitiesByInstruction",
            oAuth2Scopes: [],
            securitySource: this.options$.auth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] = await this.matcher<operations.ListEntitiesByInstructionResponse>()
            .json(200, operations.ListEntitiesByInstructionResponse$inboundSchema, {
                key: "Result",
            })
            .json(401, errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.ListEntitiesByInstructionResponse> => {
            const nextCursor = dlv(responseData, "pagination.next_cursor");

            if (nextCursor == null) {
                return () => null;
            }

            return () => this.listByInstruction(instructionId, nextCursor, pageSize, options);
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    /**
     * Get Document Extracted Entities
     */
    async listByDocument(
        documentId: string,
        cursor?: string | null | undefined,
        pageSize?: number | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListEntitiesByDocumentResponse>> {
        const input$: operations.ListEntitiesByDocumentRequest = {
            documentId: documentId,
            cursor: cursor,
            pageSize: pageSize,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListEntitiesByDocumentRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            document_id: encodeSimple$("document_id", payload$.document_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/documents/{document_id}/entities")(pathParams$);

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            page_size: payload$.page_size,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.auth === "function") {
            security$ = { auth: await this.options$.auth() };
        } else if (this.options$.auth) {
            security$ = { auth: this.options$.auth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "ListEntitiesByDocument",
            oAuth2Scopes: [],
            securitySource: this.options$.auth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] = await this.matcher<operations.ListEntitiesByDocumentResponse>()
            .json(200, operations.ListEntitiesByDocumentResponse$inboundSchema, { key: "Result" })
            .json(401, errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.ListEntitiesByDocumentResponse> => {
            const nextCursor = dlv(responseData, "pagination.next_cursor");

            if (nextCursor == null) {
                return () => null;
            }

            return () => this.listByDocument(documentId, nextCursor, pageSize, options);
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }
}
