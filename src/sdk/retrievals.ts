/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { retrievalsRetrieve } from "../funcs/retrievalsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Retrievals extends ClientSDK {
    /**
     * Retrieve
     */
    async retrieve(
        request: components.RetrieveParams,
        options?: RequestOptions
    ): Promise<components.Retrieval> {
        return unwrapAsync(retrievalsRetrieve(this, request, options));
    }
}
