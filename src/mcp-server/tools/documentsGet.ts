/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentsGet } from "../../funcs/documentsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetDocumentRequest$inboundSchema,
};

export const tool$documentsGet: ToolDefinition<typeof args> = {
  name: "documents-get",
  description: `Get Document`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await documentsGet(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
