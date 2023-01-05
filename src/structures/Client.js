const { Client } = require('discord.js')

const { readdir, readdirSync } = require('fs')
const { join } = require('path')

const { connect } = require('mongoose')

const mongoose = require('mongoose')
const nameDB = mongoose.connection; //Recolhe o nome atual da DataBase.

const Models = require('../database/models/Models')

// const erelManager = require('./Manager')
const conn = mongoose.connection;
module.exports = class extends Client {
    constructor (options) {
        super(options)

        this.commands = []
        this.loadCommands()
        this.loadEvents()
        // this.manager = erelManager(this)
    }

    registryCommands() {
        //this.guilds.cache.get('836693007821570088').commands.set(this.commands)
        this.application.commands.set(this.commands)
    }

    loadCommands(path = 'src/commands') {

    const categories = readdirSync(path)

    for (const category of categories) {
    const commands = readdirSync(`${path}/${category}`)

    for(const command of commands) {
        const commandClass = require(join(process.cwd(), `${path}/${category}/${command}`))
        const cmd = new (commandClass)(this)

        this.commands.push(cmd)
             }
        }
    }
    loadEvents(path = 'src/events') {
        const categories = readdirSync(path)

        for (const category of categories) {
        const events = readdirSync(`${path}/${category}`)
    
        for(const event of events) {
            const eventClass = require(join(process.cwd(), `${path}/${category}/${event}`))
            const evt = new (eventClass)(this)
            
            this.on(evt.name, evt.run)
        }
            }
    }
    async connectToDatabase () {
        
        mongoose.set('strictQuery', false); //Remover warn mongoose.
        
        const connection = await connect(process.env.MONGO_URL);
        console.log(`* Database "${nameDB.name}" conectada com sucesso! ✅`);

        this.db = { connection, ...Models }
    }

    }

