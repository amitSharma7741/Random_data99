# Telgram Bot

Telegram Bots are third-party applications that run inside Telegram. Users can interact with bots by sending them messages, commands, and inline requests. You control your bots using HTTPS requests to our Bot API. [More](https://core.telegram.org/bots)



## Steps to host your Telegram bot
 
 ### 1. Enter [@Botfather](https://t.me/botfather) in the search tab and choose this bot.

![](https://www.spcdn.org/images/En-knowledge_base/chatbots/telegram/create-bot/scr1-min.png).

Note:- official Telegram bots have a blue checkmark beside their name
      
Click “Start” to activate the BotFather bot.

In response, you receive a list of commands to manage bots.

### 2. Choose or type the /newbot command and send it.

![](https://www.spcdn.org/images/En-knowledge_base/chatbots/telegram/create-bot/scr3-min.png)

### 3.Bot Name 
 Choose a name for your bot — your subscribers will see it in the conversation. And choose a username for your bot — the bot can be found by its username in searches. The username must be unique and end with the word “bot.”

![](https://www.spcdn.org/images/En-knowledge_base/chatbots/telegram/create-bot/scr4-min.png)








- [ ] Init a new git repo:
    ```bash
    git init
    ```
- [ ] make **.gitignore** file with following content:
    ```
    node_modules
    ```
- [ ] Login to Heroku:
    ```bash
    heroku login
    ```
- [ ] Create a Heroku app:
    ```bash
    heroku create
    ```
- [ ] Update Heroku config
    ```bash
    heroku config:set --app YourAppId BOT_TOKEN='YOUR BOT TOKEN'
    heroku config:set --app YourAppId BOT_DOMAIN='https://YourAppId.herokuapp.com'
    ```
- [ ] Create a **Procfile** in the root of the bot with the following content:
    ```
   web: node index.js
    ```
- [ ] Finally use git to deploy:
    ```bash
    git add .
    git commit -m 'commit message'
    git push heroku master
    ```

## How to make changes and redeploy the code:
- [ ] Just save all changes.
- [ ] Run following commands:
    ```bash
    git add .
    git commit -m 'commit message'
    git push heroku master
    ```

