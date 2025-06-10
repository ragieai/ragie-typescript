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
  ) {}

  async beforeRequest(ctx: BeforeRequestContext, req: Request) {
    if (ctx.operationID !== this.operationId) return req;

    // Read body once
    const fd = await req.clone().formData();
    let touched = false;

    for (const name of this.fields) {
      for (const val of fd.getAll(name)) {
        if (typeof val !== "string") continue; // skip File/Blob parts
        if (val.startsWith('"') && val.endsWith('"')) {
          fd.set(name, val.slice(1, -1));
          touched = true;
        }
      }
    }

    if (!touched) return req; // nothing changed

    // Re-create headers *without* the stale boundary token
    const headers = new Headers(req.headers);
    headers.delete("Content-Type"); // let fetch add a new one

    // Build a fresh Request so body & header are in sync
    return new Request(req.url, {
      method: req.method,
      headers,
      body: fd,
      credentials: req.credentials,
      mode: req.mode,
      redirect: req.redirect,
      referrer: req.referrer,
      referrerPolicy: req.referrerPolicy,
      integrity: req.integrity,
      keepalive: req.keepalive,
      signal: req.signal,
    });
  }
}
