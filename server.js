const express = require("express");
const app = express();
const port = 8000;


app.use(express.static(__dirname + "/static"));

// Esto establece la ubicación donde express buscará la vista ejs
app.set('views', __dirname + '/views'); 
// Ahora configuremos el motor de visualización para que express sepa que estamos usando ejs en lugar de otro motor de jade
app.set('view engine', 'ejs');

// req is shorthand for request
// res is shorthand for response
app.get("/cars", (req, res) => {
  res.render("cars");
});

app.get("/cats", (req, res) => {
  res.render("cats");
});

app.get("/cars/new", (req, res) => {
  res.render("form");
});

app.get("/", (req, res) => {
  res.render("index");
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

