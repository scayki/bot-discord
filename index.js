const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const fs = require('node:fs');
const path = require('node:path');

// Carrega todos os arquivos de comandos
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

// Criação do cliente do Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Criação da coleção para armazenar os comandos
client.commands = new Collection();

// Carregar todos os comandos da pasta "commands"
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausente`);
  }
}

// Quando o cliente estiver pronto
client.once(Events.ClientReady, (c) => {
  console.log(`Pronto! Login realizado como ${c.user.tag}`);
});

// Login no cliente
client.login(TOKEN);

// Evento para quando uma interação for criada (comando)
client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isStringSelectMenu()){
      const selected = interaction.values[0]
      if (selected == "javascript"){
        await interaction.reply("Documentação do javascript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript")
      }else if (selected == "python"){
        await interaction.reply("Documentação do python: https://docs.python.org/3/")
  }else if (selected == "c#"){
    await interaction.reply("Documentação do c#: https://learn.microsoft.com/pt-br/dotnet/csharp/")
  }else if (selected == "discord.js"){
    await interaction.reply("Documentação do discord: https://discord.js.org/docs/packages/discord.js/main")
}
  }

  if (!interaction.isChatInputCommand()) return; // Verifica se a interação é um comando de entrada

  const command = interaction.client.commands.get(interaction.commandName); // Obtém o comando a partir do nome

  if (!command) {
    console.error('Comando não encontrado');
    return;
  }

  try {
    await command.execute(interaction); // Executa o comando
  } catch (error) {
    console.error(error); // Log de erro
    await interaction.reply('Houve um erro ao executar este comando');
  }
});
