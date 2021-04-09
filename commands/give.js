const discord = require('discord.js')


module.exports = {
    rundef(iArguments, Message, CommandSender, SenderCurrency)
    {
        if (CommandSender.verified !== false)
            return Message.channel.send("You need to be a verified CryptKeeper User to use the give command! Try the command 'atverify' to learn more.");
        if (iArguments[0] === "self")
        {
            if (iArguments[1] === "bits")
            {
                Message.author.bits += parseInt(iArguments[2]);
            }

        }
    }
}