# This (It is a keyword) (Its called context also)

The keyword `this` is commonly used inside functions and objects. Where the function is declared, alters what `this` means. It always refers to one object, usually the object in which the function operates.

```js
let JS = {
  name: "JavaScript",
  age: 24,
  introduce: function () {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old.`;
  },
};

console.log(JS.introduce());
```

> :gem::gem::gem: It is very important to know the effect of `fat arrow function` since the later is not writing `this` keyword which can break or giving unexpected results.

Check this example out and guess the results:

```js
var width = 600;
var shape = { width: 300 };

var showWidth = function () {
  console.log(this.width);
};

shape.getWidth = showWidth;
shape.getWidth();
```

What do you think about the result ???

---

### References and Terms:

> :gem: read more about it [here](https://blog.pragmatists.com/the-many-faces-of-this-in-javascript-5f8be40df52e).
