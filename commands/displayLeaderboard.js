module.exports = {
    visible : true,
	name: 'leaderboard',
    description: 'Affiche le leaderboard',
    argsHelp : 'Utiliser "leaderboard all" affiche le leaderboard complet',

	execute(msg, args, stevenBot) {
        console.log(`Printing leaderboard`);
        stevenBot.userMap = stevenBot.utils.SortUsersByPoints(stevenBot.userMap);
        var answer = "Voilà le classement :\n";

        var keys = Array.from(stevenBot.userMap.keys());

        if(args == 'all')
        {
            for(var i = 0; i < keys.length; i++)
            {
                var user = stevenBot.userMap.get(keys[i]);
                var newLine = user.username + " : " + user.points + " points" + "\n" ;
                answer = answer.concat(newLine);
            }
        }
        else
        {
            var maxCount = Math.min(keys.length, 4);
            for(var i = 0; i < maxCount; i++)
            {
                var user = stevenBot.userMap.get(keys[i]);
                var newLine = user.username + " : " + user.points + " points" + "\n" ;
                answer = answer.concat(newLine);
            }
        }

        msg.channel.send(answer);
	},
};