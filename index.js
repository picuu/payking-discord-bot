import 'dotenv/config'
import { Client, Events } from 'discord.js'
const TOKEN = process.env.TOKEN

const client = new Client({ intents: 53608447 })

client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`)
  client.user.setActivity('/convertir', { type: 'WATCHING' })
})

client.login(TOKEN)

// Bot by piicuu on Discord --- https://carloscapo.com
