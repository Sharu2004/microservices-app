const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Service 1 is ok");
});

app.listen(3000, () => {
  console.log("Service 1 running on port 3000");
});
