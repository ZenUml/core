Since 1.0.63

# Highlighting messages
The renderer will highlight an `Interaction` based on the value of `cursor` in the store.
For example, for DSL `A.x B.y`, if `cursor` is between [0, 2], `A.x` is highlighted in
the diagram; if `cursor` is between [4, 6], `B.y` is highlighted. 
