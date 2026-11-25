// Decorators shared by both outputs (the pages and the Markdown copies).
import {
  directiveOccurrence,
  hasDirectiveNamed,
} from "@graphql-markdown/graphql";

export const decorators = {
  // Mirrors the built-in `@deprecated` treatment (badge + callout) for the
  // type-level `@deprecatedType` directive, which the spec doesn't allow
  // `@deprecated` to target.
  deprecatedTypeTag: {
    predicate: hasDirectiveNamed("deprecatedType"),
    position: { into: "tags" },
    render: (_values, options) =>
      options.formatMDXBadge({ text: "deprecated" }),
  },
  deprecatedTypeNotice: {
    predicate: hasDirectiveNamed("deprecatedType"),
    position: { into: "description" },
    resolve: directiveOccurrence("deprecatedType"),
    render: ([value], options) =>
      options.formatMDXAdmonition(
        // Docusaurus admonitions need blank lines around their content.
        {
          text: `\n\n${value.reason}\n\n`,
          title: "Deprecated",
          type: "warning",
        },
        options.meta,
      ),
  },
};
