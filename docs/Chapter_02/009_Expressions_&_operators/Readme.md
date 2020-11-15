# Expressions & Operators

## Expressions

An expression evaluates into (results) in a single value. Broadly speaking there are two types of expressions.

- EXPRESSIONS THAT JUST ASSIGN A VALUE TO A VARIABLE.
  ```js
  // var or let
  var color = "beige";
  ```
- EXPRESSIONS THAT USE TWO OR MORE VALUES TO RETURN A SINGLE VALUE.
  ```js
  // var or let
  var area = 3 * 2;
  ```

## Operations

Expressions rely on things called operators, they allow programmers to create a single value from one or more values.

Operation types are:

1. **Assignment operators.**
   ```js
   var color = "beige";
   ```
2. **Arithmetic operators.**
   ```js
   var area = 3 * 2;
   ```
3. **String operators.**
   ```js
   var greeting = "Hi " + "Molly";
   ```
4. **Comparison operators.**
   ```js
   var buy = 3 > 5;
   ```
5. **Logical operators.**
   ```js
   var buy = 5 > 3 && 2 < 4;
   ```

point 4 and 5 covered in `chapter 4`

## Arithmetic operators

JavaScript contains the following mathematical operators, which you can use with numbers.

| Name           | Operation | Purpose & notes                                    | Example      | result |
| -------------- | --------- | -------------------------------------------------- | ------------ | ------ |
| ADDITION       | **+**     | Adds one value to another                          | 10 + 5       | 15     |
| SUBTRACTION    | **-**     | Subtracts one value from another                   | 10 - 5       | 5      |
| DIVISION       | **/**     | Divides two values                                 | 10 / 2       | 2      |
| MULTIPLICATION | **\***    | Multiplies t wo values using an `asterisk` not `x` | 10 \* 5      | 50     |
| INCREMENT      | **++**    | Adds one to the current number                     | i = 10; i++; | 11     |
| DECREMENT      | **--**    | Subtracts one from the current number              | i = 10; i--; | 9      |
| MODULUS        | **%**     | Divides two values and returns the remainder       | 10 % 3       | 1      |

## Order of execution

We have to take care of those rules with arithmetic operations:

1. Multiplication and division are performed before addition or subtraction.
   ```js
       total 2 + 4 * 10; // Result ??
   ```
2. Parentheses are first calculated even before multiplications or division.
   ```js
   total = (2 + 4) * 10; // result ??
   ```

```js
// Ahmed write them c02/js/arithmetic-operator Program
```

## String operator

There is just one string operator: the **+** symbol. It is used to join the strings on either side of it.

**ES5**

```js
var firstName = "Ivy ";
var lastName = " Stone";
var fullName = firstName + lastName; // Ivy Stone
```

**ES6**

```js
let firstName = "Ivy ";
let lastName = " Stone";
let fullName = `${firstName} ${lastName}`;
```

## Mixing number and strings together

When you place quotes around a number, it is a string (not a numeric data type), `and you cannot perform addition operations on strings`

```js
var costl = "7";
var cost2 = "9 ";
var total = costl + cost2; // '79' as string not a number
```

If you try to add a numeric data type to a string, then the number becomes part of the string.

```js
var number = 12;
var street = "Ivy Road";
var add = number + street; // '12Ivy Road'
```

If you try to use any of the other arithmetic operators on a string, then the value that results is usually a value called `NaN` means not a number.

```js
var score = "seven ";
var score2 = " nine";
var total = score * score2; // NaN
```

```js
// Ahmed write them c02/js/string-operator Program
```

---

### References and Terms:

> :information_source: Read more about [Camel case](https://en.wikipedia.org/wiki/Camel_case)
> :information_source: Read more about [Snake case](https://en.wikipedia.org/wiki/Snake_case)
