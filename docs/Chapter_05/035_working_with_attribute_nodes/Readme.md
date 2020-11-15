# Working with attribute nodes

Once you have an element node, you can use other properties and methods on that element node to access and change its attributes.

![working_with_attributes](./working_with_attributes.png)

| Method              | Description                                      |
| ------------------- | ------------------------------------------------ |
| `getAttribute()`    | Get the value if an attribute                    |
| `hasAttribute()`    | Checks if element node has a specified attribute |
| `setAttribute()`    | Sets the value if an attribute                   |
| `removeAttribute()` | Removes an attribute from an element node        |

| Property    | Description                               |
| ----------- | ----------------------------------------- |
| `className` | Gets the value of the **class** attribute |
| `id`        | Gets the value of the **id** attribute    |
| etc..       |                                           |

## CHECK FOR AN ATTRIBUTE AND GET ITS VALUES

example found in <a target="_blank" href="Chapter_05/Examples/c05/get-attribute.html">**Chapter_05/Examples/c05/get-attribute.html**</a>

**HTML**

```HTML
<ul>
  <li id="one" class="hot"><em>fresh</em> figs</li>
  <li id="two" class="hot">pine nuts</li>
  <li id="three" class="hot">honey</li>
  <li id="four">balsamic vinegar</li>
</ul>
```

```js
var firstItem = document.getElementById("one"); // Get first list item
if (firstItem.hasAttribute("class")) {
  // If it has class attribute
  var attr = firstItem.getAttribute("class"); // Get the attribute

  // Add the value of the attribute after the list
  var el = document.getElementById("scriptResults");
  el.innerHTML = "<p>The first item has a class name: " + attr + "</p>";
}
```

## CREATING ATTRIBUTES & CHANGING THEIR VALUES

example found in <a target="_blank" href="Chapter_05/Examples/c05/set-attribute.html">**Chapter_05/Examples/c05/set-attribute.html**</a>

```js
var firstItem = document.getElementById("one"); // Get the first item
firstItem.className = "complete"; // Change its class attribute

var fourthItem = document.getElementsByTagName("li").item(3); // Get fourth item
// NOTE: The following line should say fourthItem (not el2)
fourthItem.setAttribute("class", "cool"); // Add an attribute to it
```

## REMOVING ATTRIBUTES

example found in <a target="_blank" href="Chapter_05/Examples/c05/remove-attribute.html">**Chapter_05/Examples/c05/remove-attribute.html**</a>
for the same HTML above

```js
var firstItem = document.getElementById("one"); // Get the first item
if (firstItem.hasAttribute("class")) {
  // If it has a class attribute
  firstItem.removeAttribute("class"); // Remove its class attribute
}
```

---

## References and Terms:

> :information_source: [jQuery](https://jquery.com/) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
