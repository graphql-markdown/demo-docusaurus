# ProjectEventType



The kind of change that occurred on a project.


```graphql
enum ProjectEventType {
  CREATED
  UPDATED
  ARCHIVED
}
```


### Values

#### `ProjectEventType.CREATED`  
The project was created.


#### `ProjectEventType.UPDATED`  
One or more project fields were updated.


#### `ProjectEventType.ARCHIVED`  
The project was archived.




### Member Of

[`projectChanged`](../../operations/subscriptions/project-changed.md)  **subscription** · [`ProjectEvent`](../objects/project-event.md)  **object**