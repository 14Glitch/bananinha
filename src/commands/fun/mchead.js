const Command = require("../../structures/Command");

const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = class Avatar extends Command {
    constructor(client) {
        super(client, {
            name: "mchead",
            description: "Mostra sua cabeça ou a cabeça de qualquer usuário do Minecraft.",
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

        return interaction.reply({
            ephemeral: true,
            embeds: [
                {
                    fields: [
                        {
                            name: `🖼️ | Aqui está a cabeça de ${opt}`,
                            value: ` - Clique [AQUI](https://mc-heads.net/head/${opt}) para baixar.`,
                        }
                    ],
                    color: 'RANDOM',
                    image: {
                        url: `https://mc-heads.net/head/${opt}`
                    },
                    timestamp: new Date(),
                    footer: {
                        text: interaction.guild.name,
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }
    
            ]
        })

        
    };
};