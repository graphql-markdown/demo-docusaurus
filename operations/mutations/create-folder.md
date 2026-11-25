# createFolder



Create a virtual folder in the workspace.


```graphql
createFolder(
  name: String!
  parentId: ID
): Folder!
```


### Arguments

#### `createFolder.name` · [`String!`](../../types/scalars/string.md) **non-null** **scalar** 
The name of the new folder.


#### `createFolder.parentId` · [`ID`](../../types/scalars/id.md) **scalar** 
The optional parent folder identifier.




### Type

#### [`Folder`](../../types/objects/folder.md) **object** 
A virtual folder used to organize workspace resources.




### Example


```graphql
mutation CreateFolder($name: String!, $parentId: ID) {
  createFolder(name: $name, parentId: $parentId) {
    id
    name
  }
}
```