const years = document.querySelector(".years");
const tbody = document.querySelector("tbody");
let movies;

(function setYearsRange(startingYear) {
  const currentYear = new Date().getFullYear();
  const diffYears = currentYear - startingYear;
  if (!startingYear || diffYears <= 0) {
    throw new Error(
      "Starting year is invalid!! starting year should be older that current year."
    );
    return;
  }
  const year = new Date().getFullYear();
  for (let i = startingYear; i <= currentYear; i++) {
    let op = document.createElement("option");
    op.value = i;
    op.textContent = i;
    if (year === i) {
      op.selected = true;
    }
    years.appendChild(op);
  }
})(1900);

function httpClient(options) {
  var xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url);
  xhr.seenBytes = 0;
  var fraction = "";

  xhr.onreadystatechange = function() {
    if (xhr.readyState > 2) {
      var newData = xhr.responseText.substr(xhr.seenBytes);
      // process newData
      fraction += newData;
      xhr.seenBytes = xhr.responseText.length;
    }
  };
  xhr.addEventListener("loadend", loadEnd);

  function loadEnd(e) {
    options.success(fraction);
  }
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(options.payload));
}

function onClick(event) {
  console.log(event.target.getAttribute("value"));
}

httpClient({
  method: "GET",
  url: "http://localhost:9001/movies",
  success: res => {
    const moviesObj = JSON.parse(res);
    movies = moviesObj;
    moviesObj.forEach((movie, index) => {
      const tr = document.createElement("tr");
      const movieYear = document.createElement("td");
      const movieName = document.createElement("td");
      const movieActionButton = document.createElement("td");
      const action = document.createElement("button");
      movieYear.textContent = movie.Release_Date.split(" ")[2];
      movieName.textContent = movie.Title;
      action.textContent = "Get Movie Image";
      action.value = `${movieYear.textContent};${movieName.textContent}`;
      action.onclick = onClick;
      movieActionButton.appendChild(action);
      tr.appendChild(movieYear);
      tr.appendChild(movieName);
      tr.appendChild(movieActionButton);
      tbody.appendChild(tr);
    });
  }
});

httpClient({
  method: "POST",
  url: "http://localhost:9001/movie-poster",
  payload: [
    {
      year: 1916,
      title: "Intolerance"
    },
    {
      year: 1954,
      title: "20,000 Leagues Under the Sea"
    }
  ],
  success: res => console.log("TEST=>", res)
});
