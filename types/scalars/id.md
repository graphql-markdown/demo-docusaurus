# ID



The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.


```graphql
scalar ID
```


### Member Of

[`archiveProject`](../../operations/mutations/archive-project.md)  **mutation** · [`createFolder`](../../operations/mutations/create-folder.md)  **mutation** · [`CreateProjectInput`](../inputs/create-project-input.md)  **input** · [`folder`](../../operations/queries/folder.md)  **query** · [`Folder`](../objects/folder.md)  **object** · [`folderCreated`](../../operations/subscriptions/folder-created.md)  **subscription** · [`LegacyProject`](../objects/legacy-project.md)  **object** · [`Node`](../interfaces/node.md)  **interface** · [`Project`](../objects/project.md)  **object** · [`projectChanged`](../../operations/subscriptions/project-changed.md)  **subscription** · [`User`](../objects/user.md)  **object**