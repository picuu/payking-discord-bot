import 'dotenv/config'
import { EmbedBuilder, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } from 'discord.js'
const { MAIN_COLOR } = process.env

const convertir = {
  name: 'convertir',

  data: new SlashCommandBuilder()
    .setName('convertir')
    .setDescription('Consultar la cantidad a recibir al relizar un cambio.')
    .setContexts(InteractionContextType.Guild)
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
    .addNumberOption(option => option
      .setName('cantidad')
      .setDescription('Cantidad a convertir')
      .setRequired(true)),

  execute: async (interaction) => {
    const amount = interaction.options.getNumber('cantidad', true)

    if (amount < 1) return interaction.reply({ content: 'La cantidad mínima es de 1€', ephemeral: true })

    const fee = 0.9
    const returnAmount = amount * fee

    const embed = new EmbedBuilder()
      .setColor(MAIN_COLOR)
      .setTitle('Conversión')
      .addFields([
        { name: 'Cantidad', value: `${amount}€` },
        { name: 'Total a recibir', value: `${returnAmount}€` }
      ])
      .setFooter({ text: 'Gracias por confiar en PayKing!' })

    await interaction.reply({ embeds: [embed] })
  }
}

const { name, data, execute } = convertir
export { name, data, execute }
