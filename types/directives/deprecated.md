# deprecated



Marks an element of a GraphQL schema as no longer supported.


```graphql
directive @deprecated(
  reason: String!
) on 
  | FIELD_DEFINITION
  | ARGUMENT_DEFINITION
  | INPUT_FIELD_DEFINITION
  | ENUM_VALUE
  | DIRECTIVE_DEFINITION
```


### Arguments

#### `deprecated.reason` · [`String!`](../scalars/string.md) **non-null** **scalar** 
Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).