# include



Directs the executor to include this field or fragment only when the `if` argument is true.


```graphql
directive @include(
  if: Boolean!
) on 
  | FIELD
  | FRAGMENT_SPREAD
  | INLINE_FRAGMENT
```


### Arguments

#### `include.if` · [`Boolean!`](../../types/scalars/boolean.md) **non-null** **scalar** 
Included when true.