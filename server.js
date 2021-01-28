const express = require("express");
const app = express();
const port = 8000;


app.use(express.static(__dirname + "/static"));


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
