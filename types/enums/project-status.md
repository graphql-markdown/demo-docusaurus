# ProjectStatus



The lifecycle stage of a project.


```graphql
enum ProjectStatus {
  DRAFT
  ACTIVE
  ARCHIVED
}
```


### Values

#### `ProjectStatus.DRAFT`  
The project is being planned and is not yet active.


#### `ProjectStatus.ACTIVE`  
The project is active and available to collaborators.


#### `ProjectStatus.ARCHIVED`  
The project is retained for history and no longer active.




### Member Of

[`CreateProjectInput`](../inputs/create-project-input.md)  **input** · [`Project`](../objects/project.md)  **object** · [`projects`](../../operations/queries/projects.md)  **query**