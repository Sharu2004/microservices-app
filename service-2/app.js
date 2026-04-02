const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Service 2 updated");
});

app.listen(3000, () => {
  console.log("Service 2 running on port 3000");
});
