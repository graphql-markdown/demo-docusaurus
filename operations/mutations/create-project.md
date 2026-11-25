# createProject



Create a project and assign its initial owner.


```graphql
createProject(
  input: CreateProjectInput!
): Project!
```


### Arguments

#### `createProject.input` · [`CreateProjectInput!`](../../types/inputs/create-project-input.md) **non-null** **input** 
The project attributes to create.




### Type

#### [`Project`](../../types/objects/project.md) **object** 
A unit of work tracked in the workspace.




### Example


```graphql
mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    name
    status
    folder {
      id
      name
    }
  }
}
```