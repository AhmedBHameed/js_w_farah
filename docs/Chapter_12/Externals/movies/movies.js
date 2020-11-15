// https://v2.sg.media-imdb.com/suggestion/b/big_hero_6.json

const express = require("express");
const { httpClient } = require("./http-client/http-client.service");
const lo = require("lodash");
const { get, first } = lo;
const app = new express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.post("/movie-poster", (req, res) => {
  const payload = get(req, "body");
  Promise.all(
    payload.map(mReq => {
      return new Promise((resolve, reject) => {
        let y = get(mReq, "year");
        const title = get(mReq, "title");
        if (!title && !y) {
          resolve({
            error: `Invalid request!! [title, year] fields are mandatory!`
          });
          return;
        }
        const movieNames = decodeURIComponent(title).replace(/\s/g, "_");
        const url = `https://v2.sg.media-imdb.com/suggestion/${movieNames
          .charAt(0)
          .toLowerCase()}/${movieNames}.json`;
        // console.log("URL=>", url);
        httpClient
          .get(url)
          .then(movieInfo => {
            // y = y.split("")[0];
            //   res.send({ [title]: movieInfo.d[0].i.imageUrl });
            const moviesInYear = get(movieInfo, "d");
            const imgs = moviesInYear.filter(ob => {
              // console.log(ob.y);

              return ob.y == y;
            });

            if (imgs.length) {
              resolve({ [title]: get(first(imgs), "i.imageUrl") });
              return;
            }
            resolve({
              error: `Invalid request!! with movie title "${title}" of year "${y}"!`
            });
          })
          .catch(err => {
            reject({
              error: `Invalid request!! ${err}`
            });
          });
      });
    })
  )
    .then(data => {
      res.send(data);
    })
    .catch(err => res.status(500).send(err));
});

app.get("/movies", (req, res) => {
  const movies = require("./movies.json");
  res.send(movies);
});
app.listen(9001, () => {
  console.log("Server started at http://localhost:9001");
});
