const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
