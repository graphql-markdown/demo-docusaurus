# archiveProject



Archive a project that is no longer active.


```graphql
archiveProject(
  id: ID!
): Project!
```


### Arguments

#### `archiveProject.id` · [`ID!`](../../types/scalars/id.md) **non-null** **scalar** 
The unique identifier of the project to archive.




### Type

#### [`Project`](../../types/objects/project.md) **object** 
A unit of work tracked in the workspace.




### Example


```graphql
mutation ArchiveProject($id: ID!) {
  archiveProject(id: $id) {
    id
    name
    status
    updatedAt
  }
}
```