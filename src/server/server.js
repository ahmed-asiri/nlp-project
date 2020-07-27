const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
var aylien = require("aylien_textapi");
const dotenv = require("dotenv");

dotenv.config({path: __dirname + '/../../.env'});
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/", express.static( __dirname + "/../../dist"));
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

app.post("/nlp", (req, res) => {
  textapi.sentiment({
    'text': req.body.message
  }, function(error, response) {
    if (error === null) {
      console.log(response);
      res.send(response);
    }
  });
});


const port = process.env.PORT || 5000;

app.listen(3000, () => console.log(`Listening on port ${process.env.PORT}`));