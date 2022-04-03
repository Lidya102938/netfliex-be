const express = require("express");
const app = express();
const cors = require("cors")
const User = require("./routes/user");
const Movies = require("./routes/movies");

app.use(express.json());
app.use(cors())

app.use(User);
app.use(Movies);

app.listen(3001, () => console.log("Listening at port: " + 3001));
