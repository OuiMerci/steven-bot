module.exports = {
    visible: true,
	name: 'help',
    description: "Affiche l'aide pour StevenBot!",
    argsHelp : '',

	execute(msg, args, stevenBot) {
        console.log("Affiche l'aide!");
        
        var message = "Commandes :\n";
        console.log(stevenBot.commands.array());
        stevenBot.commands.array().forEach(cmd => {
            console.log("Cmd : " + cmd.name);
            console.log("Cmd visible : " + cmd.visible);
            if(cmd.visible == true)
            {
                message += "\t'" + cmd.name + "' : " + cmd.description;

                if(cmd.argsHelp != '')
                {
                    message += "\n\t" + cmd.argsHelp + "\n\n";
                }
                else
                {
                    message += "\n\n";
                }
                    
            }

            console.log("Message : " + message);
        });

        msg.channel.send(message, {code : true});
	},
};