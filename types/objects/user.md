# User



A workspace member who owns and collaborates on projects.


```graphql
type User implements Node {
  id: ID!
  name: String!
  email: String!
  role: String!
}
```


### Fields

#### `User.id` · [`ID!`](../scalars/id.md) **non-null** **scalar** 
The unique identifier of the user.


#### `User.name` · [`String!`](../scalars/string.md) **non-null** **scalar** 
The user's display name.


#### `User.email` · [`String!`](../scalars/string.md) **non-null** **scalar** 
The user's primary email address.


#### `User.role` · [`String!`](../scalars/string.md) **non-null** **scalar** 
The user's role in the workspace.




### Interfaces

#### [`Node`](../interfaces/node.md) **interface** 
A globally unique entity identifier.




### Example


```graphql
{
  "id": "user_01",
  "name": "Avery Chen",
  "email": "avery@example.com",
  "role": "Product Lead"
}
```




### Member Of

[`Project`](./project.md)  **object** · [`ProjectEvent`](./project-event.md)  **object**

### Implemented By

[`SearchResult`](../unions/search-result.md)  **union**