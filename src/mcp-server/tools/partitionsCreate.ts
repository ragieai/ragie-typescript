/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { partitionsCreate } from "../../funcs/partitionsCreate.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.CreatePartitionParams$inboundSchema,
};

export const tool$partitionsCreate: ToolDefinition<typeof args> = {
  name: "partitions-create",
  description: `Create Partition

Create a new partition. Partitions are used to scope documents, connections, and instructions. Partitions must be lowercase alphanumeric and may only include the special characters \`_\` and \`-\`. A partition may also be created by creating a document in it. Limits for a partition may optionally be defined when creating.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await partitionsCreate(
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
