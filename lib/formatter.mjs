// lib/formatter.mjs
// Docusaurus formatter extended with:
// - links from schema types named in deprecation reasons to their pages
//   https://graphql-markdown.dev/docs/customize/hooks#link-entities-in-deprecation-reasons
// - a "View as Markdown" link at the bottom of every page
//   https://graphql-markdown.dev/docs/guides/markdown-copies
import { readFile, writeFile } from "node:fs/promises";
import { relative, sep } from "node:path";
import * as preset from "@graphql-markdown/docusaurus/mdx";
import { toLink } from "@graphql-markdown/printer-legacy";

// Docusaurus skips `pathname://` links when resolving docs and checking broken
// links, so the `.md` target isn't taken for a doc. The path includes the site
// baseUrl, since the copies sit in `build/` next to the pages.
const COPIES_URL = "pathname:///demo-docusaurus";

// Pages render concurrently, so this may hold another page's options: only read
// settings shared by every page (schema, basePath, hierarchy, groups, deprecated, formatMDXLink).
let printOptions;

const beforePrintTypeHook = (event) => {
  printOptions = event.data.options;
};

const linkEntities = (text) => {
  const schema = printOptions?.schema;
  const rootTypes = [
    schema?.getQueryType(),
    schema?.getMutationType(),
    schema?.getSubscriptionType(),
  ];

  return text.replaceAll(/`([_A-Za-z][_0-9A-Za-z]*)`/g, (match, name) => {
    const type = schema?.getType(name);
    if (!type || name.startsWith("__") || rootTypes.includes(type)) {
      return match;
    }
    const { url } = toLink(type, name, undefined, printOptions);
    return url === "#" ? match : `[\`${name}\`](${url})`;
  });
};

const formatMDXAdmonition = (admonition, meta) => {
  const text =
    admonition.title?.toLowerCase() === "deprecated" && admonition.text
      ? linkEntities(admonition.text)
      : admonition.text;
  return preset.formatMDXAdmonition({ ...admonition, text }, meta);
};

const afterRenderTypeEntitiesHook = async (event) => {
  await preset.afterRenderTypeEntitiesHook?.(event);

  const { filePath, outputDir, outputAdapter } = event.data;
  const path = relative(outputDir, filePath)
    .split(sep)
    .join("/")
    .replace(/\.mdx?$/, "");
  const link = `\n\n[View as Markdown](${COPIES_URL}/${path}.md)\n`;

  const page = outputAdapter?.readFile
    ? await outputAdapter.readFile(filePath)
    : await readFile(filePath, "utf8");
  const content = `${page.trimEnd()}${link}`;
  await (outputAdapter?.writeFile
    ? outputAdapter.writeFile(filePath, content)
    : writeFile(filePath, content));
};

// Drop the preset factory, otherwise it takes precedence over the overrides
const { createMDXFormatter, default: _default, ...formatter } = preset;

export default {
  ...formatter,
  beforePrintTypeHook,
  formatMDXAdmonition,
  afterRenderTypeEntitiesHook,
};
