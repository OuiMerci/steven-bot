module.exports = {
    visible: false,
	name: 'resetdelays',
    description: "Reset les delays à 0",
    argsHelp : '',

	execute(msg, args, stevenBot) {

        if(msg.author.id != '160654356977287168')
        {
            msg.reply("Sacripan, tu ne peux pas utiliser cette commande !");
            return;
        }

        stevenBot.saved.pdj.lastBUpdate = 0;
        stevenBot.saved.pdj.lastSUpdate = 0;

        stevenBot.utils.SortAndSave(stevenBot);
        msg.reply(" les délais ont été reset !");
	},
};