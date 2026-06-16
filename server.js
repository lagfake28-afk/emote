const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔴 তোমার Bot Token এখানে দাও
//const BOT_TOKEN = "YOUR_BOT_TOKEN";

// 🔴 তোমার Telegram Chat ID
const CHAT_ID = "7931320938";

app.post("/send", async (req, res) => {
  const { m1, m2, m3, m4, m5 } = req.body;

  const message = `
📩 New Message:

1: ${m1}
2: ${m2}
3: ${m3}
4: ${m4}
5: ${m5}
  `;

  try {
    await axios.get(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        params: {
          chat_id: CHAT_ID,
          text: message
        }
      }
    );

    res.send("Sent to Telegram ✅");
  } catch (err) {
    res.send("Failed ❌");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));