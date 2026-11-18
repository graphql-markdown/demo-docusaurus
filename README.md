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
- `src/css/custom.css` — violet Infima theme and styling for the generated reference pages
- `tests/visual/` — Playwright + [Argos](https://argos-ci.com) visual tests (`npm run doc && npm run build && npm run test:visual`)
