import 'dotenv/config'
import { Client, Collection, Events } from 'discord.js'
import { handleCommands } from './handlers/commands.js'
const TOKEN = process.env.TOKEN

const client = new Client({ intents: 53608447 })

client.commands = new Collection()

handleCommands(client)

client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`)
  client.user.setActivity('/convertir', { type: 'WATCHING' })
})

client.login(TOKEN)

// Bot by piicuu on Discord --- https://carloscapo.com
