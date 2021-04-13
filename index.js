import {Component} from "react";

const discord = require('discord.js')
const fs = require("fs");
const interactions = require("discord-slash-commands-client");
require('discord-reply');
const client2 = new interactions.Client(
    process.env.TOKEN,
    process.env.ID
);

const client = new discord.Client({intents: ["GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "DIRECT_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_BANS",
        "GUILDS",
        "GUILD_INTEGRATIONS",
        "GUILD_EMOJIS",
        "GUILD_WEBHOOKS",
        "GUILD_MESSAGE_TYPING"
        ,"GUILD_VOICE_STATES",
        "DIRECT_MESSAGE_REACTIONS"]});



const snekfetch = require("snekfetch")
client.on('ready', function () {

    setInterval(function () {
        client.user.setActivity("The Weekly News. | "  + client.guilds.cache.size + " Servers. | -commands", {type: "WATCHING"}) }, 5000)

})
function ManipulateJSON(pathEvaluatorBase, filename) {
    fs.writeFile(filename, JSON.stringify(pathEvaluatorBase), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(pathEvaluatorBase));
        console.log('writing to ' + pathEvaluatorBase);
    });
}
function readLines(input, func) {
    let remaining = '';

    input.on('data', function (data) {
        remaining += data;
        let index = remaining.indexOf('\n');
        let last = 0;
        while (index > -1) {
            const line = remaining.substring(last, index);
            last = index + 1;
            func(line);

            index = remaining.indexOf('\n', last);
        }

        remaining = remaining.substring(last);
    });

    input.on('end', function () {
        if (remaining.length > 0) {
            func(remaining);
        }
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive, and the minimum is inclusive
}

const fetch = require("node-fetch")

const prefix = '-';
discord.User.prototype.reputation = 0;
discord.User.prototype.points = 0;
discord.GuildMember.prototype.reputation = 0;
discord.GuildMember.prototype.points = 0;
discord.GuildMember.prototype.bits = 0;
discord.GuildMember.prototype.level = 0;
discord.GuildMember.prototype.maxbitlevel = 15;
const express = require('express');
const {MessageEmbed} = require("discord.js");
const app = express();
const port = 3000;
// when i was a kid i existed.
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Bot listening at http://localhost:${port}`));


discord.GuildMember.prototype.bonus = 0;

client.on('message', class extends Component {
    render() {
        if (this.props.author.bot) return;
        if (this.props.author.backpack === undefined || this.props.author.backpack === null)
            this.props.author.backpack = []
        /* Code... */
        if (isNaN(this.props.author.messagesSent))
            this.props.author.messagesSent = 0
        this.props.author.messagesSent += 1
        if (isNaN(this.props.guild.counter))
            this.props.guild.counter = 0;
        if (!fs.existsSync('./api/' + this.props.guild.id))
            fs.mkdirSync('./api/' + this.props.guild.id + "/")

        fs.writeFileSync('./api/' + this.props.guild.id + "/" + this.props.author.id, this.props.author.messagesSent.toString())
        if (this.props.guild.serverstatus === undefined)
            this.props.guild.serverstatus = "Normal"

        const args = this.props.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        let array
        try {
            array = fs.readFileSync('./' + this.props.author.id).toString().split("\n");
        } catch (e) {

        }

        try {

            if (array[0] !== 0)
                this.props.author.bits = parseInt(array[0])
            if (array[1] !== 1)
                this.props.author.bonus = parseInt(array[1])
            this.props.author.maxbitlevel = parseInt(array[2])
            this.props.author.gold = parseInt(array[3])
            this.props.author.karma = parseFloat(array[4])
            this.props.author.goldmine = eval(array[5]);
            this.props.author.licenses = eval(array[6])

            if (this.props.author.rank === "NEWBIE")
                this.props.author.rank = array[7];
            this.props.author.job = array[8]
            if (this.props.author.backpack !== undefined)
                this.props.author.backpack = array[9]

            this.props.author.lastautosave = Date()
            this.props.author.verified = eval(array[10]);
            if (!isNaN(parseInt(array[11])))
                this.props.author.points = parseInt(array[11])
            else
                this.props.author.points = 1
            this.props.author.goal = parseInt(array[12])
        } catch (e) {

        }
        if (this.props.author.levelupmessages === undefined)
            this.props.author.levelupmessages = []
        if (this.props.author.rank === undefined || this.props.author.rank === null)
            this.props.author.rank = "NEWBIE"
        if (this.props.author.licenses === undefined || this.props.author.licenses === null)
            this.props.author.licenses = []
        // noinspection JSUnresolvedVariable,JSUndefinedPropertyAssignment
        if (this.props.author.goldmine === undefined || this.props.author.goldmine === null)
            this.props.author.goldmine = false
        if (this.props.author.job === undefined)
            this.props.author.job = "CryptoMiner"
        if (isNaN(this.props.author.mines))
            this.props.author.mines = 0
        if (isNaN(this.props.author.gold))
            this.props.author.gold = 0
        if (isNaN(this.props.author.karma))
            this.props.author.karma = 0
        if (isNaN(this.props.author.maxbitlevel))
            this.props.author.maxbitlevel = 10
        if (isNaN(this.props.author.prestiges))
            this.props.author.prestiges = 0
        if (isNaN(this.props.author.gold))
            this.props.author.gold = 0
        if (isNaN(this.props.author.fish))
            this.props.author.fish = 0
        if (this.props.author.verified === undefined)
            this.props.author.verified = false;
        this.props.author.points += getRandomInt(1, 10);
        if (isNaN(this.props.author.bonus))
            this.props.author.bonus = 0
        if (this.props.author.inv === undefined)
            this.props.author.inv = []
        if (this.props.author.notis === undefined)
            this.props.author.notis = []
        if (this.props.author.bits === undefined || isNaN(this.props.author.bits)) {
            this.props.author.bits = 0
            this.props.author.bits += 10

        }
        if (isNaN(this.props.author.goal))
            this.props.author.goal = 90
        if (isNaN(this.props.author.level))
            this.props.author.level = 1

        function sendMessage(msgst) {
            this.props.channel.send(msgst).then(() => {
                console.log("done ")
            })
        }

        function getMessage(msgt) {
            return this.props.channel.send(msgt)
        }

        if (this.props.author.points >= this.props.author.goal) {
            this.props.author.level += 1;
            this.props.author.goal += getRandomInt(this.props.author.points * 3, this.props.author.level * this.props.author.points)
            this.props.lineReply('You\'ve reached level ' + this.props.author.level + ", Next up is level " + this.props.author.level + 1 + ". Keep grinding! (`-lvl`). This has also been added to your levelup messages. If they disappear, Make sure to contact KaiNotAnimeGirl#9500 :)"); //Line (Inline) Reply with mention
            this.props.author.levelupmessages.push(this.props.content)
        }
        if (this.props.content.startsWith("-") && this.props.channel.type !== "dm" || this.props.content.startsWith("$")) {
            console.log(this.props.author.username + " ran  command " + command)
            console.log(command)
            const fs = require('fs');
            if (command === "help") {
                sendMessage("Type -guide To begin your rich-ness journey.");
            } else if (command === "version") {
                sendMessage("I'm running on version 2.89!")
            } else if (command === "prestige") {
                if (this.props.author.bits >= 3000) {
                    sendMessage("RESETTING. ON RESETS YOU GET 100* BONUS. ALL POINTS RESET.")
                    this.props.author.bits = 0
                    this.props.author.bonus += 100
                    fs.writeFileSync("./" + this.props.author.id, "0\n" + this.props.author.bonus)
                } else {
                    sendMessage("You need at least 3000 Bits to do this.")
                }
            } else if (command === "points") {
                let points = parseInt(args[0]);
                sendMessage("added " + points.toString() + " to your balance.")
                if (!isNaN(points))
                    this.props.author.points += points
            } else if (command === "showpoints") {
                sendMessage(this.props.author.points)
            } else if (command === "inventory" || command === "balance" || command === "inv" || command === "me") {
                const embed = new discord.MessageEmbed()
                    .setColor("GREYPLE")
                    .setAuthor("Your Stuff", this.props.author.avatarURL())
                    .setFooter("Your Objects in one. Enjoy.")

                    .setDescription("All your things In one embed!")
                    .addField("Inventory Contents", "Your Inventory:\nBits: " +
                        "\**" + this.props.author.bits + "**\n" +
                        "Bit Multiplier (Session): **" + this.props.author.bonus + "**\n" +
                        "Gold (~$rshop help): **" + this.props.author.gold + "**\n" +
                        "Karma (~$spend): **" + this.props.author.karma + "**\n" +
                        "Your Fish (-mine): **" + this.props.author.fish + "**\n" +
                        "Your Rank: **" + this.props.author.rank + "**\n" +
                        "Your BackPack: **" + this.props.author.backpack + "**\n")
                sendMessage(embed)
            } else if (command === "mine" || command === "mn") {
                this.props.react("💲")
                //if (array[0] !== 0)
                //             msg.author.bits = parseInt(array[0])
                //         if (array[1] !== 1)
                //             msg.author.bonus = parseInt(array[1])
                //         msg.author.maxbitlevel = parseInt(array[2])
                //         msg.author.gold = parseInt(array[3])
                //         msg.author.karma = parseFloat(array[4])
                //         msg.author.goldmine = eval(array[5]);
                //         msg.author.licenses = eval(array[6])
                //         msg.author.rank = array[7];

                this.props.author.mines++;

                let mesages = ["You decide to test that CPU Baby! Earnings Above :)", "Don't have any more lines. Stuff Above :)"]
                if (this.props.author.bonus > 1) {
                    let ransource = getRandomInt(0, this.props.author.maxbitlevel) * this.props.author.bonus
                    this.props.author.bits += ransource
                    let ramsaanis = new discord.MessageEmbed()
                        .setColor('DARK_GREEN')
                        .setDescription("💵 How you did on your Number No." + this.props.author.mines + " mine 💵")
                        .setFooter(mesages[getRandomInt(0, mesages.length)])
                        .addField("How Much Did I Earn?", "You earn presumably 100% of your pay. With a " + this.props.author.bonus + "x bonus. So about " + ransource + " bits were earned in this mine.", true)

                    if (this.props.author.goldmine === true) {
                        let gamount = getRandomInt(0, 10)
                        ramsaanis.addField("How Much Gold was earned?", "About " + gamount + " gold was earned.", true);

                        this.props.author.gold += gamount


                    }
                    if (this.props.author.backpack.includes("fishing_rod")) {
                        var ranfish = getRandomInt(1, 10)
                        ramsaanis.addField("Miscellaneous Items", "- With your fishing rod you caught **" + ranfish + "** Fish!")

                    } else {
                        this.props.author.bits += ransource


                    }
                    this.props.lineReply(ramsaanis); //Line (Inline) Reply with mention
                    this.props.author.notis.push("Successfully Mined at " + Date() + "..  .")
                } else if (this.props.author.bonus === 0) {
                    let ransource = getRandomInt(0, this.props.author.maxbitlevel)
                    this.props.author.bits += ransource
                    const ramsaanis = new discord.MessageEmbed()
                        .setColor('DARK_GREEN')
                        .addField("💵 Cash Earned 💵", "You earned About **" + ransource + "** Cash.")
                    this.props.lineReply(ramsaanis); //Line (Inline) Reply with mention
                }

            } else if (command === "shop" || command === "sh") {
                if (args[0] === "updates")
                    sendMessage("RECENT UPDATE, **New Fishing Rod Added!**\nType -shop help ")
                if (args[0] === "buy") {
                    if (args[1] === "cpu" && this.props.author.bits >= 30) {
                        this.props.author.bits -= 30
                        this.props.author.maxbitlevel += getRandomInt(0, 5)
                        this.props.author.karma += 2.220
                        sendMessage("Bought Better CPU. You can now mine `" + this.props.author.maxbitlevel + "` Bits at a time.")
                    } else if (args[1] === "core" && this.props.author.bits >= 70) {
                        this.props.author.bits -= 70
                        this.props.author.bonus += getRandomInt(1, 20)
                        this.props.author.karma += 2.220
                        sendMessage("You bought another core. Your PC runs faster than ever! You can now get up to a bonus of " + this.props.author.bonus + "x Points.")
                    } else if (args[1] === "ultracore" && this.props.author.bits >= 200) {
                        this.props.author.bits -= 100
                        this.props.author.bonus += getRandomInt(1, 90)
                        this.props.author.karma += 2.220
                        sendMessage("You bought another core. Your PC runs faster than ever! You can now get up to a bonus of " + this.props.author.bonus + "x Points.")
                    } else if (args[1] === "megacore" && this.props.author.bits >= 1500) {
                        this.props.author.bits -= 500
                        this.props.author.bonus += getRandomInt(1, 900)
                        this.props.author.karma += 2.220
                        sendMessage("You bought another core. Your PC runs faster than ever! You can now get up to a bonus of " + this.props.author.bonus + "x Points.")
                    } else if (args[1] === "pc" && this.props.author.bits >= 1000000) {
                        this.props.author.bits -= 100000
                        this.props.author.bonus += 1000000
                        this.props.author.maxbitlevel += 100000
                        this.props.author.karma += 1.021
                        sendMessage("You bought another expensive PC. That was a good investment because you now get 10 CPUs, 30000 Cores, 6 MEGA Cores, and 1000000 Bonuses! Thanks for playing this game.")
                    } else if (args[1] === "gold" && this.props.author.bits >= 400000) {
                        this.props.author.bits -= 400000;
                        this.props.author.bonus += 10000

                        this.props.author.maxbitlevel += 500
                        this.props.author.bonus += 270000
                        this.props.author.gold += 1
                        this.props.author.karma += 2.220
                        sendMessage("YOU HAVE BOUGHT THE GOLD. YOUR BONUS IS NOW " + this.props.author.bonus + ", YOUR MAX LEVEL IS " + this.props.author.maxbitlevel + ", AND YOU NOW HAVE 500+ CPU. You also get 1 Gold. Say ~$inventory to see more.");
                    } else if (args[1] === "fishing-rod") {
                        if (this.props.author.bits !== 15000)
                            return sendMessage("You don't have enough bits to buy a ROD Yet!")
                        this.props.author.backpack.push("fishing_rod");
                        sendMessage("You successfully bought a fishing rod! You can now get slithery friends.......are fish slippery- you know what nevermind. Enjoy the rod dude.")
                    } else {
                        sendMessage("You may not have enough bits to buy that.")
                    }

                } else if (args[1] === "list" || !args[0]) {
                    const ems = new discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor("List of items in the shop")
                        .setDescription("EEEVERYTHING IN THE SHOP!")
                        .addField("Items?", "Buyer's License. Allows you to sell your valuable objects on MemeBay. [Based off of EBay.](https://ebay.com).\n" + "Gold. Allows users to flex on the users less wealthy than them.\n\nPC. Buys an entire PC. Expensive Enough.\n\nOwn Memebay (1000 Gold & 100000000 GOLD) Allows you to own memebay, Set up a logging channel (#memebay), and you get notified when anybody makes a purchase!\n\nCPU. Upgrades your CPU. ***WARNING: THIS ITEM IS DEPRECATED. YOU CAN EARN FREE CPU POWER BY TRAINING.***\n\nCore. Duplicates your Mines. Up to 16.\n\nUltra Core. Ultra Core is just A Higher Value Core. costs more for less.\n\nMega Core. The Mega Core Gives you OP Things.\nFISHING RODS! Go fishing with your trusty rod and sell fishies for cash! ...or more fish... But you'd rather buy more cash right?", true)
                        .addField("Commands?", "`-shop buy cpu`\n" +
                            "`-shop buy core`\n" +
                            "`-shop buy ultracore`\n" +
                            "`-shop buy megacore`\n" +
                            "`-shop buy pc`\n" +
                            "`-shop buy gold`\n" +
                            "`-shop buy fishing-rod`")
                    sendMessage(ems);

                }
            } else if (command === "upvote") {
                try {
                    const user = this.props.mentions.members.first()
                    const profile = require("./usrs/" + user.id + ".json")
                    profile.upvotes += 1
                    ManipulateJSON(profile, "./usrs/" + user.id + ".json");

                } catch (e) {
                    sendMessage("Failed to execute that action.")
                }
            } else if (command === "job") {
                if (!args[0]) return this.props.reply("I need an action please! Syntax: `-job [action] | -job help`")
                if (args[0] === "help") {
                    const jobs = new discord.MessageEmbed()
                        .setAuthor("Available Jobs", this.props.author.avatarURL())
                        .setColor('RED')
                        .setDescription("A List of available Jobs. Sorted Using our Job algorithm.")
                        .setFooter("Your current job is " + this.props.author.job + ". Are you really about to give that away?")
                        .addField("C++ Developer",
                            "Bonus: **100**\n" +
                            "Bits Given On Join: 1200")
                        .addField("C# .NET Developer",
                            "Bonus: **203**\n" +
                            "Bits Given On Join: 1600")
                        .addField("CEO",
                            "Bonus: **4,291**\n" +
                            "Bits Given On Join: 9827")
                    sendMessage(jobs)
                }
                if (args[0] === "get") {
                    if (args[1] === "cpp") {
                        this.props.author.job = "CPPDev"
                        sendMessage("You now work as a C++ Dev! You can now do -work And earn Money!")
                    }
                }
            } else if (command === "level" || command === "lvl" || command === "position" || command === "hierarchy") {
                let s = new discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor('Your level', this.props.author.avatarURL())
                    .setDescription('Your Current level is **' + this.props.author.level + "**")
                    .addField("How Much XP Do I have?", "You have " + this.props.author.points + "p XP.\n" +
                        "(" + this.props.author.points + "/" + this.props.author.goal + ")")
                sendMessage(s)

            } else if (command === "rshop") {
                if (this.props.author.bits < 10000 && this.props.author.gold < 1)
                    sendMessage("You need at least 10000 Bits & 1 Gold to shop here.")
                else {
                    sendMessage("The Rich Shop.")
                    if (args[0] === "buy") {
                        console.log("User wants to buy " + args[1] + "which is " + args[2])
                        if (args[1] === "crate") {
                            console.log("A Crate")
                            if (args[2] === "common" && this.props.author.gold >= 1) {
                                console.log("Which is common ")
                                this.props.author.gold -= 1
                                sendMessage("You got a common crate. You earned")
                                let common_bonus = getRandomInt(1, 10)
                                let common_bits = getRandomInt(1, 100)
                                this.props.author.bits += common_bits
                                this.props.author.bonus += common_bonus
                                sendMessage("- A **" + common_bonus + "**x Bonus!\n- **" + common_bits + "** Bits!")
                            } else if (args[2] === "rare" && this.props.author.gold >= 5) {
                                this.props.author.gold -= 5
                                sendMessage("You got a `RARE` crate. You earned")
                                let common_bonus = getRandomInt(1, 100)
                                let common_bits = getRandomInt(1, 1000)
                                this.props.author.bits += common_bits
                                this.props.author.bonus += common_bonus
                                sendMessage("- A **" + common_bonus + "**x Bonus!\n- **" + common_bits + "** Bits!")
                            } else if (args[2] === "diamond" && this.props.author.gold >= 10) {
                                this.props.author.gold -= 10
                                sendMessage("You got a `RARE DIAMOND` crate. You earned")
                                let common_bonus = getRandomInt(132, 1000)
                                let common_bits = getRandomInt(133, 10000)
                                let common_karma = getRandomInt(12, 983)
                                this.props.author.bits += common_bits
                                this.props.author.bonus += common_bonus
                                this.props.author.karma += common_karma + 1.2
                                sendMessage("- A **" + common_bonus + "**x Bonus!\n- **" + common_bits + "** Bits!\n- " + common_karma + "")
                            } else {
                                sendMessage("It may not exist, Or you may not have enough gold.")
                            }
                        }

                    }

                }
            } else if (command === "gamble" || command === "gb") {
                sendMessage("*sips beer* LeTs Do TiS MeN");

                let your = getRandomInt(0, 6)
                const mines = getRandomInt(0, 6)
                let amounts = args[0]

                if (amounts === "all")
                    amounts = parseInt(this.props.author.bits)
                else
                    amounts = parseInt(args[0]);
                sendMessage("You had " + your + ", I Had " + mines)
                if (your > mines) {
                    sendMessage("Crap. You get some muneys. Twice your amount!")
                    this.props.author.bits += amounts * 2
                    sendMessage("GG!")
                } else if (mines > your) {
                    sendMessage("YOU LOST GG! You lose your bits.")
                    this.props.author.bits -= amounts

                }
            } else if (command === "code" || command === "source") {
                let meemd = new discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor("Hello!")
                    .setDescription("Hey there " + this.props.author.username + ", You can find the code [Here!](https://github.com/Kai-Builder/CryptKeeper/), The 2.89 Code can be found [in this area.](https://www.github.com/Kai-Builder/CryptKeeper/tree/c2.89)")
                sendMessage(meemd)
            } else if (command === "support") {
                let msge = new discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor('Hey there, Some ways to support are:')
                    .addField("Contributing", "Help make CryptKeeper Awesome!", true)
                    .addField("Inviting the bot!", "Inviting the bot to your servers not only helps it get verified, But also helps cryptkeeper get more users to give honest feedback.", true)
                sendMessage(msge);
            } else if (command === "profile") {
                if (!args[0])
                    sendMessage("You need to Say a user first.")
                else {
                    sendMessage("Searching that user's profile. . .")
                    try {
                        const member = this.props.mentions.members.first()
                        const user = require('./usrs/' + member.id + ".json")
                        const u = new discord.MessageEmbed()
                            .setColor(user.color)
                            .setAuthor(args[0] + "'s profile")
                            .setDescription(user.bio)
                            .addField("Inventory", "Bits: " + user.bits + "\nUser Bonus: " + user.inventory.bonus + "\nUser Gold: " + user.inventory.gold + '\n', true)
                        sendMessage(u)
                    } catch (e) {
                        sendMessage("That user's profile has not been made yet.")
                    }
                }
            } else if (command === "newprofile") {
                if (this.props.author.bits < 800)
                    sendMessage("Hey! You can't make a profile with just " + this.props.author.bits + " alone. You need about 800 of them to continue. Legalities.")
                else {
                    if (!args[0] || args[0] === "how" || args[0] === "help") {
                        sendMessage("Create a profile to flex on your buddies! Requires 800 Bits.\n" +
                            "Command Syntax: ~$newprofile <showpoints=true> <color=discordcolor> <favcommand> <bio>")
                    } else {
                        sendMessage("Creating you a profile Now!")


                        let color = args[0]
                        let favcommand = args[1]

                        let bio = args.slice(2).join(' ');
                        fs.writeFileSync('usrs/' + this.props.author.id + '.json', `{
  "name": "${this.props.author.username}",
  "favorite_command": "${favcommand}",
  "bio": "${bio}",
  "bits": ${this.props.author.bits},
  "displaycolor": "${color}",
  "inventory": {,
  "upvotes": 0,
\t"bonus": ${this.props.author.bonus},
    "gold": ${this.props.author.gold},
    "licenses": [],
    "profileable": true,
    "owner": false
  }
}`)
                    }
                }
            } else if (command === "show_bits") {
                sendMessage("`" + this.props.author.bits + "`")
            } else if (command === "guide") {
                sendMessage("How to get rich:\nStart your quest by saying `~$mine`\nEarn Money by Doubling money earnings by Buying CPUs & Bonuses! `~$shop buy core`\nPrestige to earn BIGGER Bonuses! `~$prestige`\nTrain Your Skill to earn FREE CPU!\nParticipate In CryptKeeper Events To earn BANK! ~$events play\nBuy A PC To earn ultimate stocks. ~$shop buy pc\nBecome the richest CryptKeeper User!")
            } else if (command === "train") {
                this.props.author.maxbitlevel += getRandomInt(0, 50)
                sendMessage("You've been running some valve stress tests, and your max bit level has been upgraded!\nNow: " + this.props.author.maxbitlevel)
            } else if (command === "faq") {
                sendMessage("FAQ\nDataBase Used? **None.**\nHow Long? **The Work of 1 Developer in one night.**\nLanguage? **JavaScript.**")
            } else if (command === "upgrade") {
                if (args[0] === "cpu-goldmine" && this.props.author.bits > 10000000) {
                    this.props.author.bits -= 10000000
                    sendMessage("Your CPU can now produce Gold! When was that added?")
                    this.props.author.goldmine = true
                } else if (args[0] === "cpu-doubler" && this.props.author.bits > 200000000) {
                    this.props.author.bits -= 200000000
                } else if (args[0] === "list") {
                    sendMessage("Upgrades your mining experience!\nList:\n- Gold Mine (200000000) Gives a chance to give you a random amount of gold every mine.\nCPU Doubler (10000000) Doubles your current Bit level.")
                } else {
                    sendMessage("You may not have enough. Say -upgrade list To see why.")
                }
            } else if (command === "chat") {
                const res = fetch(`https://api.snowflakedev.xyz/api/chatbot?message=${encodeURIComponent(message.content)}`, {
                    headers: {
                        "Authorization": client.user
                    }
                });
                const json = res.json();
                return this.props.channel.send(json.message);
            } else if (command === "reset") {
                sendMessage("Data Broken? Already won? Try Restarting. Your karma stays, All of your objects go (Bits, Bonuses, etc.)")
                this.props.author.bits = 0
                this.props.author.maxbitlevel = 10
                this.props.author.gold = 0
                this.props.author.bonus = 0
                fs.writeFileSync("./" + this.props.author.id, "0\n0\n10\n0\n0\nfalse")
            } else if (command === "ships") {
                sendMessage("Are you challenging me? Well, Stats have it that")
                let mine = getRandomInt(1, 31)
                let yours = parseInt(args[0])
                if (yours < mine && yours < 31)
                    sendMessage("You lost! I Had " + mine + " ships. You had " + yours + " :)")
                else if (mine < yours && yours <= 31) {
                    sendMessage("Damn! You had " + yours + " ships, I had " + mine)
                    let cur = getRandomInt(1, 700)
                    sendMessage("Here you go. Here's your pay of " + cur + " bits.")
                    this.props.author.bits += cur
                }
                if (yours > 31)
                    sendMessage("Yo yo yo.. Chill, Only `31` ships max.")
            } else if (command === "ecosystem") {
                if (args[0] === "games") {
                    sendMessage("Games are a fun, Yet addicting way to earn bits and will have you intrigued forever! We have ships, Dice, And Much More!")
                } else if (args[0] === "miner") {
                    sendMessage("Mining is an addicting way, But a moderators' least favorite way to earn some heavy cash.")
                } else if (args[0] === "karma")
                    sendMessage("Karma Is yet another way to capitalize on your peers. You can earn karma by buying things in the shop.")
                else if (args[0] === "chap" || args[0] === "seasons" || args[0] === "chapters")
                    sendMessage("The Current Chapter Is PoolWave. This Chapter Introduces Many" +
                        " new Ranks and commands to cryptkeeper. ")
            } else if (command === "spend") {
                if (!args[0] || args[0] === "help") {
                    sendMessage("Spend your karma on ranks!\nWe have MVP, BIGUSER, ULTRAUSER, And many more. To see them all, Say ~$spend list")
                } else if (args[0] === "list") {
                    const e = new discord.MessageEmbed()
                        .setAuthor("Ranks Available")
                        .setDescription("All ranks available now!")
                        .addField('RANKS', "∘ MVP | 190000 Karma\n∘ BIGUSER | 203900309 .Karma\n∘ ULTRAUSER | 2980182937129632536172357 Karma\n∘ MVP++ | 121803789126397123 Karma | Gives you access to special commands 7u7\n∘ CODER | nil Karma | Only the OWNER Of this bot can give you this rank.", true)
                        .addField('HOW', 'You can earn karma by buying items in the shop.')

                    sendMessage(e)
                } else if (args[0] === "super_user") {
                    if (this.props.author.bits < 100002301031) {
                        sendMessage("You do not have enough bits to buy the super_user Rank.")
                    } else {
                        this.props.author.bits -= 100002301031;
                        this.props.author.rank = "SUPERUSER"
                        sendMessage("Finished! Your new rank is `" + this.props.author.rank + "`")
                    }
                }

            } else if (command === "superuserlounge") {
                if (this.props.author.rank !== "SUPERUSER") {
                    sendMessage("You can not enter Without the Rank!\n" +
                        "Required Rank: SUPERUSER\n" +
                        "Your Rank: " + this.props.author.rank)
                } else {
                    const em = new discord.MessageEmbed()
                        .setColor('BLUE')
                        .setAuthor("Super User Rank Lounge")
                        .addField("What do we do here?", "You can play, Add profiles, do other cool things, In the SUSER LOUNGE!")
                    sendMessage(em)
                }
            } else if (command === "better-guide") {
                sendMessage("How to get rich x2\n" +
                    "First: Train Using `-train` Until about 50.\n" +
                    "Next: Mine for 5 minutes until you have about 200 Bits. `-mine`\n" +
                    "After, Buy a core to double your mines. `-shop buy core`\n" +
                    "Finally, Buy some gold and go to the Rich Shop. `-shop buy gold | -rshop buy crate [rarity | Level]`\n" +
                    "For a list of commands, Say `-commands` :)")
            } else if (command === "commands") {
                const helpmessage = new discord.MessageEmbed()
                    .setAuthor("List of Commands", this.props.author.avatarURL())
                    .setTitle("Commands")
                    .setColor('LUMINOUS_VIVID_PINK')
                    .addField("Currency Checking", "`-inv | -inventory | -me` View Your Inventory.\n" +
                        "`-show_bits` Deprecated. Shows your current Bit amount.\n" +
                        "\n")
                    .addField("Games",
                        "`-ships [amount]` Plays the good ol' game of ships. Can give up to 1000 bits.\n" +
                        "`-gamble [all | amount: integer]` Gambles an amount of money. You get double or minus the amount you set.\n" +
                        "\n")
                    .addField("Core Classes And Commands",
                        "`-mine` Gives you some money.\n" +
                        "`-shop | ~$shop buy list` Lists Items in the shop.\n" +
                        "`-shop buy [item]` Buys an item from the shop.\n" +
                        "`-shop buy list` Deprecated Since 1.8. Shows items of the shop. You can use `-shop help | -shop [nothing]` To view Items.\n" +
                        "`-ecosystem [system]` Since 1.5 This system has been giving information about classes of cryptkeeper.\n" +
                        "`-guide` Pretty self-explanatory. ")
                    .addField("Scheduled-for-demolition Commands",
                        "`-show_bits` Shows your bits.\n" +
                        "`-guide` Soon to be replaced with `-better-guide`, `-guide` Gives basic information about how to win. Outdated now.\n" +
                        "`-save` Saves your data. Soon to be replaced with autoLoad and removed.\n" +
                        "`-load` Loads the data. Soon to be replaced with autoLoads and autowrites.\n" +
                        "`-help` Redirects you to `~$guide`. Scheduled for demolition because it is unnecessary.\n")
                    .addField("Social Profiling",
                        "`-profile [mention] | ~$profile [id]` Gets a user's profile.\n" +
                        "`-newprofile [favoritecolor] [displaycolor] [bio]` Makes a new profile.\n")
                    .addField("Owner Only",
                        "`-give` Gives a user some bits." +
                        "`-newrank [rank]` Gives you a new Rank. How fun!")
                    .addField("Hierarchy Tools",
                        "`-superuserlounge` Requires SUPERUSER. Allows you to flex your wealth with the SUser Lounge :)\n")
                    .addField("Miscellaneous",
                        "`-code | -source` Shows where you can find the github repository.\n" +
                        "`-support` Ways to support CryptKeeper Development.\n" +
                        "`-reset` Resets all your data. No going back!")
                    .addField("Debugging Tools",
                        "`-lastsave` Checks the last time you saved.")
                    .addField("CryptKeeper's Bot List",
                        "`-bot [id] [name] [prefix] [description]` Creates a Bot for the botList.\n" +
                        "`-botlist` Gives an introduction on the BotList :)\n" +
                        "`-botlist-search [botname]` Searches for a discord bot using quarillax's Algorithms.\n")
                    .addField("New Commands",
                        "`-verify @user` Verifies a user.\n" +
                        "`-show-bits` Shows the bits of a user.\n" +
                        "`-give` Now in open Beta! Give any user some bits.\n" +
                        "`-search` Searches Local areas for bits.\n" +
                        "`-gimme | -recycle_bin` Ask me for money. Not always guaranteed!")
                    .addField("Utility & Such",
                        "`-notifications` Shows your notifications\n" +
                        "`-clear_notifications` Silently Clears your notifications`")

                sendMessage(helpmessage)
            } else if (command === "lastsave") {
                const lastsave = new discord.MessageEmbed()
                    .setAuthor("Last time it has autosaved for you!", this.props.author.avatarURL())
                    .setColor('NOT_QUITE_BLACK')
                    .setFooter("AutoLoad Is an expirimental feature.")
                    .addField("Last autosave?", this.props.author.lastautosave)
                    .addField("Why do I need to save",
                        "You don't need to, The new experimental autoLoader Feature takes care of it for you. This is part of the debugging commands to test when it decides to auto save for you.")
                if (this.props.author.lastautosave !== undefined)
                    sendMessage(lastsave)
            } else if (command === "botlist") {
                sendMessage("Did you know CryptKeeper Has a bot list now? You need to have the SUPERUSER Rank to submit your bot. You can submit by typing `-bot submit [clientID] [DName] [prefix] [description]`")
            } else if (
                command === "bot"
                && this.props.author.rank === "SUPERUSER"

            ) {
                if (!args[0]) {
                    sendMessage("```js\n-bot [id] [name] [prefix] [description]```")
                } else {
                    let inv = "https://discord.com/oauth2/authorize?client_id=" + args[0] + "&scope=bot&permissions=8"
                    sendMessage("The Invite for your bot is " + inv + ", Next, I'm going to generate a JSON file for your bot. One second Please. . ");
                    sendMessage("I'm generating a file for your bot now, And Using Quarillax, You can Intelligently Search other bots. Thanks to Kai Gonzalez | Kai-Builder on GitHub :) https://www.github.com/Kai-Builder")
                    fs.writeFileSync("./bots/" + args[0] + ".json", `
                {
  "name": "${args[1]}",
  "description": "${args.slice(3).join(' ')}",
  "prefix": "${args[2]}",
  "invite": "${inv}"
}`)
                    sendMessage("Done! Users can now look for your file in the bot list.")
                }
            } else if (command === "botlist-search") {
                if (!args[0]) {
                    sendMessage("Hey, You should give a bot to search. The syntax is `~$botlist-search [bot]`")
                } else {

                    let results = 0
                    let member = fs.readdirSync("./bots")
                    const botembed = new discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription("Discord Bots From the Search Query " + args[0] + "?")


                    for (let i = 0; i < member.length; i++) {

                        const bot = require('./bots/' + member[i])
                        const botname = bot.name.toLowerCase()
                        if (botname.includes(args[0].toLowerCase())) {
                            results++

                            botembed.addField(bot.name, "\nPrefix: " + bot.prefix + "\nDescription: " + bot.description + "\nInvite: " + bot.invite)
                        }

                    }
                    botembed.setAuthor("We found " + results + " bots for you")

                    sendMessage(botembed)
                }
            } else if (command === "newrank" && this.props.member.id === '776509456620060672' || this.props.member.id === '749470322570559528') {
                this.props.author.rank = args[0]
                sendMessage("Ok. Now your rank is " + this.props.author.rank)
            }

            if (this.props.content.includes("<@!822319894992519219>")) {
                this.props.channel.send("My prefix is `-`, If you were wondering.")
            } else if (command === "activity") {
                let leaderboard = []

                let maindir = fs.readdirSync('./api/' + this.props.guild.id + "/")
                for (let i = 0; i < maindir.length; ++i) {
                    const usera = fs.readFileSync('./api/' + this.props.guild.id + "/" + maindir[i]);
                    if (parseInt(usera[0].toString()) >= 10) {
                        console.log("This user has " + usera[i] + " pts")
                        leaderboard.unshift("<@!" + maindir[i] + ">");
                    } else if (parseInt(usera[0].toString()) <= 5) {
                        leaderboard.push("<@!" + maindir[i] + ">")
                    }
                }
                const lboard = new discord.MessageEmbed()
                    .setDescription(leaderboard.join("\n"))
                    .setColor('GREEN')
                this.props.channel.send(lboard)
            } else if (command === "text") {
                sendMessage("CryptKeeper is out of heavy development!\n" +
                    "After A couple days, and a couple of long nights trying so hard not to use a database,\n" +
                    "CryptKeeper is now out of its development stage! And updates to ecosystems will now come easier than ever.")
            } else if (command === "verify") {
                let user = this.props.mentions.members.first();

                user.verified = true;

            } else if (command === "get-bits") {

            } else if (command === "userbits") {
                const user = this.props.mentions.members.first();
                sendMessage(user.bits.toString())
            } else if (command === "work") {
                if (this.props.author.job === "CryptoMiner") {
                    let amount = getRandomInt(100, 1939);
                    this.props.author.bits += amount;
                    let emsssded = new discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor('You Work as a ' + this.props.author.job)
                        .addField("Earned:", "About " + amount + " bits for your job as a " + this.props.author.job + ".");
                    sendMessage(emsssded)
                }
                if (this.props.author.job === "CPPDev") {
                    let amount = getRandomInt(100, 1939332);
                    this.props.author.bits += amount;
                    let emsssded = new discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor('You Work as a ' + this.props.author.job)
                        .addField("Earned:", "About " + amount + " bits for your job as a " + this.props.author.job + ".");
                    sendMessage(emsssded)
                }

            } else if (command === "counter") {
                if (args[0] === "channel") {
                    this.props.guild.countingchannel = this.props.mentions.channels.first();
                    this.props.guild.goal = 1;
                }

            } else if (command === "claim") {
                sendMessage("After all of the bugs that cryptkeeper's been experiencing lately, You can claim a special gift >->\n" +
                    "You can claim by typing -claim! You've added the new `javascript_hat` Cosmetic!")
                this.props.author.inventory.push("javascript_hat");
            } else if (command === "lvlupmessages") {
                try {


                    const e = new discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor('Your Level Up messages', this.props.author.avatarURL())
                    let mes = 0;
                    for (let i = 0; i < this.props.author.levelupmessages.length; i++) {
                        mes++
                        e.addField(mes, "\"" + this.props.author.levelupmessages[i] + "\"")
                    }
                    this.props.lineReply(e); //Line (Inline) Reply with mention
                } catch (e) {
                    this.props.lineReply('You have no level up messages. Get grinding!'); //Line (Inline) Reply with mention
                }
            } else if (command === "uptime") {
                let totalSeconds = (client.uptime / 1000);
                let days = Math.floor(totalSeconds / 86400);
                totalSeconds %= 86400;
                let hours = Math.floor(totalSeconds / 3600);
                totalSeconds %= 3600;
                let minutes = Math.floor(totalSeconds / 60);
                let seconds = Math.floor(totalSeconds % 60);
                this.props.lineReply(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
            } else if (command === "notifications") {
                const generateEmbed = start => {
                    const current = this.props.author.notis.slice(start, start + 10)

                    // you can of course customise this embed however you want
                    const embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`Showing notifications ${start + 1}-${start + current.length} out of ${this.props.author.notis.length} Notifications`)
                    current.forEach(g => embed.addField("Some Notification:", `**Notification** ${g}\n`))
                    return embed
                }

// edit: you can store the message author like this:
                const author = this.props.author

// send the embed with the first 10 guilds
                this.props.channel.send(generateEmbed(0)).then(msg => {
                    // exit if there is only one page of guilds (no need for all of this)
                    if (msg.author.notis.length <= 10) return
                    // react with the right arrow (so that the user can click it) (left arrow isn't needed because it is the start)
                    msg.react('➡️')
                    const collector = msg.createReactionCollector(
                        // only collect left and right arrow reactions from the message author
                        (reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id,
                        // time out after a minute
                        {time: 60000}
                    )

                    let currentIndex = 0
                    collector.on('collect', reaction => {
                        // remove the existing reactions
                        msg.reactions.removeAll().then(async () => {
                            // increase/decrease index
                            reaction.emoji.name === '⬅️' ? currentIndex -= 10 : currentIndex += 10
                            // edit message with new embed
                            await msg.edit(generateEmbed(currentIndex))
                            // react with left arrow if it isn't the start (await is used so that the right arrow always goes after the left)
                            if (currentIndex !== 0) await msg.react('⬅️')
                            // react with right arrow if it isn't the end
                            if (currentIndex + 10 < msg.author.notis.length) await msg.react('➡️')
                        })
                    })
                })
            } else if (command === "clear_notifications") {
                this.props.author.notis = []
            } else if (command === "recycle_bin" || command === "steal" || command === "gimme") {
                if (getRandomInt(0, 5) === 3 || getRandomInt(0, 5) === 2) {
                    this.props.lineReplyNoMention("no you're not getting money")
                } else {
                    let ransource = getRandomInt(100, 2138)
                    this.props.lineReplyNoMention("...fineeee here you go. *don't tell anybody else i just gave you " + ransource.toString() + " bits...*")
                }
            } else if (command === "search"
            ) {
                let rand = getRandomInt(0, 3100)
                let places = ["You search the car for " + rand + " bits.",
                    "You look in the trees. for " + rand + " bits.",
                    "You buy a cake and find " + rand + " bits inside. Would you have got more if you didn't start eating-",
                    "Hard work pays off! You now earned " + rand + " bits.",
                    "You opened your desktop and decided to search your recycle bin for " + rand + " !",
                    "You looked up how to download more RAM. You have a virus now but earned " + rand + " bits.. Why do you do these things-",
                    "U are bit master :0 " + rand + " bits?! How!!!??"]
                if (rand === 0) {
                    return this.props.lineReply("You didn't earn any cash :( Sad.")
                }
                this.props.lineReplyNoMention(places[getRandomInt(0, places.length - 1)])
            } else {
                try {
                    const cmd = require('./commands/' + command + ".js");
                    cmd.rundef(args, command, this.props, this.props.author, this.props.author.bits);
                } catch (e) {

                }
            }
            fs.writeFileSync(this.props.author.id, this.props.author.bits + "\n" + this.props.author.bonus + "\n" + this.props.author.maxbitlevel + "\n" + this.props.author.gold + "\n" + this.props.author.karma + "\n" + this.props.author.goldmine + "\n" + this.props.author.licenses + "\n" + this.props.author.rank + "\n" + this.props.author.fish + "\n" + this.props.author.backpack + "\n" + this.props.author.verified + "\n" + this.props.author.points + "\n" + this.props.author.goal);
        }
    }
})

client.login(process.env.TOKEN).then(() => function () {
    console.log("logged in")
})


