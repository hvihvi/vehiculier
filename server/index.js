const express = require("express");
const app = express();

const mockVehicules = require("./mock/mockVehicules");

app.get("/", function(req, res) {
  res.send(mockVehicules.vehiculeList);
});

app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});
