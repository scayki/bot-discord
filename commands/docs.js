const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

// Criação da ActionRow e do SelectMenu
const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select") // Corrigido para 'setCustomId'
            .setPlaceholder("Nada selecionado") // Corrigido para 'setPlaceholder'
            .addOptions(
                {
                    label: "Javascript",
                    description: "Veja a documentação de Javascript",
                    value: "javascript"
                },
                {
                    label: "Python",
                    description: "Veja a documentação de Python",
                    value: "python"
                },
                {
                    label: "C#",
                    description: "Veja a documentação de C#",
                    value: "c#"
                },
                {
                    label: "discord.js",
                    description: "Veja a documentação de discord.js",
                    value: "discord.js"
                }
            )
    );

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que quiser"),

    async execute(interaction) {
        // Responde com o menu de seleção
        await interaction.reply({ content: "Selecione uma das tecnologias abaixo", components: [row] });
    }
};
