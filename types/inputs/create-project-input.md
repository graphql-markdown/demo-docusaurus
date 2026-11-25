# CreateProjectInput



Input used to create a project.


```graphql
input CreateProjectInput {
  name: String!
  ownerId: ID!
  folderId: ID
  status: ProjectStatus
}
```


### Fields

#### `CreateProjectInput.name` · [`String!`](../scalars/string.md) **non-null** **scalar** 
The name for the new project.


#### `CreateProjectInput.ownerId` · [`ID!`](../scalars/id.md) **non-null** **scalar** 
The identifier of the user who will own the project.


#### `CreateProjectInput.folderId` · [`ID`](../scalars/id.md) **scalar** 
The optional folder that will contain the project.


#### `CreateProjectInput.status` · [`ProjectStatus`](../enums/project-status.md) **enum** 
The initial lifecycle stage for the project.




### Example


```graphql
{}
```




### Member Of

[`createProject`](../../operations/mutations/create-project.md)  **mutation**