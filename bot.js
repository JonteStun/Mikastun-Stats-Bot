const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildPresences
]
});

const SERVER_ID = '1235297416878751764';

client.once('ready', () => {
console.log(`Bot ist online als ${client.user.tag}`);

```
const server = client.guilds.cache.get(SERVER_ID);

if (!server) {
    console.log('Server nicht gefunden.');
    return;
}

console.log(`Server: ${server.name}`);
console.log(`Mitglieder: ${server.memberCount}`);
```

});

client.login(process.env.DISCORD_TOKEN);

