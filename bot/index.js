const {AkairoClient, CommandHandler} = require("discord-akairo")
const axios = require("axios");

class MyClient extends AkairoClient {
    constructor () {
        super({
            ownerID: ""
        }, {
            disableMentions: "everyone"
        })
    }
}