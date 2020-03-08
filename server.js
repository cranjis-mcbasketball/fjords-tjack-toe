var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.resolve(__dirname, "public")));
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening at ${process.env.PORT || 3000}`)
});