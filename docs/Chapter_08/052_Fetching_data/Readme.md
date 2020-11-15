# FEATCHING OR LOADING DATA OF DIFFERENT TYPES

## 1. FEATCHING HTML

HTML is the easiest type of data to add into a page using Ajax. The browser renders it just like any other HTML. The CSS rules for the rest of the page are applied to the new content.

example found in **c8/js/data-html.js**

**JavaScript**

```js
var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

xhr.onload = function() {
  // When response has loaded
  // The following conditional check will not work locally - only on a server
  if (xhr.status === 200) {
    // If server status was ok
    document.getElementById("content").innerHTML = xhr.responseText; // Update
  }
};

xhr.open("GET", "data/data.html", true); // Prepare the request
xhr.send(null); // Send the request

// NOTE: If you run this file locally
// You will not get a server status
```

## 2. FEATCHING JSON

The request for JSON data uses the same syntax you saw in the requests for HTML and XML data. When the server responds, the JSON will be converted into HTML.

example found in **c8/js/data.json**

**JavaScript JSON**

```js
{
  "events": [
    {
      "location": "San Francisco, CA",
      "date": "May 1",
      "map": "img/map-ca.png"
    },
    {
      "location": "Austin, TX",
      "date": "May 15",
      "map": "img/map-tx.png"
    },
    {
      "location": "New York, NY",
      "date": "May 30",
      "map": "img/map-ny.png"
    }
  ]
}
```

**JavaScript**

```js
var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

xhr.onload = function() {
  // When readystate changes
  // The following conditional check will not work locally - only on a server
  if (xhr.status === 200) {
    // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = "";
    for (var i = 0; i < responseObject.events.length; i++) {
      // Loop through object
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += "<p><b>" + responseObject.events[i].location + "</b><br>";
      newContent += responseObject.events[i].date + "</p>";
      newContent += "</div>";
    }

    // Update the page with the new content
    document.getElementById("content").innerHTML = newContent;
  }
};

xhr.open("GET", "data/data.json", true); // Prepare the request
xhr.send(null); // Send the request

// NOTE: If you run this file locally
// You will not get a server status
```

## WORKING WITH DATA FROM OTHER SERVERS

Ajax works smoothly with data from your own server but, for security reasons - browsers do not load Ajax responses from other domains (known as `cross-domain` requests) (CORS). There are three common workarounds.

1. A `proxy` file on web server which means that the your own server can fetch the file from other server and provide it to the web using server-side languages like .ASP, PHP, Nodejs, Ruby, etc.
2. JSONP (JSON with padding) sometimes written (JSON-P) which meansby adding \<script> element into the page wich loads the JSON data from another server. This works because there is no restrictions on the source of script in a \<script> element.
3. CROSS-ORIGIN resources sharing (CORS). Every time a browser and server communicate, they send information to each other using HTTP headers. `CORS` involves adding extra information to the HTTP headers to let the browser and server know that they should be communicate with each other.

## HOW JSONP WORKS

1. First, the page must include a function to process the JSON data. It then requests the data from the server using a \<script> element.
2. The server returns a file that calls the function that processes the data . The JSON data is provided as an argument to that function.

example found in **external/c8/js/jsonp.js**
