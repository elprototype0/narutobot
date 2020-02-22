const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjgwNTA4MDcwMDgxNTkzNTkz.XlBoHw.SqFJRouQy6EXZuRjG43FyydNgEQ';
const prefix = '!';

bot.on('ready', () =>{
    console.log('Bot online!');
})

//nature
bot.on('message', message=>{
	
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
case 'nature':
    var facts = ["La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)", "La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)", "La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)", "La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)", "Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)"];
    var fact = Math.floor(Math.random() * facts.length);
	var nature = ["Futon","Katon","Raiton","Doton","Suiton"];
	var random = nature[fact];
	if(random === "Futon")
	{
			const embed = new Discord.RichEmbed()
  .setTitle("La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media3.giphy.com/media/LI8ODde4YvExq/giphy.gif?cid=790b761117b14b7973ddd064f3e5ededb4353a33c6d91466&rid=giphy.gif')
  message.channel.send({embed});
	}
	else if(random === "Katon")
	{
			const embed = new Discord.RichEmbed()
  .setTitle("La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
    .setImage('https://media.giphy.com/media/11IJoE5dc6fl28/giphy.gif')
  message.channel.send({embed});
	}
	else if(random === "Doton")
	{
			const embed = new Discord.RichEmbed()
  .setTitle("La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/2QCmzUYUzD248/giphy.gif')
  message.channel.send({embed});
	}
	else if(random === "Raiton")
	{
			const embed = new Discord.RichEmbed()
  .setTitle("La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/Gev6zrYpjpYWY/giphy.gif')
  message.channel.send({embed});
	}
	else if(random === "Suiton")
	{
			const embed = new Discord.RichEmbed()
  .setTitle("Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/YcXIvmD5AvyFy/giphy.gif')
  message.channel.send({embed});
	}

break;
    }
})

//village
bot.on('message', message=>{
	
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
case 'village':
    var facts = ["Je vois que tu as perdu la mémoire ! Tu appartiens au village de Konoha !", "Je vois que tu as perdu la mémoire ! Tu appartiens au village de Kiri !", "Je vois que tu as perdu la mémoire ! Tu appartiens au village de Iwa !", "Je vois que tu as perdu la mémoire ! Tu appartiens au village de Kumo !", "Je vois que tu as perdu la mémoire ! Tu appartiens au village de Suna !"];
    var vlge = ["Konoha","Kiri","Suna","Kumo","Iwa"];
    var fact = Math.floor(Math.random() * vlge.length);
	var random = vlge[fact];
	if(random === "Konoha")
	{
		const embed = new Discord.RichEmbed()
  .setTitle("Je vois que tu as perdu la mémoire ! Tu appartiens au village de Konoha !")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://i.imgur.com/ksJ0KMC.jpg')
  message.channel.send({embed});
	}
	else if(random === "Kiri")
	{
		const embed = new Discord.RichEmbed()
  .setTitle("Je vois que tu as perdu la mémoire ! Tu appartiens au village de Kiri !")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://i.imgur.com/Z8nIVJM.jpg')
  message.channel.send({embed});
	}
	else if(random === "Suna")
	{
		const embed = new Discord.RichEmbed()
  .setTitle("Je vois que tu as perdu la mémoire ! Tu appartiens au village de Suna !")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
    .setImage('https://i.imgur.com/grweC9E.jpg')
  message.channel.send({embed});
	}
	else if(random === "Kumo")
	{
		const embed = new Discord.RichEmbed()
  .setTitle("Je vois que tu as perdu la mémoire ! Tu appartiens au village de Kumo !")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
    .setImage('https://i.imgur.com/fOD89Ph.jpg')
  message.channel.send({embed});
	}
	else if(random === "Iwa")
	{
		const embed = new Discord.RichEmbed()
  .setTitle("Je vois que tu as perdu la mémoire ! Tu appartiens au village d'Iwa !")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://i.imgur.com/idvJ4nt.jpg')
  message.channel.send({embed});
	}
	
	
break;
    }
})

//roll
bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
case 'roll':
const embed = new Discord.RichEmbed()
  .setTitle("La quantité de chakra utilisée est de " + Math.floor(Math.random() * args[1] + 1))
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  message.channel.send({embed});
break;
    }
})

//help
bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
case 'help':
const embed = new Discord.RichEmbed()
  .setDescription("Liste des commandes : \n\n!roll X - Vous donne un nombre au hasard ayant pour maximum X. \n\n!village - Définit à quel village vous appartenez. \n\n!nature - Définit la nature de votre chakra. \n\n!doublenature - Faites vous parti de l'élite ? Avez vous une seconde nature de chakra ?")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  message.channel.send({embed});
