// by kong


const db = require('quick.db') // usando a livraria quick.db
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'afk',
    run : async(client, message, args) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`Você ativou seu AFK\n**Motivo:**${content}`) // tu pode mudar a frese toma cuidado nao apagar o [$ {content}] se nao vai dar erro
        
        .setColor("#FF8C00")  // voce pode mudar a cor so entrar algum site para a cor java script e so pegar o codico e copiar ou escreve "RANDOM" para a cor 'aleatoria'
        
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(embed)
    }
}

 
// como usar o comando >>  {prefixo}afk [o motivo]   EX: !afk foi estudar 




