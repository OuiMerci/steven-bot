module.exports = {
    visible: false,
	name: 'resetdelays',
    description: "Reset les delays à 0",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        stevenBot.saved.pdj.lastBUpdate = 0;
        stevenBot.saved.pdj.lastSUpdate = 0;

        stevenBot.utils.SortAndSave(stevenBot);
        msg.reply(" les délais ont été reset !");
	},
};