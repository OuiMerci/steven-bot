
module.exports = {
    visible : true,
	name: 'ajoute-moi',
    description: 'Ajouter un utilisateur',
    argsHelp : '',

	execute(msg, args, stevenBot) {
        if(msg.author.id != '160654356977287168')
        {
            msg.reply("Sacripan, tu ne peux pas utiliser cette commande !");
            return;
        }

        var amount = Number(args.shift());

        var userId = args.shift();

        if(userId == "" || userId == 'undefined')
            stevenBot.utils.AddPoints(msg.author.id, amount, stevenBot, msg.channel);
        else
            stevenBot.utils.AddPoints(userId, amount, stevenBot, msg.channel);

        var callback = function(user)
        {
            console.log("username = " + user.username);
            var userData = {id : msg.author.id, points : 0, username : user.username};
            stevenBot.userMap.set(msg.author.id, userData);
            msg.reply(" nous a rejoint pour le grand jeu de l'excellence !");
            stevenBot.utils.SortAndSave(stevenBot);

            if(stevenBot.utils.CheckRandom(2))
            {
                stevenBot.laureRoulette.Ask(msg, stevenBot);
            }
        }

        stevenBot.client.fetchUser(msg.author.id)
                .then(user => callback(user));
	},
};