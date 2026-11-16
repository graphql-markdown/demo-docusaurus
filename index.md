---
id: schema
slug: /
title: GraphQL-Markdown Demo API Documentation
sidebar_position: 0
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
sidebar_class_name: navbar__toggle
---

This documentation has been automatically generated from the [shared GraphQL-Markdown demo schema](https://github.com/graphql-markdown/graphql-markdown/blob/main/tests/e2e/__data__/demo_schema.graphql), the small project-workspace API documented by every GraphQL-Markdown demo, with the following plugin configuration:

```yaml title=".graphqlrc"
schema: 'https://raw.githubusercontent.com/graphql-markdown/graphql-markdown/main/tests/e2e/__data__/demo_schema.graphql'
extensions:
  graphql-markdown:
    rootPath: ./docs
    telemetry: false
    baseURL: /
    homepage: static/index.md
    loaders:
      UrlLoader: '@graphql-tools/url-loader'
    docOptions:
      frontMatter:
        pagination_next: null
        pagination_prev: null
        hide_table_of_contents: true
      index: true
    printTypeOptions:
      deprecated: group
```
