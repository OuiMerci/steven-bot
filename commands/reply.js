module.exports = {
    visible: false,
	name: 'reply',
    description: 'envoie un msg au dernier utilisateur a avoir MP Steven',

	execute(msg, args, stevenBot) {
        console.log("arg reply : " + args);

        var message = '';

        args.forEach(word => {
            message += " " + word;
        });

        var callback =function (messagedUser)
            { stevenBot.pierre.send(messagedUser.username + " a reçu : \n" + message); }

        if('lastDmUser' in stevenBot)
        {
            stevenBot.lastDmUser.send(message);
            stevenBot.pierre.send(stevenBot.lastDmUser.username + " a reçu : \n" + message);
        }
        else
        {
            stevenBot.pierre.send("Je n'ai personne a qui repondre :(");
        }
	},
};