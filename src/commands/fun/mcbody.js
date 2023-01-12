const Command = require("../../structures/Command");

const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = class Avatar extends Command {
    constructor(client) {
        super(client, {
            name: "mcbody",
            description: "Mostra seu corpo ou o corpo de qualquer usuário do Minecraft.",
            options: [
                {
                    name: "nick",
                    type: "STRING",
                    description: "Escreva o nome da skin desejada, não esqueça de escrever com as letras maiúsculas ou minúsculas.",
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
             ` - Clique [AQUI](https://mc-heads.net/body/${opt}) para baixar.`)
            .setImage(`https://mc-heads.net/body/` + opt);

            await interaction.reply({ content: 'Aqui está a skin desejada.', ephemeral: true });

            interaction.channel.send({ embeds: [Embed]});
            
    };
};