/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { documentsCreate } from "../funcs/documentsCreate.js";
import { documentsCreateDocumentFromUrl } from "../funcs/documentsCreateDocumentFromUrl.js";
import { documentsCreateRaw } from "../funcs/documentsCreateRaw.js";
import { documentsDelete } from "../funcs/documentsDelete.js";
import { documentsGet } from "../funcs/documentsGet.js";
import { documentsGetSummary } from "../funcs/documentsGetSummary.js";
import { documentsList } from "../funcs/documentsList.js";
import { documentsPatchMetadata } from "../funcs/documentsPatchMetadata.js";
import { documentsUpdateFile } from "../funcs/documentsUpdateFile.js";
import { documentsUpdateRaw } from "../funcs/documentsUpdateRaw.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Documents extends ClientSDK {
  /**
   * Create Document
   *
   * @remarks
   * On ingest, the document goes through a series of steps before it is ready for retrieval. Each step is reflected in the status of the document which can be one of [pending, partitioned, refined, extracted, chunked, indexed, summary_indexed, keyword_indexed, ready, failed]. The document is available for retreival once it is in ready state. The summary index step can take a few seconds. You can optionally use the document for retrieval once it is in indexed state. However the summary will only be available once the state has changed to summary_indexed or ready.
   */
  async create(
    request: components.CreateDocumentParams,
    options?: RequestOptions,
  ): Promise<components.Document> {
    return unwrapAsync(documentsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * List Documents
   *
   * @remarks
   * List all documents sorted by created_at in descending order. Results are paginated with a max limit of 100. When more documents are available, a `cursor` will be provided. Use the `cursor` parameter to retrieve the subsequent page.
   */
  async list(
    request?: operations.ListDocumentsRequest | undefined,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListDocumentsResponse>> {
    return unwrapResultIterator(documentsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Document Raw
   *
   * @remarks
   * Ingest a document as raw text. On ingest, the document goes through a series of steps before it is ready for retrieval. Each step is reflected in the status of the document which can be one of [pending, partitioned, refined, extracted, chunked, indexed, summary_indexed, keyword_indexed, ready, failed]. The document is available for retreival once it is in ready state. The summary index step can take a few seconds. You can optionally use the document for retrieval once it is in indexed state. However the summary will only be available once the state has changed to summary_indexed or ready.
   */
  async createRaw(
    request: components.CreateDocumentRawParams,
    options?: RequestOptions,
  ): Promise<components.Document> {
    return unwrapAsync(documentsCreateRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Document From Url
   */
  async createDocumentFromUrl(
    request: components.CreateDocumentFromUrlParams,
    options?: RequestOptions,
  ): Promise<components.Document> {
    return unwrapAsync(documentsCreateDocumentFromUrl(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Document
   */
  async get(
    request: operations.GetDocumentRequest,
    options?: RequestOptions,
  ): Promise<components.DocumentGet> {
    return unwrapAsync(documentsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Document
   */
  async delete(
    request: operations.DeleteDocumentRequest,
    options?: RequestOptions,
  ): Promise<components.DocumentDelete> {
    return unwrapAsync(documentsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Document File
   */
  async updateFile(
    request: operations.UpdateDocumentFileRequest,
    options?: RequestOptions,
  ): Promise<components.DocumentFileUpdate> {
    return unwrapAsync(documentsUpdateFile(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Document Raw
   */
  async updateRaw(
    request: operations.UpdateDocumentRawRequest,
    options?: RequestOptions,
  ): Promise<components.DocumentRawUpdate> {
    return unwrapAsync(documentsUpdateRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Patch Document Metadata
   */
  async patchMetadata(
    request: operations.PatchDocumentMetadataRequest,
    options?: RequestOptions,
  ): Promise<components.DocumentMetadataUpdate> {
    return unwrapAsync(documentsPatchMetadata(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Document Summary
   *
   * @remarks
   * Get a LLM generated summary of the document. The summary is created when the document is first created or updated. Documents of types ['xls', 'xlsx', 'csv', 'json'] are not supported for summarization. Documents greater than 1M in token length are not supported. This feature is in beta and may change in the future.
   */
  async getSummary(
    request: operations.GetDocumentSummaryRequest,
    options?: RequestOptions,
  ): Promise<components.DocumentSummary> {
    return unwrapAsync(documentsGetSummary(
      this,
      request,
      options,
    ));
  }
}
