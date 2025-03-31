const {SlashCommandBuilder} = require('discord.js');
const fs = require('fs').promises;

let scheduleContent;
let scheduleContentArray;

async function loadSchedule() {
    try{
        scheduleContent = await fs.readFile("schedule.txt", "utf8");
        scheduleContentArray = scheduleContent.split("\n").map(line => line.trim());
    } catch (err){
        console.error("Error:", err);
    };
};

(async () => {
    await loadSchedule();
})();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("nextmeeting")
        .setDescription("Finds the next meeting day and when."),
    
        async execute(interaction){
            const currentDate = new Date();
            const curYear = currentDate.getFullYear();
            const curMonth = currentDate.getMonth() + 1;
            const curDay = currentDate.getDate();
            let nextMeeting;

            for (let meet = 0; meet <= scheduleContentArray.length - 2; meet++){
                nextMeeting = scheduleContentArray[meet];
                let meetingDateArray = scheduleContentArray[meet].slice(0,10).split("/");

                let meetingDateMonth = +meetingDateArray[0];
                let meetingDateDay = +meetingDateArray[1];
                let meetingDateYear = +meetingDateArray[2];

                if (curYear > meetingDateYear){
                    continue;
                };

                if (curMonth == meetingDateMonth){
                    if (curDay <= meetingDateDay){
                        break;
                    } else {
                        continue;
                    }
                };

                if (curMonth < meetingDateMonth){
                    break;
                };
                
                
            }
            await interaction.reply(nextMeeting);
        },
};