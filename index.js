require('dotenv').config();

const Discord = require('discord.js');

const moment = require('moment');

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

      const Glitch = client.users.cache.get('777941752794447903');
      const Derkz = client.users.cache.get('1059885904522653778');

      const currentTime = moment().format('HH:mm:ss');

      Glitch.send('> Olá <@777941752794447903>, o ' + `<@1059937554050318447>` + ' foi iniciado com sucesso!' + '```' + `🕐 Horário: ${currentTime}` + '```');
      Derkz.send('> Olá <@1059885904522653778>, o ' + `<@1059937554050318447>` + ' foi iniciado com sucesso!' + '```' + `🕐 Horário: ${currentTime}` + '```');
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
client.on('messageCreate', function (message) {
    if (message.content === "guiven")
    message.send(':nerd:')
    message.send('https://cdn.discordapp.com/attachments/1059558028879339590/1064643916118360184/Screenshot_2.png')
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