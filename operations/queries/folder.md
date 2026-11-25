# folder



Fetch a single folder by its unique identifier.


```graphql
folder(
  id: ID!
): Folder
```


### Arguments

#### `folder.id` · [`ID!`](../../types/scalars/id.md) **non-null** **scalar** 
The unique identifier of the folder to retrieve.




### Type

#### [`Folder`](../../types/objects/folder.md) **object** 
A virtual folder used to organize workspace resources.




### Example


```graphql
query GetFolder($id: ID!) {
  folder(id: $id) {
    id
    name
    parent
    createdAt
  }
}
```