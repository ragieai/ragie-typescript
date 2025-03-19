/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { entitiesListByInstruction } from "../../funcs/entitiesListByInstruction.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListEntitiesByInstructionRequest$inboundSchema,
};

export const tool$entitiesListByInstruction: ToolDefinition<typeof args> = {
  name: "entities-list-by-instruction",
  description: `Get Instruction Extracted Entities`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await entitiesListByInstruction(
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

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
