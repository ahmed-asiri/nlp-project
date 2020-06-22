const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


const port = process.env.PORT || 3000;


app.listen(3000, () => console.log(`Listening on port ${port}`));

