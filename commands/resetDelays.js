module.exports = {
    visible: false,
	name: 'resetdelays',
    description: "Reset les delays à 0",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        stevenBot.saved.pdj.lastBUpdate = Date.now();
        stevenBot.saved.pdj.lastSUpdate = Date.now();

        stevenBot.utils.SortAndSave(stevenBot);
        msg.reply(" les délais ont été reset !");
	},
};