module.exports = {
    visible: true,
	name: 'boutique',
    description: "Affiche les achats disponibles dans la boutique",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        console.log("Affiche la boutique");

        var message = "Voici la boutique : \n\n";

        Object.keys(stevenBot.saved.boutique).forEach(k => {
            message += "\t" + k + " - "+ stevenBot.saved.boutique[k] + " points\n";
        });

        msg.channel.send(message, {code : true});
	},
};