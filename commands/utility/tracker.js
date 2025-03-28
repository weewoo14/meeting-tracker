const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Adds the replied message to a new channel'),
        
    async execute(interaction){
        await interaction.reply("Hello World!");
    },

};