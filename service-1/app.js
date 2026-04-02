const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("CI/CD SUCCESS");
});

app.listen(3000, () => {
  console.log("Service 1 running on port 3000");
});
