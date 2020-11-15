# SUBMITTING DATA OF FORM

example found in **c8/js/js-post.js**

From the example we a function tht can be found also in Jquery called `serialize()`. It will do the following:

- Select all of the information from the form.
- Put it into a string ready to send to server (If server handle url only).
- Encodes characters that cannot be used in a query string (Useful for url parameters).

## LOADING JSON & HANDLING ERRORS

Let us see the following example:

**JavaScript**

```js
var xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState will be 1

xhr.onprogress = function() {
  console.log("LOADING", xhr.readyState); // readyState will be 3
};

xhr.onload = function() {
  console.log("DONE", xhr.readyState); // readyState will be 4
};

xhr.send(null);
```

The **`readyState`** is passing through 4 stages until it become done. The following stages are shown in the table:

| Value | State            | Description                                                   |
| ----- | ---------------- | ------------------------------------------------------------- |
| 0     | UNSENT           | Client has been created. open() not called yet.               |
| 1     | OPENED           | open() has been called.                                       |
| 2     | HEADERS_RECEIVED | send() has been called, and headers and status are available. |
| 3     | LOADING          | Downloading; responseText holds partial data.                 |
| 4     | DONE             | The operation is complete.                                    |

JavaScript provide us with concise event called `onreadystatechange` which can be triggered when state is changing. From that info we can write the code as follow:

**JavaScript**

```js
var xhr = new XMLHttpRequest();

xhr.open("GET", "http://www.mozilla.org/", true);

xhr.onreadystatechange = function(event) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log("Error", xhr.statusText);
    }
  }
};

xhr.send(null);
```

Also we can see **`state`** of the response which can be many values and each value has it's own representation and meaning. The important to know is that from `400` and above is error. below is success.

TODO Implement server that produce error. with example

### References and Terms:

> :gem: Read more about [HTTP code state](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) take a look to the codes and understand them. Most familiar codes are 200, 204, 206, 400, 401, 404. 405, 500.
