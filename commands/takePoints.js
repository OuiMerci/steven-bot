module.exports = {
    visible: false,
	name: 'prend',
    description: "Retire des points",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        if(msg.author.id != '160654356977287168')
        {
            msg.reply("Sacripan, tu ne peux pas utiliser cette commande !");
            return;
        }

        var amount = Number(args.shift());

        var userId = args.shift();

        console.log("uid" + userId);

        if(userId == "" || userId == 'undefined')
            stevenBot.utils.Pay(msg.author.id, amount, stevenBot, msg.channel);
        else
            stevenBot.utils.Pay(userId, amount, stevenBot, msg.channel);
	},
};