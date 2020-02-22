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
    message.channel.send(facts[fact]);
break;
    }
})

//village
bot.on('message', message=>{
	
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
case 'village':
    var facts = ["Je vois que tu as perdu la mémoire ! Tu appartiens au village de Konoha !", "Je vois que tu as perdu la mémoire ! Tu appartiens au village de Kiri !", "Je vois que tu as perdu la mémoire ! Tu appartiens au village de Iwa !", "Je vois que tu as perdu la mémoire ! Tu appartiens au village de Kumo !", "Je vois que tu as perdu la mémoire ! Tu appartiens au village de Suna !"];
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
break;
    }
})

//roll
bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
case 'roll':
    message.channel.send("La quantité de chakra utilisée est de " + Math.floor(Math.random() * args[1] + 1));
break;
    }
})

//help
bot.on('message', message=>{
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
case 'help':
    message.channel.send("Liste des commandes : \n!roll X - Vous donne un nombre au hasard ayant pour maximum X. \n!village - Définit à quel village vous appartenez. \n!nature - Définit la nature de votre chakra. \n!doublenature - Faites vous parti de l'élite ? Avez vous une seconde nature de chakra ?" );
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
    message.channel.send("Tu fais donc parti de l'élite des Shinobi !");
    if (message.member.roles.find(x => x.name, 'Suiton'))
    {
        //Suiton
    var facts = ["La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)", "La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)", "La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)", "La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)"];
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
    } 
    else if (message.member.roles.find(x => x.name, 'Raiton'))
    {
        //Raiton
        var facts = ["La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)", "La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)", "La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)", "Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)"];
        var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
    } 
    else if (message.member.roles.find(x => x.name, 'Katon'))
    {
        //Katon
    var facts = ["La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)", "La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)", "La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)", "Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)"];
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
    } 
    else if (message.member.roles.find(x => x.name, 'Doton'))
    {
        //Doton
    var facts = ["La feuille s'est coupée en deux ! Ta nature de chakra est donc le Futon (Le Vent)", "La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)", "La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)", "Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)"];
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
    } 
    else if (message.member.roles.find(x => x.name, 'Futon'))
    {
        //Futon
    var facts = ["La feuille a été réduite en cendres ! Ta nature de chakra est donc le Katon (Le Feu)", "La feuille s'est transformée en sable ! Ta nature de chakra est donc le Doton (La Terre)", "La feuille s'est froissée ! Ta nature de chakra est donc le Raiton (La Foudre)", "Une tache d'humiditée grandit sur la feuille ! Ta nature de chakra est donc le Suiton (L'Eau)"];
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
    } 
}
else 
{
    message.channel.send("Tu fais donc parti de l'élite des Shinobi ! \nNon jdec");
}
break;
    }
})



bot.login(process.env.TOKEN);
