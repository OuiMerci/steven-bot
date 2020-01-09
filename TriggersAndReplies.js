module.exports = {
    CheckPDJ : function (userId, msg, steven){
        // if author is not registered, ignore
        if(steven.userMap.has(userId) == false) return;

        var user = steven.userMap.get(userId);
        var pdj = steven.saved.pdj;
        var pointsToAdd = 0;

        // Process message
        var processedMsg = msg.content.toLowerCase();
        if(processedMsg === pdj.small)
        {
            pointsToAdd = pdj.sPoints;
        }
        else if(processedMsg === pdj.big)
        {
            pointsToAdd = pdj.bPoints;
        }
        else
        {
            return;
        }

        // Check delay
        var delayOk = steven.utils.CheckDelay(user.lastPDJ, pdj.hDelay, msg);
        if(delayOk == false) { return; }

        user["lastPDJ"] = Date.now();
        steven.utils.AddPoints(userId, pointsToAdd, steven, msg.channel);

        if(steven.utils.CheckRandom(3))
        {
            steven.laureRoulette.Ask(msg, steven);
        }
        
    },

    TriggersAndRepliesDic : [
        ["salut steven", "Salut mec !", false],
        ["bye", "bye mec !", false],
        [" top", "c'est toi qu'est top", true],
        ["pas ouf", "c'est toi qu'est pas ouf", true],
        ["assez ouf", "c'est toi qu'est assez ouf", true],
        ["pas bien", "c'est toi qu'est pas bien", true],
        ["trop bien", "c'est toi qu'est trop bien", true],
        ["pas cool", "c'est toi qu'est pas cool", true],
        ["trop cool", "c'est toi qu'est trop cool", true],
        ["assez cool", "c'est toi qu'est assez cool", true],
        [" bim ", "bam boum", false],
    ]
}