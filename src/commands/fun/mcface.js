const Command = require("../../structures/Command");

const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

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

        const Embed = new MessageEmbed()

            .setColor("RED")
            .addField(`🧊 | Aqui está a skin de ${opt}!`,
             ` - Clique [AQUI](https://mc-heads.net/avatar/${opt}) para baixar.`)
            .setImage(`https://mc-heads.net/avatar/` + opt);

            await interaction.reply({ content: 'Aqui está a skin desejada.', ephemeral: true });

            interaction.channel.send({ embeds: [Embed]});
            
    };
};