module.exports = {

    AddPoints : function (userId, amount, stevenBot, channel) {
        user = stevenBot.userMap.get(userId);
        user.points += amount;

        if(channel)
            channel.send("Voilà " + amount + " points pour toi, " + user.username);

        this.SortAndSave(stevenBot);
    },

    Pay : function(userId, amount, stevenBot, channel){
        user = stevenBot.userMap.get(userId);
        user.points -= amount;

        if(channel)
            channel.send("Paiement bien reçu : " + amount + " - " + user.username);

        this.SortAndSave(stevenBot);
    },

    SortAndSave : function (stevenBot) {
        console.log("Start writing file **********");
        stevenBot.saved.userData = this.SortUsersByPoints(stevenBot.userMap).array();
        stevenBot.data.WriteToFile(stevenBot.saved);
        console.log("Writing complete **********");
    },

    SortUsersByPoints : function (userMap){
        console.log("Sorting users");
        var ordered = userMap.sort((a, b) => b.points - a.points);
        return ordered;
    },

    CheckDelay : function(lastTime, hDelay, msg){
        // return 0 if ok, 1 if singular, 2 if plural 

        console.log("Get delay");

        var msDelay = hDelay * 60 * 60 * 1000;
        var diff = Date.now() - lastTime;
        if(diff < msDelay)
        {
            // On calcule le nb d'heures restant
            var toWait = Math.round((msDelay - diff) / 1000.0 / 60.0 / 60.0);

            // on check le pluriel
            var pluriel = "";
            if(toWait >= 2) {pluriel = "s"}

            if(msg != undefined)
                {msg.reply("c'est trop tôt ! Attends encore environ " + toWait + " heure" + pluriel);}

            return false;
        }
        else{
            return true;
        }
    }
};
