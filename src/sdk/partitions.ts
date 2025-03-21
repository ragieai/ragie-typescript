/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { partitionsCreate } from "../funcs/partitionsCreate.js";
import { partitionsDelete } from "../funcs/partitionsDelete.js";
import { partitionsGet } from "../funcs/partitionsGet.js";
import { partitionsList } from "../funcs/partitionsList.js";
import { partitionsSetLimits } from "../funcs/partitionsSetLimits.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Partitions extends ClientSDK {
  /**
   * List Partitions
   *
   * @remarks
   * List all partitions sorted by name in ascending order. Results are paginated with a max limit of 100. When more partitions are available, a `cursor` will be provided. Use the `cursor` parameter to retrieve the subsequent page.
   */
  async list(
    request?: operations.ListPartitionsPartitionsGetRequest | undefined,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.ListPartitionsPartitionsGetResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(partitionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Partition
   *
   * @remarks
   * Create a new partition. Partitions are used to scope documents, connections, and instructions. Partitions must be lowercase alphanumeric and may only include the special characters `_` and `-`. A partition may also be created by creating a document in it. Limits for a partition may optionally be defined when creating.
   */
  async create(
    request: components.CreatePartitionParams,
    options?: RequestOptions,
  ): Promise<components.Partition> {
    return unwrapAsync(partitionsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Partition
   *
   * @remarks
   * Get a partition by its ID. Includes usage information such as the number of documents and pages hosted and processed. The partition's limits are also included.
   */
  async get(
    request: operations.GetPartitionPartitionsPartitionIdGetRequest,
    options?: RequestOptions,
  ): Promise<components.PartitionDetail> {
    return unwrapAsync(partitionsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Partition
   *
   * @remarks
   * Deletes a partition and all of its associated data. This includes connections, documents, and partition specific instructions. This operation is irreversible.
   */
  async delete(
    request: operations.DeletePartitionPartitionsPartitionIdDeleteRequest,
    options?: RequestOptions,
  ): Promise<{ [k: string]: string }> {
    return unwrapAsync(partitionsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Set Partition Limits
   *
   * @remarks
   * Sets limits on a partition. Limits can be set on the total number of pages a partition can host and process. When the limit is reached, the partition will be disabled. A limit may be removed by setting it to `null`.
   */
  async setLimits(
    request: operations.SetPartitionLimitsPartitionsPartitionIdLimitsPutRequest,
    options?: RequestOptions,
  ): Promise<components.PartitionDetail> {
    return unwrapAsync(partitionsSetLimits(
      this,
      request,
      options,
    ));
  }
}
