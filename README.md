# Creating the bot
Hi, first off what youre gonna want to do create youre bot. Go to https://discord.com/developers/applications and make a new appication, then press "bot" and create a new bot Then copy youre bot secret.

Do NOT unDEr AnY cIrCUSTancES gIVe AnY ONE tHIS ToKEN NO ONE!!!




# Getting youre bot up and running

Ok, so now put this is youre terminal 

```js
const Discord = require('discord.js');
const client = new Discord.Client();
client.login('<bot.secret.stuff>');
```
like i mentioned before Do NOT unDEr AnY cIrCUSTancES gIVe AnY ONE tHIS ToKEN NO ONE!!!


# Adding commands

ok all you did was make youre bot online pfffft.

heres a latacy command


```js
client.on('message', async message => {
if(message.content === 'gimmy ping')
        message.channel.send("calculating the ping of the bot....").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            var clientPing = Math.round(client.pi);
            m.edit(`tottally not slacking :smile:`).then(msg => msg.edit(`***:ping_pong:*** the bots ping is ${Math.round(client.ws.ping)}ms`)({
            timeout: 3000
        }))
        })
    });
```
# Ok now you need real commands but first you need a command handeler

```js
client.config = {
  prefix: 'gimmy '
}

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});
```
