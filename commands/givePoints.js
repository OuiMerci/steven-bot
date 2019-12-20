module.exports = {
    visible: false,
	name: 'donne',
    description: "Donne des points",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        if(msg.author.id != '160654356977287168')
        {
            msg.reply("Sacripan, tu ne peux pas utiliser cette commande !");
            return;
        }

        var amount = Number(args.shift());

        stevenBot.utils.AddPoints(msg.author.id, amount, stevenBot, msg.channel);
	},
};