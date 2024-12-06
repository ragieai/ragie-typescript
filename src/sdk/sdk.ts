/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { healthzHealthzGet } from "../funcs/healthzHealthzGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Connections } from "./connections.js";
import { Documents } from "./documents.js";
import { Entities } from "./entities.js";
import { Retrievals } from "./retrievals.js";

export class Ragie extends ClientSDK {
  private _documents?: Documents;
  get documents(): Documents {
    return (this._documents ??= new Documents(this._options));
  }

  private _retrievals?: Retrievals;
  get retrievals(): Retrievals {
    return (this._retrievals ??= new Retrievals(this._options));
  }

  private _entities?: Entities;
  get entities(): Entities {
    return (this._entities ??= new Entities(this._options));
  }

  private _connections?: Connections;
  get connections(): Connections {
    return (this._connections ??= new Connections(this._options));
  }

  /**
   * Healthz
   */
  async healthzHealthzGet(
    options?: RequestOptions,
  ): Promise<operations.HealthzHealthzGetResponseHealthzHealthzGet> {
    return unwrapAsync(healthzHealthzGet(
      this,
      options,
    ));
  }
}
