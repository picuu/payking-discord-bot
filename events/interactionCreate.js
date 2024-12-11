import { executeCommand } from '../functions/executeCommand.js'

const interactionCreate = {
  name: 'interactionCreate',

  once: false,

  execute: async (client, interaction) => {
    if (interaction.isChatInputCommand()) executeCommand(client, interaction)
  }
}

const { name, once, execute } = interactionCreate
export { name, once, execute }
