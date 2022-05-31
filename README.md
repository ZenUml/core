# Development

````
yarn install
yarn start
````

# Code Structure
This repository contains both the DSL parser and the renderer.

The parser is generated with Antlr4. You can find the definition at `src/g4`. Generated parser is at `src/generated-parser`. 
Parser enhancement with customised functionalities is in the `src/parser` folder.

Almost everything else under serc are for the renderer. The render is based on VueJs 2.x.
