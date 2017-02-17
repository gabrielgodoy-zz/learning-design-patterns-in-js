# JS Design Patterns

Some practical design patterns adapted to JS 

## Creational Patterns
Revealing Module Pattern
Wrap all functionality in a function and decide what will be public by returning it

### Constructor Pattern
Create objects from functions

### Factory Pattern
A pattern used to simplify object creation

### Singleton Pattern
Used to restrict an object to only one instance  to be shared across the application.

- The Singleton Remembers the last time you used it
- Hands the same instance back
- Node.js uses CommonJS

In Node
Modules in Node CommonJS are cached after the first time they are loaded. Thi means that every call to require("foo") will get exactly the same object returned, if it would resolve to the same file.

If you want to have a module execute code multiple times, then export a function, and call that function.
module.exports = myFunction();

---

## Structural Patterns 
Concerned with how objects are made up and simplify relationships between objects.

- Deal with the relationship of objects
- Extend functionality
- Simplify functionality

### Façade Pattern
Provide a simplified interface to a complicated system
Example jQuery

### Decorator Pattern
Add new functionality to an existing object without being intrusive

### Flyweight Pattern
Conserves memory by sharing portions of an object between objects
- Only usable if you have large number of objects
Sees if an object was used, and reuse that, don't create another one

---

## Behavioural Patterns
How objects relate to each other

### Mediator pattern
Controls communication between objects so neither object has to be coupled to the others.

### Observer pattern
Loosely coupled system
