# Array of objects & Objects in array

Now it is the time for real fun :video_game: :video_game: :video_game:.

You can combine arrays and objects to create complex data structures. Arrays can store a series of objects (and remember their order). Objects can also hold arrays (as values of their properties).

**1. Arrays in object**

```js
let costs = {
  room1: {
    items: [420, 40, 10]
  },
  room2: {
    items: [460, 20, 20]
  },
  room3: {
    items: [230, 0, 0]
  },
  room4: {
    items: [620, 150, 60]
  }
};
```

**2. Objects in array**

```js
let costs = [
  { accommodation: 420, food: 40, phone: 10 },
  { accommodation: 460, food: 20, phone: 20 },
  { accommodation: 230, food: 0, phone: 0 },
  { accommodation: 620, food: 150, phone: 60 }
];
```

---

### References and Terms:

> :gem: read more about it [here](https://blog.pragmatists.com/the-many-faces-of-this-in-javascript-5f8be40df52e).
