# Variables

Variable is like a glass of water that you can put/take something into/from it and use it when you need it. So basically data can be stored in variables.

## How to declare a variable?

Before you can use a variable, your need to announce that you want to use it. This involves creating the variable and giving it a name. In programming world they call it `variable declaration`.

![variable](variable.png)

You can declare and assign value at the same time

![assign](assign.png)

## Rules for naming variables

1. Variable name begin with a letter, dollar sign (\$), or underscore (\_). It must `NOT` begin with a number.
2. The name can contain letters, numbers, dollar sign (\$), or an underscore (\_). Note that you must not use a dash(-) or a period (.) in a variable name.
3. You cannot use `keywords` or reserved words. for example `var`.
4. All variables are case sensitive. `Case-Sensitive` which mean that `firstname` is not equal to `firstName`.
5. Use a name that describes the kind of information that the variable stores.
6. If your variable name is made up of more than one word, use either `camel-case` or `snake-case`

Can you specify the valid variable names:

| Variable name | Is Valid |
| ------------- | -------- |
| firstName     | Yes      |
| Var#          | No       |
| first_name    | Yes      |
| num1          | Yes      |
| first name    | No       |
| first-name    | No       |
| 1number       | No       |
| \$result      | Yes      |

## Variable data types

JavaScript distinguishes between `numbers` `strings`, and `true` or `false` values known as `Booleans`, Functions, Arrays, Objects.

For now we will see only 3 major type which are `strings`,`numbers`,`boolean`.

```js
let variableNumber = 0.75;
let variableString = "I love JS!";
let variableBool1 = true;
let variableBool2 = false;
```

Ahmed write them c02/js/numeric-variable Program

Ahmed write them c02/js/string-variable Program

Ahmed write them c02/js/string-with-quotes Program

Ahmed write them c02/js/boolean-variable Program

Ahmed write them c02/js/shorthand-variable Program

Ahmed write them c02/js/update-variable Program

## Using quotes inside a string

Sometimes you will want to use a double or single quote mark within a string. and this will related to the internal string.

In ES6 there is a special string forming called the `back tick` which is used to set variables in between string without using `+` to concatenating stings

---

### References and Terms:

> :information_source: Read more about [Camel case](https://en.wikipedia.org/wiki/Camel_case)

> :information_source: Read more about [Snake case](https://en.wikipedia.org/wiki/Snake_case)
