# TRUTHY & FALSY VALUES

Due to type coercion, every value in JavaScript can be treated as if it were true or false; and this has some interesting side effects.

## FALSY TABLE

| Value         | Description                             |
| ------------- | --------------------------------------- |
| false         | The traditional Boolean false           |
| 0             | The number zero                         |
| ''            | Empty string                            |
| 10/'score'    | NaN (Not a Number)                      |
| var highScore | A variable with no value assigned to it |

## Truthy table

| Value     | Description                  |
| --------- | ---------------------------- |
| true      | The traditional Boolean true |
| 1         | Numbers other than zero      |
| 'correct' | String with content          |
| 10/5      | Number calculation           |
| 'true'    | True written in string       |
| '0'       | Zero written as a string     |
| 'false'   | false written as a string    |

## CHECKING EQUALITY & EXISTENCE

### Level 1

| Expression     | Result |
| -------------- | ------ |
| (false == 0)   | true   |
| (false === 0)  | false  |
| ------         | -----  |
| (false == '')  | true   |
| (false === '') | false  |
| ----           | ------ |
| (0 == '')      | true   |
| (0 === '')     | false  |

### Level 2

| Expression           | Result |
| -------------------- | ------ |
| (undefined == null)  | true   |
| (undefined === null) | false  |
| ------               | -----  |
| (null == false)      | false  |
| (undefined == false) | false  |
| (null == 0)          | false  |
| (undefined == 0)     | false  |
| ----                 | ------ |
| (undefined === null) | false  |

### Level 3

| Expression    | Result |
| ------------- | ------ |
| (NaN == null) | false  |
| (NaN == NaN)  | false  |
| (NaN === NaN) | false  |

## SHORT CIRCUIT VALUES

Logical operators are processed left to right. They short-circuit `(stop)` as soon as they have a result - but they return the value that stopped the processing (not necessarily true or false).

| Expression                      | Result    |
| ------------------------------- | --------- |
| var a = ('john' \|\| 'Unknown') | 'john'    |
| var b = ('' \|\| 'Unknown')     | 'Unknown' |
| var c = ('' \|\| {})            | {}        |
| var c = (0 \|\| 1 \|\| 2)       | 1         |

---

### REFERENCES AND TERMS:

> :information_source: If you use a data type JavaScript did not expect, JavaScript tries to make scense of the operation rather than reporting an error. This called `Coercion`
