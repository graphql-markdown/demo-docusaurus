# Node



A globally unique entity identifier.


```graphql
interface Node {
  id: ID!
}
```


### Fields

#### `Node.id` · [`ID!`](../scalars/id.md) **non-null** **scalar** 
The globally unique identifier for this resource.




### Example


```graphql
{}
```




### Implemented By

[`Folder`](../objects/folder.md)  **object** · [`Project`](../objects/project.md)  **object** · [`User`](../objects/user.md)  **object**