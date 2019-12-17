module.exports = {
    visible: false,
	name: 'message',
    description: 'envoie un msg a l\'utilisateur spécifié ',

	execute(msg, args, stevenBot) {
        console.log("arg say : " + args);

        var userId = args.shift();
        userId += "";

        var message = '';

        args.forEach(word => {
            message += " " + word;
        });

        var callback =function (messagedUser)
            { stevenBot.pierre.send(messagedUser.username + " a reçu : \n" + message); }

        stevenBot.client.fetchUser(userId)
            .then(user => {user.send(message); callback(user)});
	},
};