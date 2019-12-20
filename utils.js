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
        console.log(ordered);
        return ordered;
    }
};
