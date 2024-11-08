/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectionsDeleteConnection } from "../funcs/connectionsDeleteConnection.js";
import { connectionsGetConnectionStats } from "../funcs/connectionsGetConnectionStats.js";
import { connectionsList } from "../funcs/connectionsList.js";
import { connectionsSetConnectionEnabled } from "../funcs/connectionsSetConnectionEnabled.js";
import { connectionsUpdateConnection } from "../funcs/connectionsUpdateConnection.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Connections extends ClientSDK {
  /**
   * List Connections
   *
   * @remarks
   * List all connections sorted by created_at in descending order. Results are paginated with a max limit of 100. When more documents are available, a `cursor` will be provided. Use the `cursor` parameter to retrieve the subsequent page.
   */
  async list(
    request?: operations.ListConnectionsConnectionsGetRequest | undefined,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListConnectionsConnectionsGetResponse>> {
    return unwrapResultIterator(connectionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Set Connection Enabled
   *
   * @remarks
   * Enable or disable the connection. A disabled connection won't sync.
   */
  async setConnectionEnabled(
    request:
      operations.SetConnectionEnabledConnectionsConnectionIdEnabledPutRequest,
    options?: RequestOptions,
  ): Promise<components.Connection> {
    return unwrapAsync(connectionsSetConnectionEnabled(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Connection
   *
   * @remarks
   * Updates a connections metadata or mode. These changes will be seen after the next sync.
   */
  async updateConnection(
    request: operations.UpdateConnectionConnectionsConnectionIdPutRequest,
    options?: RequestOptions,
  ): Promise<components.Connection> {
    return unwrapAsync(connectionsUpdateConnection(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Connection Stats
   *
   * @remarks
   * Lists connection stats: total documents synced.
   */
  async getConnectionStats(
    request:
      operations.GetConnectionStatsConnectionsConnectionIdStatsGetRequest,
    options?: RequestOptions,
  ): Promise<components.ConnectionStats> {
    return unwrapAsync(connectionsGetConnectionStats(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Connection
   *
   * @remarks
   * Schedules a connection to be deleted. You can choose to keep the files from the connection or delete them all. If you keep the files, they will no longer be associated to the connection. Deleting can take some time, so you will still see files for a bit after this is called.
   */
  async deleteConnection(
    request:
      operations.DeleteConnectionConnectionsConnectionIdDeletePostRequest,
    options?: RequestOptions,
  ): Promise<{ [k: string]: string }> {
    return unwrapAsync(connectionsDeleteConnection(
      this,
      request,
      options,
    ));
  }
}
