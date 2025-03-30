const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		if (interaction.guild) {
			// If interaction is from a guild, send guild-related info
			await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
		} else {
			// If interaction is not from a guild (likely a DM)
			await interaction.reply("This command can only be used in a server.");
		}
	},
};
