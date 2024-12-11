import fs from 'node:fs'

export const handleEvents = async (client) => {
  const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'))

  for (const file of eventFiles) {
    const event = await import(`../events/${file}`)

    if (event.once) client.once(event.name, (...args) => event.execute(client, ...args))
    else client.on(event.name, (...args) => event.execute(client, ...args))
  }
}
