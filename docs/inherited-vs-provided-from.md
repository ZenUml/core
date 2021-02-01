There are two ways to decide where the message is from.
One way is to deduce from its parent context - inherited from;
the other way is to explicitly define it from its own context - 
provided from.

## Inherited

Sync message
```
A.m1 {
  // m2 has an "inherited from" as `A`
  m2  
}
```

Async message
```
A.m1 {
  // m2 has an "inherited from" as `A`
  B:m2
}
```

## Provided

Sync message
```
A.m1 {
  // m2 has a "provided from" as `B`
  B->C.m2
  
}
```

Async message
```
A.m1 {
  // m2 has a "provided from" as `B`
  B->C:m2
}
```

It is allowed to have a `provided from` that equals to its 
`inherited from`.

