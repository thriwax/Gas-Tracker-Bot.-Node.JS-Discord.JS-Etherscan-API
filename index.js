const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');

const prefix = '-';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.login('YOUR-TOKEN')

const link =
  "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=AJNUI74A3Q7ASVN6J7EKG6NBZSBSCP8X14";

const fetchData = async () => {
  const result = await fetch(link);
  const data = await result.json();

  const {
    result: {suggestBaseFee, SafeGasPrice, ProposeGasPrice, FastGasPrice}
  } = data

  const total = [suggestBaseFee, SafeGasPrice, ProposeGasPrice, FastGasPrice]
  return total
};

fetchData();

client.on('ready', () => {
    console.log('Bot is online!');

    client.user.setActivity(`Subscribe to Mr Template`, { type: 'WATCHING'});

})

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    const messageArray = message.content.split(' ');
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];


if (command === 'gas') {
    const basefee = await fetchData()
    console.log(basefee);
    message.channel.send(
`
Ethereum Gas Tracker:

⛽ Gas Base Fee: ${basefee[0]} GWEI
⛽ Safe Gas Price: ${basefee[1]} GWEI
⛽ Propose Gas Price: ${basefee[2]} GWEI
⛽ Fast Gas Price: ${basefee[3]} GWEI
`)
    }
})




















