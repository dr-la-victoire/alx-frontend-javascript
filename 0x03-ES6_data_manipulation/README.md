# JavaScript ES6 Data Structures and Array Methods

## Table of Contents

- [Arrays](#arrays)
  - [Using map, filter, and reduce](#using-map-filter-and-reduce)
- [Typed Arrays](#typed-arrays)
- [Set](#set)
- [Map](#map)
- [WeakSet](#weakset)
- [WeakMap](#weakmap)

## Arrays

An array is a list-like object used to store multiple values in a single variable. Arrays are zero-indexed, meaning the first element is at index 0.

### Example
```
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple

// Adding an element
fruits.push("date");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

// Iterating over elements
fruits.forEach(fruit => console.log(fruit));
```

### Using map, filter, and reduce

#### map

The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

#### filter

The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

```
let numbers = [1, 2, 3, 4];
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // Output: [2, 4]
```

#### reduce

The `reduce` method executes a reducer function on each element of the array, resulting in a single output value.

```
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10
```

## Typed Arrays

Typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. They come in different types such as `Int8Array`, `Uint8Array`, `Float32Array`, etc.

### Example
```
let buffer = new ArrayBuffer(16); // Create a buffer of 16 bytes
let int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // Output: 42
```

## Set

A `Set` is a collection of unique values. Each value can occur only once in a set.

### Example
```
let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5); // Duplicate values are ignored
console.log(mySet.has(1)); // Output: true
console.log(mySet.size); // Output: 2

// Iterating over elements
mySet.forEach(value => console.log(value));
```

## Map

A `Map` is a collection of key-value pairs where the keys can be of any type.

### Example
```
let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(42, 'Answer to the Ultimate Question');
console.log(myMap.get('name')); // Output: Alice
console.log(myMap.has(42)); // Output: true

// Iterating over elements
myMap.forEach((value, key) => console.log(`${key}: ${value}`));
```

## WeakSet

A `WeakSet` is a collection of objects. The objects in a `WeakSet` are held weakly, meaning if there are no other references to an object stored in the `WeakSet`, the object can be garbage collected.

### Example
```
let weakSet = new WeakSet();
let obj = {name: 'Alice'};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true

obj = null; // The object is eligible for garbage collection
```

## WeakMap

A `WeakMap` is a collection of key-value pairs where the keys are objects and the values can be arbitrary values. The keys in a `WeakMap` are held weakly.

### Example
```
let weakMap = new WeakMap();
let keyObj = {};
weakMap.set(keyObj, 'some value');
console.log(weakMap.get(keyObj)); // Output: some value

keyObj = null; // The key object is eligible for garbage collection
```

## Summary

- **Array:** Use for storing collections of data.
- **Typed Array:** Use for handling binary data.
- **Set:** Use for storing unique values.
- **Map:** Use for key-value pairs with keys of any type.
- **WeakSet:** Use for collections of objects that should not prevent garbage collection.
- **WeakMap:** Use for storing metadata about objects without preventing garbage collection.