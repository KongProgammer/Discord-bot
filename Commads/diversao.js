//DIVERSAO

const Discord = require("discord.js");
 
 
   exports.run = async (bot, message, args) => {
 
var list = [
'COLOQUE O LINK DO GIF EX https://media3.giphy.com/media/gw3IWyGkC0rsazTi/giphy.gif',
  'LINK1',
  'LINK2', 
  'link3'
];
 
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para '); // tu pode mudar a frase toma cuidado nao tirar os aspas 
}
 
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('COLOQUE O TITULO') // coloque o titulo
        .setColor('#random') // tu pode mudar a cor
        .setDescription(`${message.author} A FRESE EX SOCOU  ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('A FRASE QUE VAI FICAR EM BAIXO') // coloque a frese
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
   
   
   // como usar esse comando >> {prefix}nome @user EX !socar @uer EX2 !beijar @user etc... 
