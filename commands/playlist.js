const {SlashCommandBuilder} = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Ouça a melhor playlist de todas"),

    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/2gGcr4UEBaef5XzDt40B32?si=djSe8Pk4QseJj-cXaH95zg")
    }
}