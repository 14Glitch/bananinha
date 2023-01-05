const Event = require('../../structures/Event')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }

    run = async () => {
        this.client.registryCommands()
        await this.client.connectToDatabase()

        // this.client.manager.init(this.client.user.id)
    }
}