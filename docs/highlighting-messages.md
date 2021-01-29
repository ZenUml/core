Since 1.0.63

# Highlighting messages
The renderer will highlight an `Interaction` based on the value of `cursor` in the store.
For example, for DSL `A.x B.y`, if `cursor` is between [0, 3], `A.x` is highlighted in
the diagram; if `cursor` is between [4, 7], `B.y` is highlighted. 
