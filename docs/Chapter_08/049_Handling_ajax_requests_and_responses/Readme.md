# HANDLING AJAX REQUESTS & RESPONSES

To create an `Ajax` request, browsers use the `XMLHttpRequest` object. When the server responds to the browser's request, the same `XMLHttpRequest` object will process the result.

**JavaScript**

```js
let xhr = new XMLHttpRequest(); // 1
xhr.open("GET", "https://api.thecatapi.com/v1/images/search", true); // 2
xhr.send(); // 3
```

1. An instance of the `XMLHttpRequest` object is created using object constructor notation (Class object).
2. `open()` method prepares the request.
3. `send()` method is the one that sends the prepared request to the server.

## THE RESPONSE

**JavaScript**

```js
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(this);
  }
};
```

## PUT TOGETHER IN EXAMPLE

**JavaScript**

```js
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.thecatapi.com/v1/images/search", true);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.send();
```
