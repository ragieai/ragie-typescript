/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ConnectorSource = {
  Backblaze: "backblaze",
  Confluence: "confluence",
  Dropbox: "dropbox",
  Freshdesk: "freshdesk",
  Onedrive: "onedrive",
  GoogleDrive: "google_drive",
  Gmail: "gmail",
  Notion: "notion",
  Salesforce: "salesforce",
  Sharepoint: "sharepoint",
  Jira: "jira",
  Slack: "slack",
  S3: "s3",
  Gcs: "gcs",
  Hubspot: "hubspot",
  Zendesk: "zendesk",
} as const;
export type ConnectorSource = ClosedEnum<typeof ConnectorSource>;

/** @internal */
export const ConnectorSource$inboundSchema: z.ZodNativeEnum<
  typeof ConnectorSource
> = z.nativeEnum(ConnectorSource);

/** @internal */
export const ConnectorSource$outboundSchema: z.ZodNativeEnum<
  typeof ConnectorSource
> = ConnectorSource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorSource$ {
  /** @deprecated use `ConnectorSource$inboundSchema` instead. */
  export const inboundSchema = ConnectorSource$inboundSchema;
  /** @deprecated use `ConnectorSource$outboundSchema` instead. */
  export const outboundSchema = ConnectorSource$outboundSchema;
}
