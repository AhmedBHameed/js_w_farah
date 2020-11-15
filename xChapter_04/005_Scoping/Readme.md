# Scoping

The scope of a variable is the region of your program in which it is defined. Traditionally, JavaScript defines only two scopes `global` and `local`.

- Global scope: A variable with global scope can be accessed from within any part of the JavaScript code.
- Local scope: A variable with a local scope can be accessed from within a function where it is declared.

## Global vs Local scopes

Let us take the example bellow:

**ES5**

```js
var num = 10;
function test() {
  var num = 100;
  console.log("value of num in test() " + num); // 100
}
console.log("value of num outside test() " + num); // 10
test();
```

## JavaScript is Dynamic type

JavaScript is an un-typed language. This means that a JavaScript variable can hold a value of any data type. Unlike many other languages, you don't have to tell JavaScript during variable declaration what type of value the variable will hold. The value type of a variable can change during the execution of a program and JavaScript takes care of it automatically. This feature is termed as `dynamic typing`.

---

### References and Terms:

> :gem: Read more about [Static & Dynamic type](https://www.sitepoint.com/typing-versus-dynamic-typing/).
