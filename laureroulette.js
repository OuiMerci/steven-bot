module.exports = {
    visible: false,
	name: 'laureroulette',
    description: "Demande a Laure s'il doit donner des points",
    argsHelp : '',

    targetUser : null,

	Ask(msg, stevenBot) {
        console.log("Asking laure roulette for " + msg.author.id);

        var user = stevenBot.userMap.get(msg.author.id);
        if(user == undefined)
            { console.log("Ask - error finding user " + msg.author.id);}

        this.targetUser = msg.author.id;
        var rand = stevenBot.utils.GetRandom(99999999);
        msg.channel.send("Laure est-ce que je dois donner des points à "
                + user.username + " (" + rand + ")" + " ?");
    },
    
    CheckAnswer(msg, msgInfo, stevenBot){

        if(this.targetUser == null) {return};

        console.log("Got answer for userId : " + this.targetUser);
        console.log(msg);

        switch(msg)
        {
            case 'certainement !' :
                msgInfo.channel.send("Cool !");
                stevenBot.utils.AddPoints(msgInfo.author.id, 20, stevenBot, msgInfo.channel);
                break;

            case 'sûrement !' :
                msgInfo.channel.send("Hum, Ok !");
                stevenBot.utils.AddPoints(msgInfo.author.id, 15, stevenBot, msgInfo.channel);
                break;

            case 'peut-être.' :
                msgInfo.channel.send("Hum...");
                stevenBot.utils.AddPoints(msgInfo.author.id, 1, stevenBot, msgInfo.channel);
                break;

            case 'absolument pas.' :
                msgInfo.channel.send("Ok boomer.");
                break;

            case 'non.' :
                msgInfo.channel.send("Lol, Ok miskine.");
                break;

            case 'oui.' :
                msgInfo.channel.send("Ok !");
                stevenBot.utils.AddPoints(msgInfo.author.id, 15, stevenBot, msgInfo.channel);
                break;

            case 'Ce n\'est pas possible.' :
                msgInfo.channel.send("Ok boomer.");
                break;

            case 'je suis très occupée, vous pouvez demander à Erwan peut-être ?' :
                msgInfo.channel.send("Vas-y, elle m'a gavé..");
                stevenBot.utils.AddPoints(msgInfo.author.id, 30, stevenBot, msgInfo.channel);
                break;
        }

        this.targetUser = null;
    }
};