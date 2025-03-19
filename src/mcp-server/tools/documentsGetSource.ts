/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentsGetSource } from "../../funcs/documentsGetSource.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetDocumentSourceRequest$inboundSchema,
};

export const tool$documentsGetSource: ToolDefinition<typeof args> = {
  name: "documents-get-source",
  description: `Get Document Source

Get the source file of a document. The source file is the original file that was uploaded to create the document. If the document was created from a URL, the source file will be the content of the URL. If the document was created by a connection, the source file will vary based on the type of the connection. For example, a Google Drive connection will return the file that was synced from the Google Drive, while a SalesForce connection would return a JSON file of the data synced from SalesForce.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await documentsGetSource(
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
