const Discord = require('discord.js');

const client = new Discord.Client(({ intents: ["GUILDS", "GUILD_MESSAGES" , "GUILD_MEMBERS" , "GUILD_PRESENCES"] }));

client.once('ready' , () => {
    console.log('ani oved ahi');
});

client.on('guildMemberAdd', (member) => {
    member.guild.channels.cache.get('186170823806156801').send( member.user.toString()+ " has been Megidish'ed."); // bot test server id
    member.setNickname(member.user.username+ ' Megidish');
});
client.on('message' , (message) => {
    if(message.author.id == '145185932281249792') {  // alt account id
        message.channel.send( message.author.toString()+ " Eize dafuk hhhhhhh loh gadol");
    }
});

client.login(process.env.DISCORD_TOKEN);
