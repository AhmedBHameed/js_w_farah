# FILTERING, SEARCHING AND SORTING

If your pages contain a lot of data, there are three techniques that you can use to help your users to find the content they are looking for.

- `Filtering`
  - Filtering lets you reduce a set of values, by selecting the ones that meet stated criteria.
- `Searching`.
  - Search lets you show the items that match one or more words the user specifies.
- `Sorting`.
  - Sorting lets you reorder a set of items on the page based on criteria (for example, alphabetically).

## JAVASCRIPT ARRAY METHODS

An array is a kind of object. All arrays have the methods listed below. their property names are index numbers. You will often see arrays used to store complex data (including other objects).

1. **Adding Items**

| Methods     | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `push()`    | Adds one or more items to end of array and returns number of items in it |
| `unshift()` | Adds one or more items to start of array and returns new length of it    |

2. **Removing Items**

| Methods   | Description                                                |
| --------- | ---------------------------------------------------------- |
| `pop()`   | Removes last element from array (and returns the element)  |
| `shift()` | Removes first element from array (and returns the element) |

3. **Iteration Items**

| Methods     | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| `forEach()` | Executes a function once for each element in array                   |
| `some()`    | Checks if some elements in array pass a test specified by a function |
| `every()`   | Checks if all elements in array pass a test specified by a function  |

4. **Combining Items**

| Methods    | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| `concat()` | Creates new array containing thi s array and other arrays/values |

5. **Filtering Items**

| Methods    | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `filter()` | Creates new array with elements that pass a test specified by a function |

6. **Reordering Items**

| Methods     | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| `sort()`    | Reorders items in array using a function (called a compare function) |
| `reverse()` | Reverses order of items in array                                     |

7. **Modifying Items**

| Methods | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| `map()` | Calls a function on each element in array & creates new array with results |

## ARRAYS VS. OBJECTS CHOOSING THE BEST DATA STRUCTURE

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
