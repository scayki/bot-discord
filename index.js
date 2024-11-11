const {Client, Events, GatewayIntentBits} = require('discord.js')
const dotenv = require('dotenv')

dotenv.config()
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env

const client = new Client({intents:[GatewayIntentBits.Guilds]})


client.once(Events.ClientReady, c=>{
  console.log(`pronto! login Realizado como ${c.user.tag}`)
})

client.login(TOKEN)





/*import { Client, GatewayIntentBits, Events } from 'discord.js';

import dotenv from 'dotenv'
dotenv.config();
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c =>{
  console.log(`Pronto, login realizado como: ${c.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(TOKEN);*/