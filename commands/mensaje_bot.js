import 'dotenv/config'
import { EmbedBuilder, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } from 'discord.js'
const { MAIN_COLOR } = process.env

const mensajeBot = {
  name: 'mensaje_bot',

  data: new SlashCommandBuilder()
    .setName('mensaje_bot')
    .setDescription('Envía un mensaje a través del bot.')
    .setContexts(InteractionContextType.Guild)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option => option
      .setName('mensaje')
      .setDescription('Texto que enviará el bot')
      .setRequired(true)),

  execute: async (interaction) => {
    const message = interaction.options.getString('mensaje', true)

    const embed = new EmbedBuilder()
      .setColor(MAIN_COLOR)
      .setDescription(message)

    await interaction.channel.send({ embeds: [embed] })
    await interaction.reply({ content: 'Mensaje enviado correctamente.', ephemeral: true })
  }
}

const { name, data, execute } = mensajeBot
export { name, data, execute }
