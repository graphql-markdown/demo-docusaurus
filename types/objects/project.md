# Project



A unit of work tracked in the workspace.


```graphql
type Project implements Node {
  id: ID!
  name: String!
  status: ProjectStatus!
  owner: User!
  folder: Folder
  updatedAt: DateTime!
  state: String @deprecated
}
```


### Fields

#### `Project.id` · [`ID!`](../scalars/id.md) **non-null** **scalar** 
The unique identifier of the project.


#### `Project.name` · [`String!`](../scalars/string.md) **non-null** **scalar** 
The project name shown to collaborators.


#### `Project.status` · [`ProjectStatus!`](../enums/project-status.md) **non-null** **enum** 
The current lifecycle stage of the project.


#### `Project.owner` · [`User!`](./user.md) **non-null** **object** 
The user responsible for the project.


#### `Project.folder` · [`Folder`](./folder.md) **object** 
The folder containing this project, when assigned.


#### `Project.updatedAt` · [`DateTime!`](../scalars/date-time.md) **non-null** **scalar** 
When the project was last updated.




**Deprecated**
#### `Project.state` · [`String`](../scalars/string.md) **deprecated** **scalar** 
> [!WARNING]
> DEPRECATED
> 
> 
> Replaced by the `ProjectStatus` enum on status.
> 
> 


The project's lifecycle stage.




### Interfaces

#### [`Node`](../interfaces/node.md) **interface** 
A globally unique entity identifier.




### Example


```graphql
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
```




### Returned By

[`archiveProject`](../../operations/mutations/archive-project.md)  **mutation** · [`createProject`](../../operations/mutations/create-project.md)  **mutation**

### Member Of

[`ProjectConnection`](./project-connection.md)  **object** · [`ProjectEvent`](./project-event.md)  **object**

### Implemented By

[`SearchResult`](../unions/search-result.md)  **union**