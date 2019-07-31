const express = require("express");
const graphqlHTTP = require("express-graphql");
const port = process.env.PORT || 5000;
const schema = require("./schema.js");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();
const cors = require('cors');
const path = require('path');

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

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
