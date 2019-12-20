
module.exports = {
    visible : true,
	name: 'ajoute-moi',
    description: 'Ajouter un utilisateur',
    argsHelp : '',

	execute(msg, args, stevenBot) {
        console.log("arg steven : " + stevenBot);
        console.log(`Let's add user : ` + msg.author);

        if(stevenBot.userMap.has(msg.author.id))
        {
            msg.reply("Tu joues déjà !");
            return;
        }
        else if (msg.member && msg.member.deleted)
        {
            msg.channel.send("Euh... tu ne fais plus partie de ce serveur... ? ... ... ?");
            return;
        }

        var callback = function(user)
        {
            console.log("username = " + user.username);
            var userData = {id : msg.author.id, points : 0, username : user.username};
            stevenBot.userMap.set(msg.author.id, userData);
            msg.reply(" nous a rejoint pour le grand jeu de l'excellence !");
            stevenBot.utils.SortAndSave(stevenBot);
        }

        stevenBot.client.fetchUser(msg.author.id)
                .then(user => callback(user));
	},
};