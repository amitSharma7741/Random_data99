const { Telegraf } = require("telegraf");
require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();

const BOT_TOKEN = process.env.BOT_TOKEN;
// const URL = process.env.URL;
const PORT = process.env.PORT || 5000;

const bot = new Telegraf(BOT_TOKEN);
// bot.telegram.setWebhook(`${URL}/bot${BOT_TOKEN}`);
// app.use(bot.webhookCallback(`/bot${BOT_TOKEN}`));

bot.start((ctx) => {
  let message = ` Hello ${ctx.from.first_name}, Welcome to the my New Bot `;
  bot.telegram.sendMessage(ctx.chat.id, message, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Maths-Fact", callback_data: "Maths-Fact" },
          { text: "Memes", callback_data: "Memes" },
        ],
        [{ text: "Jokes", callback_data: "Jokes" }],
      ],
    },
  });
});

bot.action("Maths-Fact", (ctx) => {
  ctx.answerCbQuery("Your fact is Here");

  axios
    .get("http://numbersapi.com/random/math?json")
    .then((res) => {
      bot.telegram.sendMessage(ctx.chat.id, res.data.text, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Maths-Fact", callback_data: "Maths-Fact" },
              { text: "Memes", callback_data: "Memes" },
            ],
            [{ text: "Jokes", callback_data: "Jokes" }],
          ],
        },
      });
      // console.log(res.data.text);
    })
    .catch((e) => {
      console.log(e);
    });
});

bot.action("Jokes", (ctx) => {
  ctx.answerCbQuery("Your Jokes is Here");

  axios
    .get(
      "https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json"
    )
    .then((res) => {
      let randomNum = Math.floor(Math.random() * 350);
      let jokesData = res.data[randomNum];

      let finalJoke =
        "Your Jokes is Here" +
        "\n" +
        "\n" +
        ` Joke: " ${jokesData.setup}" ` +
        "\n" +
        "\n" +
        `punchline: "${jokesData.punchline}"`;

      bot.telegram.sendMessage(ctx.chat.id, finalJoke, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Maths-Fact", callback_data: "Maths-Fact" },
              { text: "Memes", callback_data: "Memes" },
            ],
            [{ text: "Jokes", callback_data: "Jokes" }],
          ],
        },
      });
      // console.log(res.data[0]);
    })
    .catch((e) => {
      console.log(e);
    });
});

bot.action("Memes", (ctx) => {
  ctx.answerCbQuery("Your Meme is Here");

  axios
    .get("https://meme-api.herokuapp.com/gimme")
    .then((res) => {
      bot.telegram.sendPhoto(ctx.chat.id, res.data.url, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Maths-Fact", callback_data: "Maths-Fact" },
              { text: "Memes", callback_data: "Memes" },
            ],
            [{ text: "Jokes", callback_data: "Jokes" }],
          ],
        },
      });
      // console.log(res.data.title);
      // console.log(res.data.url);

      // bot.telegram.sendPhoto(ctx.chat.id,res.data.url)
    })
    .catch((e) => {
      console.log(e);
    });
});

bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));

app.get("/", (req, res) => {
  res.send(" your bot is running");
});

app.listen(PORT, () => {
  console.log(`server \is running \on port${PORT}`);
});

bot.launch();
