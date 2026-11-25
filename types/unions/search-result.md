# SearchResult



A result returned from global workspace search.


```graphql
union SearchResult = Folder | Project | User
```


### Possible types

#### [`SearchResult.Folder`](../objects/folder.md) **object** 
A virtual folder used to organize workspace resources.


#### [`SearchResult.Project`](../objects/project.md) **object** 
A unit of work tracked in the workspace.


#### [`SearchResult.User`](../objects/user.md) **object** 
A workspace member who owns and collaborates on projects.




### Returned By

[`search`](../../operations/queries/search.md)  **query**