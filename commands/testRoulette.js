
module.exports = {
    visible : false,
	name: 'roulette',
    description: 'Test la roulette',
    argsHelp : '',

	execute(msg, args, stevenBot) {
        if(msg.author.id != '160654356977287168')
        {
            msg.reply("Sacripan, tu ne peux pas utiliser cette commande !");
            return;
        }

        var amount = Number(args.shift());

        var userId = args.shift();

        console.debug("UserId = " + userId);

        if(userId == "" || userId == 'undefined')
            stevenBot.laureRoulette.Ask(msg, stevenBot, msg.author.id);
        else
            stevenBot.laureRoulette.Ask(msg, stevenBot, userId);
	},
};