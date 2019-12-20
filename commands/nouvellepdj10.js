module.exports = {
    visible: true,
	name: 'nouvellepdj10',
    description: "Choisir une nouvelle 'phrase du jour' a 10 points",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        if(stevenBot.userMap.has(msg.author.id) == false)
        {
            msg.reply("Tu ne joues pas ! Utiliser la commande 'ajoute-moi' pour nous rejoindre !");
            return;
        }

        var user = stevenBot.userMap.get(msg.author.id);

        if(user.points < stevenBot.saved.boutique.nouvellePDJ10)
        {
            msg.reply("Tu n'as pas assez de point pour ça !");
            return;
        }

        var message = "";
        args.forEach(word => {
            if(message != "")
                message += " " + word;
            else
                message += word;
        });

        if(message.length > 25)
        {
            msg.reply("Ta phrase est trop longue !");
            return;
        }

        stevenBot.saved.pdj.big = message;
        stevenBot.saved.pdj.bigAuthor = user.username;
        stevenBot.utils.Pay(msg.author.id, stevenBot.saved.boutique.nouvellePDJ10, stevenBot, msg.channel);
        msg.channel.send(user.username + " a choisi la nouvelle phrase du jour a "
                        + stevenBot.saved.pdj.bPoints + " points : " + message);
	},
};