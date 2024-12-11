import fs from 'node:fs'

export const handleCommands = async (client) => {
  const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

  for (const file of commands) {
    const command = await import(`../commands/${file}`)

    if (command.data && command.execute) {
      client.commands.set(command.data.name, command)
      console.log(`[INFO] Loaded command ${command.data.name}`)
    } else {
      console.warn(`[WARNING] Command at ${file} is missing data or execute method`)
    }
  }
}
