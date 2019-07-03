const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('537966671810527235').roles.find("name", "DrTriCk").setColor("RANDOM");
  };
  setInterval(lol, 600);
});

//client.on("ready", () => { // كود رينبو
  //function lol() {
   // client.guilds.get('529465701430329346').roles.find("name", "color").setColor("RANDOM");
 // };
  //setInterval(lol, 9000);
//});

//client.on("ready", () => { // كود رينبو
 // function lol() {
   // client.guilds.get('529465701430329346').roles.find("name", "colors").setColor("RANDOM");
 // };
  //setInterval(lol, 9000);
//});



////////////////تجربه اكواد


  //client.on('message', msg => {//msg
   // if (msg.content === 'الوان') {
    //  msg.channel.send({file : "https://cdn.discordapp.com/attachments/529768402751979530/546967017568075776/colors.png"})
   // }
  //});

  //client.on('message', msg => {//msg
  //  if (msg.content === 'الالوان') {
    //  msg.channel.send({file : "https://cdn.discordapp.com/attachments/529768402751979530/546967017568075776/colors.png"})
   // }
  //});

// client.on('message', message => {
     //     let args = message.content.split(' ').slice(1);
   //if(message.content.split(' ')[0] == 'لون'){
    //       const embedd = new Discord.RichEmbed()
    // .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   //.setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
   //.setColor(`ff0000`)
 
   // if(!isNaN(args) && args.length > 0)
   
 
//if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 // var a = message.guild.roles.find("name",`${args}`)
             //   if(!a)return;
//const embed = new Discord.RichEmbed()
                   
  //   .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   //.setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
 
  // .setColor(`${a.hexColor}`)
//  message.channel.sendEmbed(embed);
 ////         if (!args)return;
//setInterval(function(){})
          //        let count = 0;
           //       let ecount = 0;
       // for(let x = 1; x < 201; x++){
           
        //    message.member.removeRole(message.guild.roles.find("name",`${x}`))
         
           // }
            //    message.member.addRole(message.guild.roles.find("name",`${args}`));
       
           
  //  }
//});















// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
