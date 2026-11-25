// lib/markdown-copy.mjs
// Formatter of the `markdown` project (graphql.config.mjs): plain GitHub-flavored
// Markdown copies of the pages, following the "Markdown copies" guide:
// https://graphql-markdown.dev/docs/guides/markdown-copies
import * as mdbook from "@graphql-markdown/formatters/mdbook";

// Drop the preset factory, otherwise it takes precedence over the overrides
const { createMDXFormatter, default: _default, ...preset } = mdbook;

// `Type.field` instead of HTML spans
const formatMDXNameEntity = (name, parentType) =>
  `\`${parentType ? `${parentType}.${name}` : name}\``;
const formatMDXBullet = (text = "") => ` · ${text}`;
const formatMDXPermalink = () => "";
const formatMDXSpecifiedByLink = (url) => `\n\nSpecified by: <${url}>`;

// mdBook's `SUMMARY.md` is not needed for the copies
const afterRenderFilesHook = async () => {};

export default {
  ...preset,
  formatMDXNameEntity,
  formatMDXBullet,
  formatMDXPermalink,
  formatMDXSpecifiedByLink,
  afterRenderFilesHook,
};
