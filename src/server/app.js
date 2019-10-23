const express = require("express");
const data = require("./data.json");
const cors = require("cors");
const port = process.env.PORT || 3000;
const path = require('path');



const app = express();
app.use(cors());

app.get("/api/todos", function(_req, res) {
  res.status(200).send(data);
});
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../../build', 'index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));
