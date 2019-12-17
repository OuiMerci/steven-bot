module.exports = {

    AddPoints : function (userId, amount, stevenBot, channel) {
        user = stevenBot.userMap.get(userId);
        user.points += amount;

        if(channel)
            stevenBot.server.fetchMember(userId)
                .then(member => channel.send("Voilà " + amount + " points pour toi, " + member.user.username));

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
        return userMap.sort((a, b) => b.points - a.points);
    }
};
