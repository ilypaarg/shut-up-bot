const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
client.login(process.env.shutup_token);

client.on('ready', readyDiscord()
{
  console.log('ok on lol');
}

client.on('message', gotMessage);

const messages = 
                ['shut up lol',
                 'be quiet loser',
                 'you stink so shut it smelly.',
                 'why are you so annoying be quiet',
                 'shhhhhhhhhhh',
                 'okay seriously be quiet please',
                 'thats enough talking for you shut yo mouf',
                 'annoying mf',
                 'why are you so loud',
                 'omfg zip it bucko',
                 'annyoing mf please shut up like god damn',
                 'has anyone ever told you youre lame as ass',
                 'youve had your fun now be quiet.',
                 'im bored shut up',
                 'who said you can speak',
                 'DUUUUUUUDEEE just shush',
                 'lower your tone',
                 'do you kiss your mother with that mouth', //this would be funny if they didnt have a mother
                 'yeah yeah whatever be quiet',
                 'just stfu please and thank you',
                 'could you be any more annoying',
                 'oi, i dont like you',
                 'shhhh please for gods sake',
                 'you smell like deez',
                 'L',
                 'gottem too ez',
                 'this isnt even a challenge i can go all day',
                 'please... just stop talking...',
                 'might as well mute you',
                 'why do you have access to a keyboard.',
                 'who taught you this language',
                 'why are you still talking',
                 'is this not enough for you',
                 'dude take a hint',
                 'yes youre annoying damn'
                 'stinky lord smelly guy stfu.']
                 
async function gotMessage(msg)
{
  if (msg.author.id === 'discord user id in here')
  {
    const m = (Math.floor(Math.random() * messages.length));
    msg.reply(messages[p]);
  }
}
