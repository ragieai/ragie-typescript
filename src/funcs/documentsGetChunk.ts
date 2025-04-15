/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { RagieCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
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
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get Document Chunk
 *
 * @remarks
 * Gets a document chunk by its document and chunk ID.
 */
export function documentsGetChunk(
  client: RagieCore,
  request: operations.GetDocumentChunkRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.DocumentChunkDetail,
    | errors.HTTPValidationError
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: RagieCore,
  request: operations.GetDocumentChunkRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.DocumentChunkDetail,
      | errors.HTTPValidationError
      | errors.ErrorMessage
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.GetDocumentChunkRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    chunk_id: encodeSimple("chunk_id", payload.chunk_id, {
      explode: false,
      charEncoding: "percent",
    }),
    document_id: encodeSimple("document_id", payload.document_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/documents/{document_id}/chunks/{chunk_id}")(
    pathParams,
  );

  const headers = new Headers(compactMap({
    Accept: "application/json",
    "partition": encodeSimple("partition", payload.partition, {
      explode: false,
      charEncoding: "none",
    }),
  }));

  const secConfig = await extractSecurity(client._options.auth);
  const securityInput = secConfig == null ? {} : { auth: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "GetDocumentChunk",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.auth,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["401", "402", "404", "422", "429", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.DocumentChunkDetail,
    | errors.HTTPValidationError
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.DocumentChunkDetail$inboundSchema),
    M.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    M.jsonErr([401, 402, 404, 429], errors.ErrorMessage$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
