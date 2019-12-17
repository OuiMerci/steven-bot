module.exports = {
    visible : true,
	name: 'leaderboard',
    description: 'Affiche le leaderboard',
    argsHelp : 'Utiliser "leaderboard all" affiche le leaderboard complet',

	execute(msg, args, stevenBot) {
        console.log("arg steven : " + stevenBot);
        console.log(`Printing leaderboard`);
        stevenBot.SortUsersByPoints();
        var answer = "Voilà le classement :\n";

        if(args === 'all')
        {
            for(var i = 0; i < stevenBot.userData.length; i++)
            {
                var user = stevenBot.userData[i];
                var newLine = user.Name + " : " + user.Points + " points and is " + "***" + "\n" ;
                answer = answer.concat(newLine);
            }
        }
        else
        {
            var maxCount = Math.min(stevenBot.userData.length, 4);
            for(var i = 0; i < maxCount; i++)
            {
                var user = stevenBot.userData[i];
                var newLine = user.Name + " : " + user.Points + " points\n" ;
                answer = answer.concat(newLine);
            }
        }

        msg.channel.send(answer);
	},
};