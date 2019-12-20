module.exports = {
    visible: true,
	name: 'mesinfos',
    description: "Affiche les infos de l'utilisateur",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        console.log("Affiche la boutique");

        if(stevenBot.userMap.has(msg.author.id) == false)
        {
            msg.reply("Tu en joues pas ! Utilises la commande 'ajoute-moi'");
            return;
        }

        var user = stevenBot.userMap.get(msg.author.id);
        msg.reply("Tu as " + user.points + " points !");
	},
};