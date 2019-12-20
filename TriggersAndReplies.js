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

        var msDelay = pdj.hDelay * 60 * 60 * 1000;
        if ("lastPDJ" in user)
        {
            var diff = Date.now() - user.lastPDJ;
            if(diff < msDelay)
            {
                // On calcule le nb d'heures restant
                var toWait = Math.round((msDelay - diff) / 1000.0 / 60.0 / 60.0);

                // on check le pluriel
                var pluriel = "";
                if(toWait >= 2) {pluriel = "s"}

                msg.reply("c'est trop tôt pour toi ! Attends encore environ " + toWait + " heure" + pluriel);
                return;
            }
        }
        else
        {
            console.log(" NO PDJ --> adding");
        }

        user["lastPDJ"] = Date.now();
        steven.utils.AddPoints(userId, pointsToAdd, steven, msg.channel);
        
    },

    TriggersAndRepliesDic : [
        ["salut steven", "Salut mec !", false],
        ["bye", "bye mec !", false],
        ["top", "c'est toi qu'est top", true],
        ["pas ouf", "c'est toi qu'est pas ouf", true],
        ["assez ouf", "c'est toi qu'est assez ouf", true],
        ["pas bien", "c'est toi qu'est pas bien", true],
        ["trop bien", "c'est toi qu'est trop bien", true],
    ]
}