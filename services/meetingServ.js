const { default: axios } = require("axios");
const jwt = require("jsonwebtoken");

const payload = {
  iss: "VdK72Ly1Tp2z3DjlfiTTMw",
  exp: new Date().getTime() + 5000,
};
const token = jwt.sign(payload, "yKfXPJT8SUAVuZGnrV1JYMoOK0D9fOdOgf0y");

const meetingdetails = {
  topic: "Demo Meeting",
  type: 2,
  start_time: "2019-06-14T10: 21: 57",
  duration: "45",
  timezone: "Europe/Madrid",
  agenda: "test",

  recurrence: { type: 1, repeat_interval: 1 },
  settings: {
    host_video: "true",
    participant_video: "true",
    join_before_host: "False",
    mute_upon_entry: "False",
    watermark: "true",
    audio: "voip",
    auto_recording: "cloud",
  },
};

const createMeeting = async () => {
  const response = await axios.post(
    "https://api.zoom.us/v2/users/me/meetings",
    meetingdetails,
    {
      headers: {
        Authorization: "Bearer " + token,
        "User-Agent": "Zoom-api-Jwt-Request",
        "content-type": "application/json",
      },
    }
  );
  return response.data.join_url;
};

module.exports = { createMeeting: createMeeting };
