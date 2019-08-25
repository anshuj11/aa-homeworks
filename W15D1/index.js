const mongoose = require('mongoose');
const User = require("./models/user");
const schema = require("./schema/schema");
// Allows us to parse the json sent to the front end.
const bodyParser = require("body-parser");
const express = require("express");
const expressGraphQL = require('express-graphql');
const app = express();
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Lucky Charms"));
// all requests coming in to `graphql` will be handled
// by the expressGraphQL function from the 'express-graphql' library
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);
//This middleware will parse incoming JSON requests, fail descriptively,
// and make form data available in req.body.
app.use(bodyParser.json());
app.listen(5000, () => console.log('Server is running on port 5000'));

