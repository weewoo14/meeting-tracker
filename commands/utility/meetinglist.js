const { SlashCommandBuilder } = require('discord.js');
const fs = require("fs").promises;

let scheduleContent;

async function loadSchedule() { 
    try{
        scheduleContent = await fs.readFile("schedule.txt", "utf8");
    } catch (err){
        console.error("Error:", err);
    };
};

(async () => {
    await loadSchedule();

})();


module.exports = {
    data: new SlashCommandBuilder()
        .setName('meetinglist')
        .setDescription('Command to list out all of the meetings.'),
        
    async execute(interaction){
        await interaction.reply(scheduleContent);
    },

};