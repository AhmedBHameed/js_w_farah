# ES6 - Variables

A `variable`, by definition, is “a named space in the memory” that stores values. In other words, it acts as a container for values in a program. Variable names are called `identifiers`.

- Identifiers can include both, characters and digits. However, the identifier cannot begin with a digit.
- Identifiers cannot include special symbols except for underscore (\_) or a dollar sign (\$).
- Identifiers cannot be keywords. They must be unique.
- Identifiers are case sensitive. Identifiers cannot contain spaces.

## Type Syntax

A variable must be declared before it is used. `ES5` syntax used the `var` keyword to achieve the same. The ES5 syntax for declaring a variable is as follows.

**ES5**

```js
var variable_name;
```

ES6 introduces the following variable declaration syntax:

**ES6**

```js
let variable_name
const variable_name2
```

## Variable initialization

When you define a new variable you can assign default value with it. It is used when some pre-configuration required in you application.

```js
let name = "Mohameed";
console.log("The value in the variable is: " + name); // The value in the variable is Mohameed
```

## JavaScript is Dynamic type

JavaScript is an un-typed language. This means that a JavaScript variable can hold a value of any data type. Unlike many other languages, you don't have to tell JavaScript during variable declaration what type of value the variable will hold. The value type of a variable can change during the execution of a program and JavaScript takes care of it automatically. This feature is termed as `dynamic typing`.

---

### References and Terms:

> :gem: Read more about [Static & Dynamic type](https://www.sitepoint.com/typing-versus-dynamic-typing/).
