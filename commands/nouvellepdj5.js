module.exports = {
    visible: true,
	name: 'nouvellepdj5',
    description: "Choisir une nouvelle 'phrase du jour' a 5 points",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        console.log("Affiche les pdj");
        
        if(stevenBot.userMap.has(msg.author.id) == false)
        {
            msg.reply("Tu ne joues pas ! Utiliser la commande 'ajoute-moi' pour nous rejoindre !");
            return;
        }

        var user = stevenBot.userMap.get(msg.author.id);

        if(user.points < stevenBot.saved.boutique.nouvellePDJ5)
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

        stevenBot.saved.pdj.small = message;
        stevenBot.saved.pdj.smallAuthor = user.username;
        stevenBot.utils.Pay(msg.author.id, stevenBot.saved.boutique.nouvellePDJ5, stevenBot, msg.channel);
        msg.channel.send(user.username + " a choisi la nouvelle phrase du jour a "
                        + stevenBot.saved.pdj.sPoints + " points : " + message);
	},
};