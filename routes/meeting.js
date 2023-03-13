const { response } = require("express");
const express = require("express");
const router = express.Router();
const { createMeeting } = require("../services/meetingServ");

router.get("/", async (req, res) => {
  const meetingDetails = createMeeting()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
