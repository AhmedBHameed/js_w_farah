# DATA FORMATS

The response to an Ajax request usually comes in one of three formats:

- `HTML`
- `XML`
- `JSON`

Below is a comparison of these formats.

**Benefits**

| HTML                                                         | XML                                                         | JSON                                                                    |
| ------------------------------------------------------------ | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1. Easer to write, request, and display.                     | 1. Flexible data format and represent complex structures.   | 1. It can be called from any domain.                                    |
| 2. The data sent from the server goes stright into the page. | 2. It works well with different platforms and applications. | 2. It is more concise than both                                         |
|                                                              | 3. It is processed using the same DOM methods as HTML       | 3. IT is commonly used with JavaScript since it is inspired from Object |

**Drawbacks**

| HTML                                                                               | XML                                                                                                           | JSON                                                                                                        |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1. The server must produce the HTML in a format that is ready for use on you page. | 1. It is considered a verbose language because the tags add a lot of extra characters to the data being sent. | 1. The syntax is not forgiving. A missed quote, comma, or colon can break the file.                         |
| 2. It is not well-suited for use in applications other than web browser            | 2. The request must come from the same domain as the rest of the page.                                        | 2. Because it is a JavaScript it can contain a malicious content (XSS). Use JSON from trusted sources only. |
| 3. The request must come from the same domain.                                     | 3. It can require a lot of code to process the result.                                                        |                                                                                                             |

## XML: EXTENSIBLE MARKUP language

XML looks a lot like HTML, but the tags contain different words. The purpose of the tags is to describe the kind of data that they hold.

**XML**

```xml
<?xml version="l.O" encoding="utf-8" ?>
<events>
  <event>
    <location>San Francisco , CA</location>
    <date>May l</date>
    <map>img/map-ca.png</map>
  </event>
  <event>
    <location>Austin, TX</location>
    <date>May 15</date>
    <map>img/map-tx.png</map>
  </event>
  <event>
    <location>New York, NY</location>
    <date>May 30</date>
    <map>img/map-ny.png</map>
  </event>
</events>
```
