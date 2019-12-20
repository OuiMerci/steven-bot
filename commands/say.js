module.exports = {
    visible: false,
	name: 'say',
    description: 'says something in specified channel',

	execute(msg, args, stevenBot) {
        console.log("arg say : " + args);

        var channelId = args.shift();
        var channel = stevenBot.server.channels.get(channelId);
        
        var message = '';

        args.forEach(word => {
            message += " " + word;
        });

        console.log("get say : ");
        console.log(message);

        if(channel === undefined)
        {
            console.log("Aucun channel trouvé avec " + args);
            return;
        }

        console.log(`Saying in channel ` + channel.name);

        channel.send(message);
	},
};