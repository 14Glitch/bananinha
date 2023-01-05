const Command = require("../../structures/Command");

module.exports = class Avatar extends Command {
    constructor(...args) {
        super(...args, {
            name: 'avatar',
            description: 'Mostra seu avatar ou o avatar de qualquer usuário.',
            slashCommand: true,
            options: [
                { 
                name: 'usuário', 
                type: 'USER', 
                description: 'Selecione algum usuário, caso deseje resgatar o avatar do mesmo.', 
                required: false 
            }
            ]
            
        });
    };

    run = (interaction) => {
        try {
            const member = interaction.options.getMember('usuário') || interaction.member;
            if (!member) return interaction.reply('**Este membro não existe!**');

            if (interaction.options.length > 0) {
                return interaction.reply({
                    embeds: [
                        {
                            title: `Aqui está o avatar de ${member.user.username}! 🖼️`,
                            color: 'RED',
                            image: {
                                url: member.user.displayAvatarURL({ dynamic: true, size: 4096 })
                            },
                            timestamp: new Date(),
                            footer: {
                                text: interaction.guild.name,
                                icon_url: interaction.guild.iconURL({ dynamic: true })
                            }
                        }
                    ]
                });
            } 
            else {
                return interaction.reply({
                    embeds: [
                        {
                            title: `Aqui está o avatar de ${member.user.username}! 🖼️`,
                            color: 'RED',
                            image: {
                                url: member.user.displayAvatarURL({ dynamic: true, size: 4096 })
                            },
                            timestamp: new Date(),
                            footer: {
                                text: interaction.guild.name,
                                icon_url: interaction.guild.iconURL({ dynamic: true })
                            }
                        }
        
                    ]
                });
            };
        } catch (error) {
            console.error(error);
            return interaction.reply(`Ocorreu um erro, tente novamente.`);
        };
    };
};