# skip



Directs the executor to skip this field or fragment when the `if` argument is true.


```graphql
directive @skip(
  if: Boolean!
) on 
  | FIELD
  | FRAGMENT_SPREAD
  | INLINE_FRAGMENT
```


### Arguments

#### `skip.if` · [`Boolean!`](../../types/scalars/boolean.md) **non-null** **scalar** 
Skipped when true.