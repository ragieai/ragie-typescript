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
import { RagieError } from "../models/errors/ragieerror.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get Partition
 *
 * @remarks
 * Get a partition by its ID. Includes usage information such as the number of documents and pages hosted and processed. The partition's limits are also included.
 */
export function partitionsGet(
  client: RagieCore,
  request: operations.GetPartitionPartitionsPartitionIdGetRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.PartitionDetail,
    | errors.HTTPValidationError
    | errors.ErrorMessage
    | RagieError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
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
  request: operations.GetPartitionPartitionsPartitionIdGetRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.PartitionDetail,
      | errors.HTTPValidationError
      | errors.ErrorMessage
      | RagieError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.GetPartitionPartitionsPartitionIdGetRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    partition_id: encodeSimple("partition_id", payload.partition_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/partitions/{partition_id}")(pathParams);

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.auth);
  const securityInput = secConfig == null ? {} : { auth: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "get_partition_partitions__partition_id__get",
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
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["401", "402", "422", "429", "4XX", "5XX"],
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
    components.PartitionDetail,
    | errors.HTTPValidationError
    | errors.ErrorMessage
    | RagieError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, components.PartitionDetail$inboundSchema),
    M.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    M.jsonErr([401, 402, 429], errors.ErrorMessage$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
