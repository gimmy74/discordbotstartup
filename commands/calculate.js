const math = require('discord-math');
const Discord = require("discord.js");

module.exports = {
    name: "calculate",
    description: "The bot does math for you",
    run: async (client, message, args) => {
        try {
            if(message.channel.type === "dm") return;
            let num1 = Number(args[0]);
            let operation = args[1];
            let num2 = Number(args[2]);
            
            if (!num1) return message.channel.send('Num1 needs to be specified!');
            if (!operation) return message.channel.send('An operation was not specified!');
            if (!num2) return message.channel.send('Num2 needs to be specified!');
 const emb = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription(`**Answer:** 
      
      ${math.calculate(num1,operation,num2)}
          
          `)
    message.channel.send(emb);
        } catch (e) {
            console.log(e);
        }
    }
}
