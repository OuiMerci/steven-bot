module.exports = {
    visible: true,
	name: 'nouvellepdj5',
    description: "Choisir une nouvelle 'phrase du jour' a 5 points",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        console.log("Affiche les pdj");
        var pdj = stevenBot.saved.pdj;
        
        if(stevenBot.userMap.has(msg.author.id) == false)
        {
            msg.reply("Tu ne joues pas ! Utiliser la commande 'ajoute-moi' pour nous rejoindre !");
            return;
        }

        var delayOk = stevenBot.utils.CheckDelay(pdj.lastSUpdate, pdj.updateDelay, msg);
        if(delayOk == false) { return; }

        console.log(" delay : " + delayOk);

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

        if(message.length > pdj.lengthLimit)
        {
            msg.reply("Ta phrase est trop longue !");
            return;
        }

        pdj.small = message;
        pdj.smallAuthor = user.username;
        pdj.lastSUpdate = Date.now();
        console.log("last pdj delay : " + stevenBot.saved.pdj.pdj.updateDelay);
        stevenBot.saved.pdj = pdj;

        stevenBot.utils.Pay(msg.author.id, stevenBot.saved.boutique.nouvellePDJ5, stevenBot, msg.channel);
        msg.channel.send(user.username + " a choisi la nouvelle phrase du jour a "
                        + stevenBot.saved.pdj.sPoints + " points : " + message);
	},
};