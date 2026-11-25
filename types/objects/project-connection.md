# ProjectConnection



A paginated project result set.


```graphql
type ProjectConnection {
  nodes: [Project!]!
  totalCount: Int!
}
```


### Fields

#### `ProjectConnection.nodes` · [`[Project!]!`](./project.md) **non-null** **object** 
Projects in the current result page.


#### `ProjectConnection.totalCount` · [`Int!`](../scalars/int.md) **non-null** **scalar** 
The total number of projects matching the query.




### Example


```graphql
{
  "nodes": [
    {
      "id": "project_01",
      "name": "Mobile Refresh",
      "status": "ACTIVE",
      "owner": {
        "id": "user_01",
        "name": "Avery Chen"
      },
      "updatedAt": "2026-09-05T10:15:00Z"
    }
  ]
}
```




### Returned By

[`projects`](../../operations/queries/projects.md)  **query**