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

        var userId = args.shift();

        if(userId == "" || userId == 'undefined')
            stevenBot.utils.AddPoints(msg.author.id, amount, stevenBot, msg.channel);
        else
            stevenBot.utils.AddPoints(userId, amount, stevenBot, msg.channel);
	},
};