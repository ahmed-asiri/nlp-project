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
app.use(bodyParser.urlencoded());
app.use("/dist", express.static( __dirname + "/../../dist"));
app.use("/", express.static( __dirname + "/../client/views"));
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });


app.get("/nlp", (req, res) => {
    textapi.classify({
        url: 'http://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile'
      }, function(error, response) {
        if (error === null) {
          response['categories'].forEach(function(c) {
            res.send(c);
            console.log(c);
          });
        }
      });
});


const port = process.env.PORT || 5000;

app.listen(3000, () => console.log(`Listening on port ${process.env.PORT}`));