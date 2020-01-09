
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

        var userId = args.shift();

        if(userId == "" || userId === undefined)
        {
            msg.reply("user id : " + userId + " inconnu, je fais pour PdS");
            stevenBot.laureRoulette.Ask(msg, stevenBot, msg.author.id);
        }
        else
            stevenBot.laureRoulette.Ask(msg, stevenBot, userId);
	},
};