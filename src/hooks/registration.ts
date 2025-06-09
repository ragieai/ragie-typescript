import { BeforeRequestContext, BeforeRequestHook, Hooks } from "./types.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
  // Add hooks by calling hooks.register{ClientInit/BeforeCreateRequest/BeforeRequest/AfterSuccess/AfterError}Hook
  // with an instance of a hook that implements that specific Hook interface
  // Hooks are registered per SDK instance, and are valid for the lifetime of the SDK instance

  const createDocumentBodyFixerHook = new DequoteBodyStringHook(
    "CreateDocument",
    ["mode"],
  );
  hooks.registerBeforeRequestHook(createDocumentBodyFixerHook);
}

/**
 * A hook that dequotes specific fields in the request body for a given
 * operation ID.
 */
class DequoteBodyStringHook implements BeforeRequestHook {
  constructor(
    private readonly operationId: string,
    private readonly fields: string[] = [],
  ) { }

  async beforeRequest(hookCtx: BeforeRequestContext, request: Request) {
    if (hookCtx.operationID !== this.operationId) return request;

    // Keep the original request/body safe
    const clonedRequest = request.clone();
    const formData = await clonedRequest.formData();

    let modified = false;
    for (const field of this.fields) {
      console.log("field", field);
      if (!formData.has(field)) continue;
      const originalValue = formData.get(field)?.toString();

      if (!originalValue) continue;

      const isQuoteWrapped =
        originalValue.startsWith('"') && originalValue.endsWith('"');

      if (!isQuoteWrapped) continue;

      formData.set(field, originalValue.slice(1, -1));
      modified = true;
    }

    // If the body was modified, we need to remove the Content-Type header
    // so the browser can set it correctly for FormData
    if (modified) request.headers.delete("Content-Type");

    return new Request(request, { body: formData });
  }
}