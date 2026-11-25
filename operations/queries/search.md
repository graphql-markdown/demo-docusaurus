# search



Search folders, projects, and users from a single endpoint.


```graphql
search(
  query: String!
): [SearchResult!]!
```


### Arguments

#### `search.query` · [`String!`](../../types/scalars/string.md) **non-null** **scalar** 
Text matched against folder, project, and user names.




### Type

#### [`SearchResult`](../../types/unions/search-result.md) **union** 
A result returned from global workspace search.




### Example


```graphql
query SearchWorkspace($query: String!) {
  search(query: $query) {
    __typename
    ... on Folder {
      id
      name
    }
    ... on Project {
      id
      name
      status
    }
    ... on User {
      id
      name
      email
    }
  }
}
```