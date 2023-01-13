require('dotenv').config();

const Discord = require('discord.js');

const Client = require('./src/structures/Client')

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})
//message
client.once('ready', function () {
    if (client.guilds.cache.size > 1) {
        console.log(`* Olá, eu sou o ${client.user.tag}! 🍌\n* Estou em ${client.guilds.cache.size} servidores. 💻`)
      } else {
        console.log(`* Olá, eu sou o ${client.user.tag}! 🍌\n* Estou em ${client.guilds.cache.size} servidor. 💻`)
      }
})
client.on('messageCreate', function (message) {
    if (message.content === "Oi")
    message.reply('Olá, tudo bem?')
})
client.on('messageCreate', function (message) {
    if (message.content === "quando a buceta descansa")
    message.reply('é ai que o cu trabalha')
})
client.on('messageCreate', function (message) {
    if (message.content === "tomioka")
    message.reply('https://tenor.com/view/shinobu-kocho-giyu-tomioka-slap-funny-demon-slayer-gif-23833785')
})


client.on("ready", () => { 
    let activitie = [
        `${client.guilds.cache.size} servidor!`,
        `${client.users.cache.size} Membros!`
    ]

    let activities = [
      `${client.guilds.cache.size} servidores!`,
      `${client.users.cache.size} Membros!`
    ],
      i = 0;

      if (client.guilds.cache.size > 1) {
        setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
            status: "dnd",
            type: "LISTENING",
        }), 5000); 
      } else {
        setInterval( () => client.user.setActivity(`${activitie[i++ % activitie.length]}`, {
            status: "dnd",
            type: "LISTENING",
        }), 5000); 
      }
  });

client.login(process.env.BOT_TOKEN)