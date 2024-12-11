const ready = {
  name: 'ready',

  once: true,

  execute: async (client, interaction) => {
    console.log(`Ready! Logged in as ${client.user.tag}`)
    client.user.setActivity('/convertir', { type: 'WATCHING' })
  }
}

const { name, once, execute } = ready
export { name, once, execute }
