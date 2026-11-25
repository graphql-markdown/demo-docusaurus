# projects



List projects, optionally filtered by lifecycle status.


```graphql
projects(
  status: ProjectStatus
  limit: Int
): ProjectConnection!
```


### Arguments

#### `projects.status` · [`ProjectStatus`](../../types/enums/project-status.md) **enum** 
Limit results to projects in this lifecycle stage.


#### `projects.limit` · [`Int`](../../types/scalars/int.md) **scalar** 
Maximum number of projects to return. Defaults to 20.




### Type

#### [`ProjectConnection`](../../types/objects/project-connection.md) **object** 
A paginated project result set.




### Example


```graphql
query ListActiveProjects($status: ProjectStatus) {
  projects(status: $status) {
    totalCount
    nodes {
      id
      name
      status
      owner {
        name
      }
    }
  }
}
```