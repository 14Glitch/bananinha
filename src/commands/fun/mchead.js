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

        const Embed = new MessageEmbed()

        .setColor("RED")
        .addField(`🧊 | Aqui está a skin de ${opt}!`,
         ` - Clique [AQUI](https://mc-heads.net/head/${opt}) para baixar.`)
        .setImage(`https://mc-heads.net/head/mictazz01`);

            await interaction.reply({ content: 'Aqui está a skin desejada.', ephemeral: true });

            interaction.channel.send({ embeds: [Embed]});
            
    };
};