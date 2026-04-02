const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("CI/CD file try");
});

app.listen(3000, () => {
  console.log("Service 1 running on port 3000");
});
