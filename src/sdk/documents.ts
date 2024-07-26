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
import { isBlobLike } from "../types/blobs.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";

export class Documents extends ClientSDK {
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
     * List Documents
     *
     * @remarks
     * List all documents sorted by created_at in descending order. Results are paginated with a max limit of 100. When more documents are available, a `cursor` will be provided. Use the `cursor` parameter to retrieve the subsequent page.
     */
    async list(
        request?: operations.ListDocumentsRequest | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListDocumentsResponse>> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListDocumentsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/documents")();

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            filter: payload$.filter,
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
            operationID: "ListDocuments",
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
            errorCodes: ["401", "404", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] = await this.matcher<operations.ListDocumentsResponse>()
            .json(200, operations.ListDocumentsResponse$inboundSchema, { key: "Result" })
            .json([401, 404], errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.ListDocumentsResponse> => {
            const nextCursor = dlv(responseData, "pagination.next_cursor");

            if (nextCursor == null) {
                return () => null;
            }

            return () =>
                this.list(
                    {
                        ...input$,
                        cursor: nextCursor,
                    },
                    options
                );
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    /**
     * Create Document
     */
    async create(
        request: components.CreateDocumentParams,
        options?: RequestOptions
    ): Promise<components.Document> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.CreateDocumentParams$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = new FormData();

        if (isBlobLike(payload$.file)) {
            body$.append("file", payload$.file);
        } else {
            body$.append(
                "file",
                new Blob([payload$.file.content], { type: "application/octet-stream" }),
                payload$.file.fileName
            );
        }
        if (payload$.external_id !== undefined) {
            body$.append("external_id", payload$.external_id);
        }
        if (payload$.metadata !== undefined) {
            body$.append("metadata", encodeJSON$("metadata", payload$.metadata, { explode: true }));
        }
        if (payload$.mode !== undefined) {
            body$.append("mode", payload$.mode);
        }

        const path$ = this.templateURLComponent("/documents")();

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
            operationID: "CreateDocument",
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
            errorCodes: ["400", "401", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Document>()
            .json(201, components.Document$inboundSchema)
            .json([400, 401], errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create Document Raw
     *
     * @remarks
     * Ingest a document as raw text
     */
    async createRaw(
        request: components.CreateDocumentRawParams,
        options?: RequestOptions
    ): Promise<components.Document> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.CreateDocumentRawParams$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/documents/raw")();

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
            operationID: "CreateDocumentRaw",
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
            errorCodes: ["400", "401", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Document>()
            .json(201, components.Document$inboundSchema)
            .json([400, 401], errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Document
     */
    async get(
        request: operations.GetDocumentRequest,
        options?: RequestOptions
    ): Promise<components.Document> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetDocumentRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            document_id: encodeSimple$("document_id", payload$.document_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/documents/{document_id}")(pathParams$);

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
            operationID: "GetDocument",
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
            errorCodes: ["401", "404", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.Document>()
            .json(200, components.Document$inboundSchema)
            .json([401, 404], errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete Document
     */
    async delete(
        request: operations.DeleteDocumentRequest,
        options?: RequestOptions
    ): Promise<components.DocumentDelete> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteDocumentRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            document_id: encodeSimple$("document_id", payload$.document_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/documents/{document_id}")(pathParams$);

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
            operationID: "DeleteDocument",
            oAuth2Scopes: [],
            securitySource: this.options$.auth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
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
            errorCodes: ["401", "404", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DocumentDelete>()
            .json(200, components.DocumentDelete$inboundSchema)
            .json([401, 404], errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update Document File
     */
    async updateFile(
        request: operations.UpdateDocumentFileRequest,
        options?: RequestOptions
    ): Promise<components.DocumentFileUpdate> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateDocumentFileRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = new FormData();

        if (isBlobLike(payload$.UpdateDocumentFileParams.file)) {
            body$.append("file", payload$.UpdateDocumentFileParams.file);
        } else {
            body$.append(
                "file",
                new Blob([payload$.UpdateDocumentFileParams.file.content], {
                    type: "application/octet-stream",
                }),
                payload$.UpdateDocumentFileParams.file.fileName
            );
        }
        if (payload$.UpdateDocumentFileParams.mode !== undefined) {
            body$.append("mode", payload$.UpdateDocumentFileParams.mode);
        }

        const pathParams$ = {
            document_id: encodeSimple$("document_id", payload$.document_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/documents/{document_id}/file")(pathParams$);

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
            operationID: "UpdateDocumentFile",
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
            errorCodes: ["401", "404", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DocumentFileUpdate>()
            .json(200, components.DocumentFileUpdate$inboundSchema)
            .json([401, 404], errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update Document Raw
     */
    async updateRaw(
        request: operations.UpdateDocumentRawRequest,
        options?: RequestOptions
    ): Promise<components.DocumentRawUpdate> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateDocumentRawRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UpdateDocumentRawParams, { explode: true });

        const pathParams$ = {
            document_id: encodeSimple$("document_id", payload$.document_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/documents/{document_id}/raw")(pathParams$);

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
            operationID: "UpdateDocumentRaw",
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
            errorCodes: ["401", "404", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DocumentRawUpdate>()
            .json(200, components.DocumentRawUpdate$inboundSchema)
            .json([401, 404], errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Patch Document Metadata
     */
    async patchMetadata(
        request: operations.PatchDocumentMetadataRequest,
        options?: RequestOptions
    ): Promise<components.DocumentMetadataUpdate> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.PatchDocumentMetadataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.PatchDocumentMetadataParams, { explode: true });

        const pathParams$ = {
            document_id: encodeSimple$("document_id", payload$.document_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/documents/{document_id}/metadata")(pathParams$);

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
            operationID: "PatchDocumentMetadata",
            oAuth2Scopes: [],
            securitySource: this.options$.auth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
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
            errorCodes: ["401", "404", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DocumentMetadataUpdate>()
            .json(200, components.DocumentMetadataUpdate$inboundSchema)
            .json([401, 404], errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Document Summary
     *
     * @remarks
     * Get a LLM generated summary of the document. The summary is created when the document is first created or updated. Documents of types ['xlsx', 'csv', 'json'] are not supported for summarization. This feature is in beta and may change in the future.
     */
    async getSummary(
        request: operations.GetDocumentSummaryRequest,
        options?: RequestOptions
    ): Promise<components.DocumentSummary> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetDocumentSummaryRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            document_id: encodeSimple$("document_id", payload$.document_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/documents/{document_id}/summary")(pathParams$);

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
            operationID: "GetDocumentSummary",
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
            errorCodes: ["401", "404", "422", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DocumentSummary>()
            .json(200, components.DocumentSummary$inboundSchema)
            .json([401, 404], errors.ErrorMessage$inboundSchema, { err: true })
            .json(422, errors.HTTPValidationError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
