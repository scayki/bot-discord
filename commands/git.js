const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {

    data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("relembra comandos do git"),

    async execute(interaction){
        const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Comandos do Git')
     
      .addFields(
        {name : '\u200B', value: '\u200B'},
        { name: 'git init', value: 'Inicia um novo repositório Git no diretório atual.' },
        { name: 'git clone <url>', value: 'Clona um repositório remoto.' },
        { name: 'git status', value: 'Exibe o estado atual do repositório (modificações não commitadas, etc).' },
        { name: 'git add <arquivo>', value: 'Adiciona um arquivo específico para a área de stage.' },
        { name: 'git commit -m "<mensagem>"', value: 'Faz um commit com uma mensagem.' },
        { name: 'git push', value: 'Envio de commits locais para o repositório remoto.' },
        { name: 'git pull', value: 'Baixa alterações de um repositório remoto.' },
        { name: 'git log', value: 'Mostra o histórico de commits.' },
        { name: 'git branch', value: 'Exibe todas as branches locais.' },
        { name: 'git checkout <branch>', value: 'Muda para uma branch existente.' },
      )
      .setTimestamp()
      .setFooter({ text: 'Git Command Help' });
        await interaction.reply({embeds: [exampleEmbed]})
    }
}