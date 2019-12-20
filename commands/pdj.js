module.exports = {
    visible: true,
	name: 'pdj',
    description: "Affiche les 'phrases du jour'",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        console.log("Affiche les pdj");
        
        var message = "Voici les 'phrases du jour' : \n\n";
        message += "- " + stevenBot.saved.pdj.sPoints + " points : '" + stevenBot.saved.pdj.small
                    + "' - Choisie par " + stevenBot.saved.pdj.smallAuthor + "\n\n";
        
        message += "- " + stevenBot.saved.pdj.bPoints + " points : '" + stevenBot.saved.pdj.big
                    + "' - Choisie par " + stevenBot.saved.pdj.bigAuthor + "\n\n";

        msg.channel.send(message, {code : true});
	},
};