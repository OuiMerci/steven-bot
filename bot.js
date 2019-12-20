const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./json/config.json');
const stevenBot = new Object();

client.login(token);

client.once('ready', () => {
    Init();

    console.log(`Logged in as ${client.user.tag}!`);
    var textChannel = Array.from(client.channels.values())[2];
    textChannel.send("Hey ! Comment ça va les gars ?");
});

client.on('message', msg => {
    HandleMessage(msg);
});

function Init()
{
    LoadSteven();

    // Set Presence
    client.user.setPresence({
        game: {
            name: 'Haven',
            type: 1,
        },
        status: 'dnd'
    });

    //Tester();
}

function Tester(){
    var index = stevenBot.utils.GetUserIndex(stevenBot.saved.userData, "nizar");
    console.log("id : " + index);
    console.log("user : " + stevenBot.saved.userData[index]);
    stevenBot.utils.AddPoints(stevenBot.saved.userData[index], 5);
    stevenBot.utils.SortAndSave(stevenBot);

    // if(stevenBot.userMap.has(msg.member.id))
    // {
    //     stevenBot.utils.AddPoints(msg.member.id, 5, stevenBot, msg.channel);
    //     stevenBot.utils.SortAndSave(stevenBot);
    // }
}

function LoadSteven()
{
    // Requires
    stevenBot.data = require('./StevenData.js');
    stevenBot.utils = require('./utils.js');
    var triggers = require('./TriggersAndReplies.js');
    stevenBot.messagesAndReplies = triggers.TriggersAndRepliesDic;
    stevenBot.CheckPDJ = triggers.CheckPDJ;

    // Load data
    stevenBot.saved = stevenBot.data.ReadFromFile();

    // Get userData as map
    stevenBot.userMap = new Discord.Collection();
    stevenBot.saved.userData.map(a => stevenBot.userMap.set(a.id, a));

    // Load commands
    stevenBot.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles)
    {
        console.log("Try to load : " + file);
        const command = require(`./commands/${file}`);
        stevenBot.commands.set(command.name, command);
    }

    // Add link to server
    stevenBot.server = client.guilds.first();
    console.log("steven server name : " + stevenBot.server.name);

    stevenBot.pierre = "";

    // Add pierre
    var callback = function(user) {stevenBot.pierre = user;}
    client.fetchUser('160654356977287168')
                    .then(user => {callback(user);});

    // Save client
    stevenBot.client = client;
}

function HandleMessage(msg){ 

    if(msg.author === client.user)
    {
        //console.log("I shouldn't react to my own message !!");
        return;
    }

    var lowerCaseMessage = msg.content.toLowerCase();
    
    if(msg.channel.type === 'dm')
    {
        HandleDm(msg, lowerCaseMessage);
    }

    // Test possible commands first
    if(CheckForCommand(msg, lowerCaseMessage))
        return;
    // Test messages
    else if(CheckForTrigger(msg, lowerCaseMessage))
        return;

    stevenBot.CheckPDJ(msg.author.id, msg, stevenBot);
}

function HandleDm(msg, lowerCaseMessage){
    if(msg.author.id != 160654356977287168)
    {
        stevenBot.pierre.send(msg.author.username + " a envoyé : \n" + msg.content);
        stevenBot.lastDmUser = msg.author;
    }
    else{
        lowerCaseMessage = "steven " + lowerCaseMessage;
        CheckForCommand(msg, lowerCaseMessage);
    }
}

function CheckForCommand(msg, messageToLowerCase)
{
    if (messageToLowerCase.startsWith(prefix) == false)
        return false;

    const args = messageToLowerCase.slice(prefix.length).split(/ +/);
    const command = args.shift();

    //console.log("test command : " + command);

    if (!stevenBot.commands.has(command)) return;

    try {
        stevenBot.commands.get(command).execute(msg, args, stevenBot);
        return true;
    }
    catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
        return false;
    }
}

function CheckForTrigger(msg, lowerCaseMessage)
{
    for(i = 0; i < stevenBot.messagesAndReplies.length; i++)
    {
        var trigger = stevenBot.messagesAndReplies[i][0];
        if(lowerCaseMessage.includes(trigger))
        {
            // handle commands like @user in messagesAndReplies[i][1]
            // set a variable with reply + commands modifications

            console.log("Trigger exists !!");
            msg.channel.send(stevenBot.messagesAndReplies[i][1]);
            return;
        }
    }
    //console.log("No trigger found in " + lowerCaseMessage);
}

