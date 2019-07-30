const express = require("express");
const graphqlHTTP = require("express-graphql");
const port = process.env.PORT || 5000;
const schema = require("./schema.js");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const cors = require('cors');

const app = express();

// Allow cross origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Server running on port ${port}`));
