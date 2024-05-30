# JavaScript ES6 Classes

This guide covers the basics of using classes in JavaScript ES6, including how to define classes, add methods, use static methods, extend classes, and an introduction to metaprogramming and symbols.

## Table of Contents

- [Defining a Class](#defining-a-class)
- [Adding Methods to a Class](#adding-methods-to-a-class)
- [Static Methods](#static-methods)
- [Extending a Class](#extending-a-class)
- [Metaprogramming and Symbols](#metaprogramming-and-symbols)
- [Exporting a Class](#exporting-a-class)

## Defining a Class

A class in JavaScript ES6 is defined using the `class` keyword. A constructor method is used to initialize the object’s properties.

```class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

## Adding Methods to a Class

Methods are functions associated with the class that can operate on instances of the class.

```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

## Static Methods

Static methods are defined on the class itself and not on instances of the class. They are useful for utility functions.

```
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 7)); // Output: 12
```

### Why Use Static Methods?

Static methods are used for functionality that is related to the class but not tied to any particular instance. They can be utility functions that operate on data not specific to an instance.

## Extending a Class

A class can inherit from another class using the `extends` keyword. The subclass inherits properties and methods from the superclass.

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the constructor of the parent class
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Rex", "German Shepherd");
dog1.speak(); // Output: Rex barks.
```

## Metaprogramming and Symbols

Metaprogramming is the practice of writing code that can manipulate other code. In JavaScript, this is often done using Symbols and Reflect.

### Symbols

Symbols are a new primitive type introduced in ES6. They are unique and immutable.

```
const sym = Symbol("description");
console.log(sym); // Output: Symbol(description)
```

Symbols can be used as unique object property keys, which helps in avoiding property name collisions.

```
const mySymbol = Symbol("uniqueKey");

class MyClass {
  constructor() {
    this[mySymbol] = "value";
  }

  getSymbolValue() {
    return this[mySymbol];
  }
}

const instance = new MyClass();
console.log(instance.getSymbolValue()); // Output: value
```

### Reflect

The Reflect object provides methods for interceptable JavaScript operations. These methods are used for defining custom behavior for fundamental language operations.

```
class MyClass {
  constructor(value) {
    this._value = value;
  }
}

const myInstance = new MyClass(42);
console.log(Reflect.get(myInstance, "_value")); // Output: 42
```

## Exporting a Class

Classes can be exported from a module to be used in other files. There are two main ways to export a class: named exports and default exports.

### Named Export

```
// person.js
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// anotherFile.js
import { Person } from "./person.js";

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

### Default Export

```
// person.js
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// anotherFile.js
import Person from "./person.js";

const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```
