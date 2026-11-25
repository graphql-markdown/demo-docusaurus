# ProjectEvent



A change delivered to subscribers watching a project.


```graphql
type ProjectEvent {
  type: ProjectEventType!
  project: Project!
  actor: User
  occurredAt: DateTime!
}
```


### Fields

#### `ProjectEvent.type` · [`ProjectEventType!`](../enums/project-event-type.md) **non-null** **enum** 
The kind of change that occurred.


#### `ProjectEvent.project` · [`Project!`](./project.md) **non-null** **object** 
The project in its state after the change.


#### `ProjectEvent.actor` · [`User`](./user.md) **object** 
The user who triggered the change, when known.


#### `ProjectEvent.occurredAt` · [`DateTime!`](../scalars/date-time.md) **non-null** **scalar** 
When the change occurred.




### Example


```graphql
{
  "type": "UPDATED",
  "project": {
    "id": "project_01",
    "name": "Mobile Refresh",
    "status": "ACTIVE"
  },
  "occurredAt": "2026-09-05T10:15:00Z"
}
```




### Returned By

[`projectChanged`](../../operations/subscriptions/project-changed.md)  **subscription**