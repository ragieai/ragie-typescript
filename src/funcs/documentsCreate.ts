/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { RagieCore } from "../core.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { isBlobLike } from "../types/blobs.js";
import { Result } from "../types/fp.js";

/**
 * Create Document
 */
export async function documentsCreate(
    client$: RagieCore,
    request: components.CreateDocumentParams,
    options?: RequestOptions
): Promise<
    Result<
        components.Document,
        | errors.ErrorMessage
        | errors.HTTPValidationError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => components.CreateDocumentParams$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
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

    const path$ = pathToFunc("/documents")();

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const auth$ = await extractSecurity(client$.options$.auth);
    const security$ = auth$ == null ? {} : { auth: auth$ };
    const context = {
        operationID: "CreateDocument",
        oAuth2Scopes: [],
        securitySource: client$.options$.auth,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "POST",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "422", "4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        components.Document,
        | errors.ErrorMessage
        | errors.HTTPValidationError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(201, components.Document$inboundSchema),
        m$.jsonErr([400, 401], errors.ErrorMessage$inboundSchema),
        m$.jsonErr(422, errors.HTTPValidationError$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
