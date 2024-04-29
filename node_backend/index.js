const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


app.post("/authenticate", async (req, resp) => {
  const { username } = req.body;
  // Get user or create user
  try {
    const isResp = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username},
      { headers: { "Private-Key": "dfe31ee8-2159-4176-ae37-1333619f8387" } }
    );
    return resp.status(isResp.status).json(isResp.data);
  } 
  catch (error) 
  {
    return resp.status(error.response.status).json(error.response.data);
  }
});

app.listen(4001);