let Discord = require("discord.js")
let client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

// Message event reads every new message
client.on("message", message => {
  if (message.content === "ping")
  {
    message.channel.send("pong")
  }
})

client.login("YOUR TOKEN HERE")
