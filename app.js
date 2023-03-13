const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');


dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname));

const meetingRoute = require("./routes/meeting");
app.use("/meeting", meetingRoute);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
