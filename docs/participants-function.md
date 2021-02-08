# Shall `Participants` return with `Starter`?

`Participants` function takes a context as an input and returns
all the participants of this context. It should return the `from`
not the `Starter` unless `Starter` IS the `from`.

Related logic is in `ToCollector`. We can initialise `descendantTos`
with `from` before `walker.walk`. We need to consider that `from`
may be included in participant declaration and even in group.
So `onParticipant` must overwrite that.

`context` has the knowledge of `from`. So far we only expose the
`getInheritedFrom` function. It will be convenient that it returns
`from` directly.
 
 
 However, we also need the `InheritedFrom` and `ProvidedFrom`
  to calculate the translateX for Interactions.

