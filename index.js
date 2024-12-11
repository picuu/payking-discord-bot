import 'dotenv/config'
import { Client, Collection } from 'discord.js'
import { handleCommands } from './handlers/commands.js'
import { handleEvents } from './handlers/events.js'
const TOKEN = process.env.TOKEN

const client = new Client({ intents: 53608447 })

client.commands = new Collection()

handleEvents(client)
handleCommands(client)

client.login(TOKEN)

// Bot by piicuu on Discord --- https://carloscapo.com
