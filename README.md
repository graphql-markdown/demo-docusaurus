# GraphQL-Markdown demo

CodeSandbox demo repository of [GraphQL-Markdown](https://graphql-markdown.dev), a GraphQL documentation generator.

**Live demo:** [graphql-markdown.dev/demo-docusaurus](https://graphql-markdown.dev/demo-docusaurus/)

## Try it

Use the [CodeSandbox template](https://codesandbox.io/s/github/graphql-markdown/graphql-markdown-demo/tree/main?file=/.graphqlrc) or fork this repository to try with your own GraphQL schema.

1. Edit the configuration in `.graphqlrc`
2. Run `npm run doc` in a new terminal
3. Run `npm start` to preview the site

## What's included

- `src/pages/index.tsx` — landing page (hero, schema preview, highlights); the generated reference intro lives at `/intro`
- `src/css/custom.css` — green (Infima default) theme and styling for the generated reference pages
- `tests/visual/` — Playwright + [Argos](https://argos-ci.com) visual tests (`npm run doc && npm run build && npm run test:visual`)

## Markdown copies and deprecation links

Each page is also published as plain Markdown next to it (`/types/objects/project` has `/types/objects/project.md`), and ends with a "View as Markdown" link. It follows the [Markdown copies](https://graphql-markdown.dev/docs/guides/markdown-copies) guide:

- `.graphqlrc` has a `markdown` project that renders the same schema into `.markdown-copies/` with `lib/markdown-copy.mjs`, a plain Markdown formatter. `npm run doc` runs both projects.
- `docusaurus.config.js` registers a second `@graphql-markdown/docusaurus` plugin instance (`id: "markdown"`) and sets both formatters as `file://` URLs.
- `npm run build` copies `.markdown-copies/` into `build/` after `docusaurus build`.
- `lib/formatter.mjs` extends the Docusaurus formatter: an `afterRenderTypeEntitiesHook` adds the link (a `pathname://` link, so Docusaurus doesn't resolve the `.md` as a doc or flag it as broken), and a deprecation reason that names a schema type in backticks links to that type's page, following the [Link entities in deprecation reasons](https://graphql-markdown.dev/docs/customize/hooks#link-entities-in-deprecation-reasons) recipe.
- `lib/decorators.mjs` renders the schema's type-level `@deprecatedType` directive (a "deprecated" badge and a "Deprecated" notice) in both outputs; the decorators are passed in the options of both plugin instances, as `.graphqlrc` can't hold functions.
