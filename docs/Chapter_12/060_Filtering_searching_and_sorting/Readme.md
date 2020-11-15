# FILTERING, SEARCHING AND SORTING

If your pages contain a lot of data, there are three techniques that you can use to help your users to find the content they are looking for.

- `FILTERING`
  Filtering lets you reduce a set of values, by selecting the ones that meet stated criteria.

- `SEARCHING`
  Search lets you show the items that match one or more words the user specifies.

- `SORTING`
  Sorting lets you reorder a set of items on the page based on criteria (for example, alphabetically).

## JAVASCRIPT ARRAY METHODS

An array is a kind of object. All arrays have the methods listed below. their property names are index numbers. You will often see arrays used to store complex data (including other objects).

| WHAT'S DOING     | Method      | Description                                                                |
| ---------------- | ----------- | -------------------------------------------------------------------------- |
| `ADDING ITEMS`   | `push()`    | Adds one or more items to end of array and returns number of items in it   |
|                  | `unshift()` | Adds one or more items to start of array and returns new length of it      |
| --------         | -------     | -------                                                                    |
| `REMOVING ITEMS` | `pop()`     | Removes last element from array (and returns the element)                  |
|                  | `shift()`   | Removes first element from array (and returns the element)                 |
| --------         | -------     | -------                                                                    |
| `ITERATING`      | `forEach()` | Executes a function once for each element in array                         |
|                  | `some()`    | Checks if some elements in array pass a test specified by a function       |
|                  | `every()`   | Checks if all elements in array pass a test specified by a function        |
| --------         | -------     | -------                                                                    |
| `COMBINING`      | `concat()`  | Creates new array containing this array and other arrays/values            |
| --------         | -------     | -------                                                                    |
| `FILTERING`      | `filter()`  | Creates new array with elements that pass a test specified by a function   |
| --------         | -------     | -------                                                                    |
| `REORDERING`     | `sort()`    | Reorders items in array using a function (called a compare function)       |
|                  | `reverse()` | Reverses order of items in array                                           |
| --------         | -------     | -------                                                                    |
| `MODIFYING`      | `map()`     | Calls a function on each element in array & creates new array with results |

> We need to understand two thing which are:
>
> - `Objects in array`
> - `Object as properties or "Entities"`

**Object in array**

```js
var people = [
  { name: "Casey", rate: 70, active: true },
  { name: "Camille", rate: 80, active: true },
  { name: "Gord on", rate: 75, active: false },
  { name: "Nigel", rate: 120, active: true }
];
```

**Entities or Object as properties**

```js
var people = {
  Casey: { rate: 70, active: true },
  Camille: { rate: 80, active: true },
  Gordon: { rate: 75, active: false },
  Nigel: { rate: 120, active: true }
};
```

## (ARRAYS VS. OBJECTS) CHOOSING THE BEST DATA STRUCTURE

In order to represent complex data you might need several objects. Groups of objects can be stored in arrays or as properties of other objects. When deciding which approach to use, consider how you will use the data.

A. OBJECTS IN AN ARRAY

**When the order of the objects is important.**

Example:

**JavaScript**

```js
var people = [
  { name: "Sam", rate: 70, active: true },
  { name: "John ", rate: 80, active: true },
  { name: "Simon", rate: 75, active: false },
  { name: "Nigel", rate: 120, active: true }
];
```

So to retrieve data you should know the index or to make iteration through the array to know when index you should take:

**JavaScript**

```js
people[1].name;
people[1].rate;
```

B. OBJECTS AS PROPERTIES

**When you want to access objects using their name, they work well as properties of another object (because you would not need to iterate through all objects to find that object as you would in an array).**

Example:

**JavaScript**

```js
var people: {
  Sam: { rate: 70, active: true },
  John: { rate: 80, active: true },
  Simon: { rate: 75, active: false },
  Nigel: { rate: 120, active: true }
};
```

Here you can access using names as properties which can be easer and no iteration needed:

**JavaScript**

```js
people.John.rate;
```
