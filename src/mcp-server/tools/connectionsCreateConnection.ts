/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectionsCreateConnection } from "../../funcs/connectionsCreateConnection.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.PublicCreateConnection$inboundSchema,
};

export const tool$connectionsCreateConnection: ToolDefinition<typeof args> = {
  name: "connections-create-connection",
  description: `Create Connection

Create a connection. This is only for non-oauth connections such as S3 compatible connections, Freshdesk, and Zendesk.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await connectionsCreateConnection(
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
