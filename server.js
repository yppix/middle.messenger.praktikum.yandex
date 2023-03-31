const express = require('express');
const fallback = require('express-history-api-fallback');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist/'));
app.use(fallback(__dirname + '/dist/index.html'))
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Chatty listening on port ${PORT}!`);
});
