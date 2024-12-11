export async function executeCommand (client, interaction) {
  const command = interaction.client.commands.get(interaction.commandName)

  if (!command) return await interaction.reply({ content: 'Este comando está desactualizado!', ephemeral: true })

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)

    if (interaction.replied || interaction.deferred) await interaction.followUp({ content: 'Ha ocurrido un error al ejecutar el comando.', ephemeral: true })
    else await interaction.reply({ content: 'Ha ocurrido un error al ejecutar el comando.', ephemeral: true })
  }
}
