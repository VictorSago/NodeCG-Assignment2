const express = require("express");

const app = express();


app.use('/users', (req, res, next) => {
  console.log("This is the first middleware.");
  let rstring = "<h2>You're on the \"users\" page</h2>"
  rstring += "<p>To go to the Main page click on this <a href='/'>link</a>.</p>"
  res.send(rstring);
});

app.use('/', (req, res, next) => {
  console.log("This is the second middleware.");
  let rstring = "<h2>You're on the \"Main\" page</h2>";
  rstring += "<p>Go to the <a href='/users'>Users</a> page.</p>"
  res.send(rstring);
});

app.listen(3000);
