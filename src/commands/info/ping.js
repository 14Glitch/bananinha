const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: `Mostra as latências do Bananinha. 🏓`,
        })
    } 
    run = (interaction) => {
        interaction.reply({
            content: `Olá ${interaction.user}.\n\n*Aqui está toda documentação de nossa latência atual.*\n\n**▪️ Gateway Ping:** \`${this.client.ws.ping}ms\`. :alarm_clock: \n**:black_small_square: API Ping:** \`${interaction.createdTimestamp - interaction.createdTimestamp}ms\`. :rocket: \n\n:ping_pong: **PONG!**`,
        })
    }
}
