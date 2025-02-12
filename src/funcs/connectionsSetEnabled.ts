/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { RagieCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
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
import { Result } from "../types/fp.js";

/**
 * Set Connection Enabled
 *
 * @remarks
 * Enable or disable the connection. A disabled connection won't sync.
 */
export async function connectionsSetEnabled(
  client: RagieCore,
  request:
    operations.SetConnectionEnabledConnectionsConnectionIdEnabledPutRequest,
  options?: RequestOptions,
): Promise<
  Result<
    components.Connection,
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
  const parsed = safeParse(
    request,
    (value) =>
      operations
        .SetConnectionEnabledConnectionsConnectionIdEnabledPutRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.SetConnectionEnabledPayload, {
    explode: true,
  });

  const pathParams = {
    connection_id: encodeSimple("connection_id", payload.connection_id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/connections/{connection_id}/enabled")(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.auth);
  const securityInput = secConfig == null ? {} : { auth: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? "",
    operationID:
      "set_connection_enabled_connections__connection_id__enabled_put",
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
    method: "PUT",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["401", "402", "422", "429", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.Connection,
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
    M.json(200, components.Connection$inboundSchema),
    M.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    M.jsonErr([401, 402, 429], errors.ErrorMessage$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
