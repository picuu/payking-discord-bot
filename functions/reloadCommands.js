import 'dotenv/config'
import { REST, Routes } from 'discord.js'
import fs from 'node:fs'
const { TOKEN, CLIENT_ID } = process.env

const commands = []
const commandsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandsFiles) {
  const command = await import(`../commands/${file}`)

  if ('data' in command && 'execute' in command) commands.push(command.data.toJSON())
  else console.warn(`[WARNING] Command at ${file} is missing data or execute property`)
}

const rest = new REST().setToken(TOKEN)

async function updateCommands () {
  try {
    console.log(`[INFO] Started refreshing ${commands.length} application (/) commands`)

    const data = await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands }
    )

    console.log(`[INFO] Successfully reloaded ${data.length} application (/) commands.`)
  } catch (e) {
    console.error(e)
  }
}

updateCommands()
