const Discord = require('discord.js');

const client = new Discord.Client(({ intents: ["GUILDS", "GUILD_MESSAGES" , "GUILD_MEMBERS" , "GUILD_PRESENCES"] }));

client.once('ready' , () => {
    console.log('ani oved ahi');
});

client.on('guildMemberAdd', (member) => {
    member.guild.channels.cache.get('981018015812436061').send( member.user.toString()+ " has been Megidish'ed."); // bot test server id
    member.setNickname(member.user.username+ ' Megidish');
});
client.on('message' , (message) => {
    if(message.author.id == '185801226301079552') {  // alt account id
        message.guild.channels.cache.get('981018015812436061').send( message.author.toString()+ " Eize dafuk hhhhhhh");
    }
});

client.login('');
