require('dotenv').config();

// const Discord = require("discord.js");
const { Discord, MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require("discord.js");


const moment = require('moment');
const wait = require('node:timers/promises').setTimeout;

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
});


client.on('messageCreate', message => {

  if (message.content === "<@1059937554050318447>") {
    let userColor = message.member.displayHexColor;
    let userName = message.author.username;
    let autor = message.member;
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('suporte')
                .setLabel('❓')
                .setStyle('SECONDARY'),
            new MessageButton()
                .setCustomId('comandos')
                .setLabel('📂')
                .setStyle('SECONDARY')
        );


    message.channel.send(
      {
        ephemeral: true,
        embeds: [
            {
                fields: [
                    {
                        name: `👋 | Olá ${userName}!`,
                        value: `Como posso te ajudar?`
                    }
                ],
                color: userColor,
                timestamp: new Date(),
            }

        ],
        components: [row]
    }
    ).then( () => {

      let coletor = message.channel.createMessageComponentCollector();

      coletor.on('collect', async c => {
        if (c.customId === 'suporte') {
          await c.deferUpdate();
          await wait(2000);
          await message.channel.send('Confira o privado :wink:!');
          autor.send('suporte');

        }
        
      })
      coletor.on('collect', async c => {
        if (c.customId === 'comandos') {
          await c.deferUpdate();
          await wait(2000);
          await message.channel.send('Confira o privado :wink:!');
          autor.send('comandos');

        }
        
      })
      

        


    });
  }

});

client.on('messageCreate', message => {
  if (message.content === "quando a buceta descansa") {
      message.channel.send('> É ai que o cu trabalha :D');
  }
});

client.on('messageCreate', message => {
  if (message.content === "tomioka") {
      message.channel.send('https://tenor.com/view/shinobu-kocho-giyu-tomioka-slap-funny-demon-slayer-gif-23833785');
  }
});

client.on('messageCreate', message => {
  if (message.content === "guiven") {
      message.channel.send(':nerd:');
      message.channel.send('https://cdn.discordapp.com/attachments/1059558028879339590/1064643916118360184/Screenshot_2.png');
  }
});


client.on("ready", () => {
  client.user.setPresence({ status: 'idle' });

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
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
      type: "LISTENING",
    }), 5000);
  } else {
    setInterval(() => client.user.setActivity(`${activitie[i++ % activitie.length]}`, {
      type: "LISTENING",
    }), 5000);
  }
});

client.login(process.env.BOT_TOKEN)