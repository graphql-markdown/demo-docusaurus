# projectChanged



Receive an event whenever a project changes in the workspace.


```graphql
projectChanged(
  projectId: ID
  types: [ProjectEventType!]
): ProjectEvent!
```


### Arguments

#### `projectChanged.projectId` · [`ID`](../../types/scalars/id.md) **scalar** 
Limit events to a single project.


#### `projectChanged.types` · [`[ProjectEventType!]`](../../types/enums/project-event-type.md) **list** **enum** 
Limit events to these change kinds.




### Type

#### [`ProjectEvent`](../../types/objects/project-event.md) **object** 
A change delivered to subscribers watching a project.




### Example


```graphql
subscription WatchProject($projectId: ID, $types: [ProjectEventType!]) {
  projectChanged(projectId: $projectId, types: $types) {
    type
    occurredAt
    project {
      id
      name
      status
    }
    actor {
      name
    }
  }
}
```