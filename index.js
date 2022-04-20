const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./routes/user");
const MyList = require("./routes/mylist");
const Comment = require("./routes/comment");
const Movies = require("./routes/movies");

const path = require("path");

app.use(express.json());
app.use(cors());

app.use("/image", express.static(path.join(__dirname + "/image")));
app.use(User);
app.use(MyList);
app.use(Comment);
app.use(Movies);

app.listen(3001, () => console.log("Listening at port: " + 3001));
