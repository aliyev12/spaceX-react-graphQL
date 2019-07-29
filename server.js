const express = require("express");
const graphqlHTTP = require("express-graphql");
const port = process.env.PORT || 5000;
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphql: true
  })
);

app.listen(port, () => console.log(`Server running on port ${port}`));
