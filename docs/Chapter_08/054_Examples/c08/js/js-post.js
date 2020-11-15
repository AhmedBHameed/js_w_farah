// $('#register').on('submit', function(e) {           // When form is submitted
//   e.preventDefault();                               // Prevent it being sent
//   var details = $('#register').serialize();         // Serialize form data
//   $.post('register.php', details, function(data) {  // Use $.post() to send it
//     $('#register').html(data);                    // Where to display result
//   });
// });

let form = document.getElementById("register");

var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object
xhr.onload = function() {
  // When readystate changes
  // The following conditional check will not work locally - only on a server
  if (xhr.status === 200) {
    // If server status was ok
    responseObject = JSON.parse(xhr.response);
    console.log(responseObject);
  }
};
// Send the request

form.onsubmit = e => {
  e.preventDefault();
  let data = serialize(form);
  alert(data);
  xhr.open("POST", "data/data.json", true); // Prepare the request
  xhr.send(data);
};

/*!
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */
let serialize = function(form) {
  // Setup our serialized data
  var serialized = [];

  // Loop through each field in the form
  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i];

    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (
      !field.name ||
      field.disabled ||
      field.type === "file" ||
      field.type === "reset" ||
      field.type === "submit" ||
      field.type === "button"
    )
      continue;

    // If a multi-select, get all selections
    if (field.type === "select-multiple") {
      for (var n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized.push(
          encodeURIComponent(field.name) +
            "=" +
            encodeURIComponent(field.options[n].value)
        );
      }
    }

    // Convert field data to a query string
    else if (
      (field.type !== "checkbox" && field.type !== "radio") ||
      field.checked
    ) {
      serialized.push(
        encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value)
      );
    }
  }

  return serialized.join("&");
};
