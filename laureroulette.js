module.exports = {
    visible: false,
	name: 'laureroulette',
    description: "Demande a Laure s'il doit donner des points",
    argsHelp : '',

    targetUser : null,

	Ask(msg, stevenBot, userId) {
        console.log("Asking laure roulette for " + userId);

        var user = stevenBot.userMap.get(userId);
        if(user == undefined)
            { console.log("Je n'ai pas trouvé ce joueur pour la roulette " + userId); return;}

        this.targetUser = userId;
        var rand = stevenBot.utils.GetRandom(10);
        var randTxt = this.GetRandomWord(rand);

        msg.channel.send("Laure est-ce que je dois donner des points à "
                + user.username + " (" + randTxt + ")" + " ?");
    },
    
    CheckAnswer(msg, msgInfo, stevenBot){

        if(this.targetUser == null) {return};
        if(msg ==
            'https://media.discordapp.net/attachments/530915361986445312/627828916937162783/zarniversaire.gif')
        {return;}

        console.log("Got answer for userId : " + this.targetUser);
        console.log(msg);

        switch(msg)
        {
            case 'certainement !' :
                msgInfo.channel.send("Cool !");
                stevenBot.utils.AddPoints(this.targetUser, 20, stevenBot, msgInfo.channel);
                break;

            case 'sûrement !' :
                msgInfo.channel.send("Hum, Ok !");
                stevenBot.utils.AddPoints(this.targetUser, 15, stevenBot, msgInfo.channel);
                break;

            case 'peut-être.' :
                msgInfo.channel.send("Hum...");
                stevenBot.utils.AddPoints(this.targetUser, 1, stevenBot, msgInfo.channel);
                break;

            case 'absolument pas.' :
                msgInfo.channel.send("Ok boomer.");
                break;

            case 'non.' :
                msgInfo.channel.send("Lol, Ok miskine.");
                break;

            case 'oui.' :
                msgInfo.channel.send("Ok !");
                stevenBot.utils.AddPoints(this.targetUser, 15, stevenBot, msgInfo.channel);
                break;

            case 'Ce n\'est pas possible.' :
                msgInfo.channel.send("Ok boomer.");
                break;

            case 'je suis très occupée, vous pouvez demander à Erwan peut-être ?' :
                msgInfo.channel.send("Vas-y, elle m'a gavé..");
                stevenBot.utils.AddPoints(this.targetUser, 30, stevenBot, msgInfo.channel);
                break;
        }

        this.targetUser = null;
    },

    GetRandomWord(rand)
    {
        switch(rand)
        {
            case 0 : 
                return "";

            case 1 :
                return "x";
            
            case 2 :
                return "MA";

            case 3 :
                return "Tom";

            case 4 :
                return "Nini";
            break;

            case 5 :
                return "Nizar";

            case 6 :
                return "Nathan";

            case 7 :
                return "Jéromme";

            case 8 :
                return "Toolmoon";

            case 9 :
                return "Casalinni";
            
            default : 
                return "Si ce texte apparait, Pierre a merdé";
        }
    }
};