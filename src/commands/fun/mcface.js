const Command = require("../../structures/Command");

const { Discord, MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require("discord.js");


module.exports = class Avatar extends Command {
    constructor(client) {
        super(client, {
            name: "mcface",
            description: "Mostra seu rosto ou o rosto de qualquer usuário do Minecraft.",
            options: [
                {
                    name: "nick",
                    type: "STRING",
                    description: "Skin.",
                    required: true,
                },
            ],
        });
    }

    run = async(interaction) => {
        let opt = interaction.options.getString("nick");

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('Download')
                .setURL('https://mc.heads.net/skin/' + opt)
                .setStyle('LINK'),
        );

        

        return interaction.reply({
            ephemeral: true,
            embeds: [
                {
                    fields: [
                        {
                            name: `🖼️ | Aqui está a cabeça de ${opt}`,
                            value: ` - Clique [AQUI](https://mc-heads.net/avatar/${opt}) para baixar a imagem.`,
                        }
                    ],
                    color: 'RANDOM',
                    image: {
                        url: `https://mc-heads.net/avatar/${opt}`
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'Clique no botão para baixar a skin!',
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    
                    }
                }
    
            ],
            components: [row]
            
        })
            
    };
};