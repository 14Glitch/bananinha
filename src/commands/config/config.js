const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'config',
            description: 'Configurar dados do servidor no bot.',
            requireDatabase: true,
            options: [{
                type: 'SUB_COMMAND_GROUP',
                name: 'welcome',
                description: 'Configurações de sistema de boas-vindas.',
                options: [{
                    type: 'SUB_COMMAND',
                    name: 'canal_entrada',
                    description: 'Configurar o canal onde a mensagem de boas-vindas será enviada.', 
                    options: [{
                        type: 'CHANNEL',
                        name: 'canal',
                        description: 'Canal de texto onde a mensagem será enviada',
                        require: true
                    }]
                }]
            }]
        })
    } 
    run = (interaction) => {

        const subCommandGroup = interaction.options.getSubcommandGroup()
        const subCommand = interaction.options.getSubcommand()

        require(`../../subCommands/config/${subCommandGroup}/${subCommand}`)(this.client, interaction)
    }
}