break;
    }
})

//double nature
bot.on('message', message=>{
	
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
case 'doublenature':
var d = Math.random();
if (d > 0.85)
{
    if (message.member.roles.find(x => x.name, 'Suiton'))
    {
        //Suiton
    var facts = ["La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)", "La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)", "La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)", "La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)"];
    var fact = Math.floor(Math.random() * facts.length);
	var elem = ["Katon","Doton","Futon","Raiton"];
	var random = elem[fact];
	     if(random === "Katon")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/11IJoE5dc6fl28/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Doton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/2QCmzUYUzD248/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Raiton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/Gev6zrYpjpYWY/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Futon")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media3.giphy.com/media/LI8ODde4YvExq/giphy.gif?cid=790b761117b14b7973ddd064f3e5ededb4353a33c6d91466&rid=giphy.gif')
  message.channel.send({embed});
		 }
    } 
    else if (message.member.roles.find(x => x.name, 'Raiton'))
    {
        //Raiton
        var facts = ["La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)", "La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)", "La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)", "Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)"];
        var fact = Math.floor(Math.random() * facts.length);
		var elem = ["Katon","Doton","Futon","Suiton"];
		var random = elem[fact];
		if(random === "Katon")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/11IJoE5dc6fl28/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Doton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/2QCmzUYUzD248/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Futon")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media3.giphy.com/media/LI8ODde4YvExq/giphy.gif?cid=790b761117b14b7973ddd064f3e5ededb4353a33c6d91466&rid=giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Suiton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/YcXIvmD5AvyFy/giphy.gif')
  message.channel.send({embed});
		 }
    } 
    else if (message.member.roles.find(x => x.name, 'Katon'))
    {
        //Katon
    var facts = ["La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)", "La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)", "La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)", "Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)"];
    var fact = Math.floor(Math.random() * facts.length);
	var elem = ["Futon","Doton","Raiton","Suiton"];
	var random = elem[fact];
	if(random === "Futon")
		 {
			const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media3.giphy.com/media/LI8ODde4YvExq/giphy.gif?cid=790b761117b14b7973ddd064f3e5ededb4353a33c6d91466&rid=giphy.gif')
  message.channel.send({embed}); 
		 }
		 else if(random === "Doton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/2QCmzUYUzD248/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Raiton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/Gev6zrYpjpYWY/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Suiton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/YcXIvmD5AvyFy/giphy.gif')
  message.channel.send({embed});
		 }
    } 
    else if (message.member.roles.find(x => x.name, 'Doton'))
    {
        //Doton
    var facts = ["La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)", "La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)", "La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)", "Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)"];
    var fact = Math.floor(Math.random() * facts.length);
	var elem = ["Katon","Futon","Raiton","Suiton"];
	var random = elem[fact];
	     if(random === "Katon")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/11IJoE5dc6fl28/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Futon")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media3.giphy.com/media/LI8ODde4YvExq/giphy.gif?cid=790b761117b14b7973ddd064f3e5ededb4353a33c6d91466&rid=giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Raiton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/Gev6zrYpjpYWY/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Suiton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/YcXIvmD5AvyFy/giphy.gif')
  message.channel.send({embed});
		 }
    } 
    else if (message.member.roles.find(x => x.name, 'Futon'))
    {
        //Futon
    var facts = ["La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)", "La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)", "La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)", "Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)"];
    var fact = Math.floor(Math.random() * facts.length);
	var elem = ["Katon","Doton","Raiton","Suiton"];
	var random = elem[fact];
	     if(random === "Katon")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/11IJoE5dc6fl28/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Doton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/2QCmzUYUzD248/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Raiton")
		 {
			  const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/Gev6zrYpjpYWY/giphy.gif')
  message.channel.send({embed});
		 }
		 else if(random === "Suiton")
		 {
			 const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi !")
  .setDescription("Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/YcXIvmD5AvyFy/giphy.gif')
  message.channel.send({embed});
		 }
    } 
}
else 
{
			const embed = new Discord.RichEmbed()
  .setTitle("Tu fais donc parti de l'élite des Shinobi ! \nNon jdec")
  .setColor(Math.floor(Math.random() * 16777214) + 1)
  .setAuthor("Naruto RP Bot - Par Ruka")
  .setImage('https://media.giphy.com/media/I7p8K5EY9w9dC/giphy.gif')
  message.channel.send({embed});
}
break;
    }
})



bot.login(process.env.TOKEN);
