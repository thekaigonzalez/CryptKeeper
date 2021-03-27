const discord = require('discord.js')
const fs = require("fs");

const client = new discord.Client()


const snekfetch = require("snekfetch")
client.on('ready', function () {
    client.user.setActivity("Fixing AutoLoad. | ~$help", {type: "WATCHING"}).then(() => {
        console.log("Done!");
    })
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
const prefix = '~$';
discord.User.prototype.reputation = 0;
discord.User.prototype.points = 0;
discord.GuildMember.prototype.reputation = 0;
discord.GuildMember.prototype.points = 0;
discord.GuildMember.prototype.bits = 0;
discord.GuildMember.prototype.level = 0;
discord.GuildMember.prototype.maxbitlevel = 15;
const express = require('express');
const app = express();
const port = 3000;
// when i was a kid i existed.
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Bot listening at http://localhost:${port}`));


discord.GuildMember.prototype.bonus = 0;
client.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    let array
    try {
        array = fs.readFileSync('./' + msg.author.id).toString().split("\n");
    } catch (e) {
    
    }
    function save() {
        fs.writeFileSync(msg.author.id.toString(),
            msg.author.bits + "\n" +
            msg.author.bonus + "\n" +
            msg.author.maxbitlevel + "\n" +
            msg.author.gold + "\n" + msg.author.karma +
            "\n" + msg.author.goldmine + "\n" + msg.author.licenses
            + "\n" + msg.author.rank)
    }
    try {
        
        if (array[0] !== 0)
            msg.author.bits = parseInt(array[0])
        if (array[1] !== 1)
            msg.author.bonus = parseInt(array[1])
        msg.author.maxbitlevel = parseInt(array[2])
        msg.author.gold = parseInt(array[3])
        msg.author.karma = parseFloat(array[4])
        msg.author.goldmine = eval(array[5]);
        msg.author.licenses = eval(array[6])
        msg.author.rank = array[7];
    } catch (e) {
        console.log("User is not in KSDQ DB")
    }
    if (msg.author.rank === undefined || msg.author.rank === null)
        msg.author.rank = "NEWBIE"
    if (msg.author.licenses === undefined || msg.author.licenses === null)
        msg.author.licenses = []
    // noinspection JSUnresolvedVariable,JSUndefinedPropertyAssignment
    if (msg.author.goldmine === undefined || msg.author.goldmine === null)
        msg.author.goldmine = false
    if (isNaN(msg.author.mines))
        msg.author.mines = 0
    if (isNaN(msg.author.gold))
        msg.author.gold = 0
    if (isNaN(msg.author.karma))
        msg.author.karma = 0
    if (isNaN(msg.author.maxbitlevel))
        msg.author.maxbitlevel = 10
    if (isNaN(msg.author.prestiges))
        msg.author.prestiges = 0
    if (isNaN(msg.author.gold))
        msg.author.gold = 0
    
    msg.author.points += getRandomInt(1, 16);
    if (isNaN(msg.author.bonus))
        msg.author.bonus = 0
    if (msg.author.inv === undefined)
        msg.author.inv = []
    if (msg.author.bits === undefined || isNaN(msg.author.bits)) {
        msg.author.bits = 0
        msg.author.bits += 10
        console.log("User bit range messed up. Now have " + msg.author.bits)
    }
    if (isNaN(msg.author.level))
        msg.author.level = 0
    function sendMessage(msgst) {
        msg.channel.send(msgst).then(() => {
            console.log("done ")
        })
    }
    
    function getMessage(msgt) {
        return msg.channel.send(msgt)
    }
    
    if (msg.author.points === 52) {
        msg.reply("You've Reached level 1!")
        msg.author.level += 1;
    } else if (msg.author.points === 90) {
        msg.reply("You've reached level 2!")
        msg.author.level += 1;
    } else if (msg.author.points === 150) {
        msg.reply("You've reached level 3!")
        msg.author.level += 1;
    } else if (msg.author.points === 200) {
        msg.reply("You've reached level 4, Keep this up and you could earn some serious bank!")
        msg.author.level += 1;
    } else if (msg.author.points === 250) {
        msg.reply("You've reached level 5, Keep this up, and you could earn some serious bank!")
        msg.author.level += 1;
    } else if (msg.author.points === 310) {
        msg.reply("You've reached Level 6, You now earn `10` points!")
        msg.author.bits += 10
        msg.author.level += 1;
    }
    if (msg.content.startsWith("~$") && msg.channel.type !== "dm") {
        console.log(command)
        const fs = require('fs');
        if (command === "help") {
            sendMessage("Type ~$guide To begin your rich-ness journey.");
        } else if (command === "save") {
            sendMessage("You have " + msg.author.bits + " points, saving now.")
            fs.writeFileSync(msg.author.id, msg.author.bits + "\n" + msg.author.bonus + "\n" + msg.author.maxbitlevel + "\n" + msg.author.gold + "\n" + msg.author.karma + "\n" + msg.author.goldmine + "\n" + msg.author.licenses);
            sendMessage("Done! If the bot dies or crashes, You can type ~$load to load your points, Bonuses, And other goodies :)")
        } else if (command === "version") {
            sendMessage("I'm running on version 2.0!")
        }
        else if (command === "load") {
            sendMessage("Loading. . .")
            let array
            try {
                array = fs.readFileSync('./' + msg.author.id).toString().split("\n");
            } catch (e) {
                sendMessage("You aren't loaded :( Try saying ~$save.")
                
            }
            sendMessage("Your points were " + array[0] + ", Your Bonus was " + array[1])
            try {
                
                
                msg.author.bits = parseInt(array[0])
                msg.author.bonus = parseInt(array[1])
                msg.author.maxbitlevel = parseInt(array[2])
                msg.author.gold = parseInt(array[3])
                msg.author.karma = parseFloat(array[4])
                msg.author.goldmine = eval(array[5]);
                msg.author.licenses = eval(array[6])
                msg.author.rank = array[7];
            } catch (e) {
                sendMessage("Try saving again. An error occurred.")
            }
        } else if (command === "prestige") {
            if (msg.author.bits >= 3000) {
                sendMessage("RESETTING. ON RESETS YOU GET 100* BONUS. ALL POINTS RESET.")
                msg.author.bits = 0
                msg.author.bonus += 100
                fs.writeFileSync("./" + msg.author.id, "0\n" + msg.author.bonus)
            } else {
                sendMessage("You need at least 3000 Bits to do this.")
            }
        } else if (command === "points") {
            let points = parseInt(args[0]);
            sendMessage("added " + points.toString() + " to your balance.")
            if (!isNaN(points))
                msg.author.points += points
        }
        else if (command === "showpoints") {
            sendMessage(msg.author.points)
        } else if (command === "inventory" || command === "balance" || command === "inv" || command === "me")  {
            sendMessage("Your Inventory:\nBits: **" + msg.author.bits + "**\nBit Multiplier (Session): **" + msg.author.bonus + "**\nGold (~$rshop help): **" + msg.author.gold + "**\nKarma (~$spend): **" + msg.author.karma + "**\nYour Rank: " + msg.author.rank)
        } else if (command === "create_key") {
            sendMessage("Creating a Key for you . . .");
            if (!fs.existsSync("./key/" + msg.author.username)) {
                let id = getRandomInt(0, 103891238791728937)
                sendMessage("Found Secure Encryption. Connecting.");
                fs.mkdirSync("./key/" + msg.author.username + "/")
                fs.writeFileSync("./key/" + msg.author.username + "/.loginkey", id.toString())
                msg.author.send("Your ID is " + id).then(() => {
                });
                
                
            } else {
                
                sendMessage("You can't do that. We don't want the bot breaking because the developer is bad at what he does. Never!");
            }
        } else if (command === "mine") {
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
            
            msg.author.mines++;
            
            let mesages = ["You decide to test that CPU Baby! Earnings Above :)", "Don't have any more lines. Stuff Above :)"]
            if (msg.author.bonus > 1) {
                let ransource = getRandomInt(0, msg.author.maxbitlevel) * msg.author.bonus
                msg.author.bits += ransource
                let ramsaanis = new discord.MessageEmbed()
                    .setColor('DARK_GREEN')
                    .setDescription("💵 How you did on your Number No." + msg.author.mines + " mine 💵")
                    .setFooter(mesages[getRandomInt(0, mesages.length)])
                    .addField("How Much Did I Earn?", "You earn presumably 100% of your pay. With a " + msg.author.bonus + "x bonus. So about " + ransource + " bits were earned in this mine.", true)
                
                if (msg.author.goldmine === true) {
                    let gamount = getRandomInt(0, 10)
                    ramsaanis.addField("How Much Gold was earned?", "About " + gamount + " gold was earned.", true);
                    
                    msg.author.gold += gamount
                    
                    
                    
                    sendMessage(ramsaanis)
                }
                
                
                else
                {
                    msg.author.bits += ransource
                    sendMessage(ramsaanis)
                    
                }
                
            } else if (msg.author.bonus === 0) {
                let ransource = getRandomInt(0, msg.author.maxbitlevel)
                msg.author.bits += ransource
                const ramsaanis = new discord.MessageEmbed()
                    .setColor('DARK_GREEN')
                    .addField("💵 Cash Earned 💵", "You earned About **" + ransource + "** Cash.")
                sendMessage(ramsaanis)
            }
            save()
        } else if (command === "shop") {
            if (args[0] === "updates")
                sendMessage("RECENT UPDATE, **New gold Added!**\nType ~$shop buy list . ")
            if (args[0] === "buy") {
                if (args[1] === "cpu" && msg.author.bits >= 30) {
                    msg.author.bits -= 10
                    msg.author.maxbitlevel += getRandomInt(0, 5)
                    msg.author.karma += 2.220
                    sendMessage("Bought Better CPU. You can now mine `" + msg.author.maxbitlevel + "` Bits at a time.")
                } else if (args[1] === "core" && msg.author.bits >= 70) {
                    msg.author.bits -= 40
                    msg.author.bonus += getRandomInt(1, 20)
                    msg.author.karma += 2.220
                    sendMessage("You bought another core. Your PC runs faster than ever! You can now get up to a bonus of " + msg.author.bonus + "x Points.")
                } else if (args[1] === "ultracore" && msg.author.bits >= 200) {
                    msg.author.bits -= 100
                    msg.author.bonus += getRandomInt(1, 90)
                    msg.author.karma += 2.220
                    sendMessage("You bought another core. Your PC runs faster than ever! You can now get up to a bonus of " + msg.author.bonus + "x Points.")
                } else if (args[1] === "megacore" && msg.author.bits >= 1500) {
                    msg.author.bits -= 500
                    msg.author.bonus += getRandomInt(1, 900)
                    msg.author.karma += 2.220
                    sendMessage("You bought another core. Your PC runs faster than ever! You can now get up to a bonus of " + msg.author.bonus + "x Points.")
                } else if (args[1] === "pc" && msg.author.bits >= 1000000) {
                    msg.author.bits -= 100000
                    msg.author.bonus += 1000000
                    msg.author.maxbitlevel += 100000
                    msg.author.karma += 1.021
                    sendMessage("You bought another expensive PC. That was a good investment because you now get 10 CPUs, 30000 Cores, 6 MEGA Cores, and 1000000 Bonuses! Thanks for playing this game.")
                } else if (args[1] === "gold" && msg.author.bits >= 400000) {
                    msg.author.bits -= 400000;
                    msg.author.bonus += 10000
                    
                    msg.author.maxbitlevel += 500
                    msg.author.bonus += 270000
                    msg.author.gold += 1
                    msg.author.karma += 2.220
                    sendMessage("YOU HAVE BOUGHT THE GOLD. YOUR BONUS IS NOW " + msg.author.bonus + ", YOUR MAX LEVEL IS " + msg.author.maxbitlevel + ", AND YOU NOW HAVE 500+ CPU. You also get 1 Gold. Say ~$inventory to see more.");
                } else {
                    sendMessage("You may not have enough bits to buy that.")
                }
                save()
            } else if (args[1] === "list" || !args[0]) {
                const ems = new discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setAuthor("List of items in the shop")
                    .setDescription("EEEVERYTHING IN THE SHOP!")
                    .addField("Items?", "Buyer's License. Allows you to sell your valuable objects on MemeBay. [Based off of EBay.](https://ebay.com).\n" +
                        "Gold. Allows users to flex on the users less wealthy than them.\n\nPC. Buys an entire PC. Expensive Enough.\n\nOwn Memebay (1000 Gold & 100000000 GOLD) Allows you to own memebay, Set up a logging channel (#memebay), and you get notified when anybody makes a purchase!\n\nCPU. Upgrades your CPU. ***WARNING: THIS ITEM IS DEPRECATED. YOU CAN EARN FREE CPU POWER BY TRAINING.***\n\nCore. Duplicates your Mines. Up to 16.\n\nUltra Core. Ultra Core is just A Higher Value Core. costs more for less.\n\nMega Core. The Mega Core Gives you OP Things.", true)
                
                sendMessage(ems);
                
            }
        } else if (command === "upvote") {
            try {
                const user = msg.mentions.members.first()
                const profile = require("./usrs/" + user.id + ".json")
                profile.upvotes += 1
                ManipulateJSON(profile, "./usrs/" + user.id + ".json");
                
            }
            catch (e) {
                sendMessage("Failed to execute that action.")
            }
        }
        else if (command === "level" || command === "lvl" || command === "position" || command  === "hierarchy") {
            let s = new discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('Your level', msg.author.avatarURL())
                .setDescription('Your Current level is **' + msg.author.level + "**")
                .addField("How Much XP Do I have?", "You have " + msg.author.points + "p XP.")
            sendMessage(s)
            
        }
        
        else if (command === "rshop") {
            if (msg.author.bits < 10000 && msg.author.gold < 1)
                sendMessage("You need at least 10000 Bits & 1 Gold to shop here.")
            else {
                sendMessage("The Rich Shop.")
                if (args[0] === "buy") {
                    console.log("User wants to buy " + args[1] + "which is " + args[2])
                    if (args[1] === "crate") {
                        console.log("A Crate")
                        if (args[2] === "common" && msg.author.gold >= 1) {
                            console.log("Which is common ")
                            msg.author.gold -= 1
                            sendMessage("You got a common crate. You earned")
                            let common_bonus = getRandomInt(1, 10)
                            let common_bits = getRandomInt(1, 100)
                            msg.author.bits += common_bits
                            msg.author.bonus += common_bonus
                            sendMessage("- A **" + common_bonus + "**x Bonus!\n- **" + common_bits + "** Bits!")
                        } else if (args[2] === "rare" && msg.author.gold >= 5) {
                            msg.author.gold -= 5
                            sendMessage("You got a `RARE` crate. You earned")
                            let common_bonus = getRandomInt(1, 100)
                            let common_bits = getRandomInt(1, 1000)
                            msg.author.bits += common_bits
                            msg.author.bonus += common_bonus
                            sendMessage("- A **" + common_bonus + "**x Bonus!\n- **" + common_bits + "** Bits!")
                        } else if (args[2] === "diamond" && msg.author.gold >= 10) {
                            msg.author.gold -= 10
                            sendMessage("You got a `RARE DIAMOND` crate. You earned")
                            let common_bonus = getRandomInt(132, 1000)
                            let common_bits = getRandomInt(133, 10000)
                            let common_karma = getRandomInt(12, 983)
                            msg.author.bits += common_bits
                            msg.author.bonus += common_bonus
                            msg.author.karma += common_karma + 1.2
                            sendMessage("- A **" + common_bonus + "**x Bonus!\n- **" + common_bits + "** Bits!\n- " + common_karma + "")
                        } else {
                            sendMessage("It may not exist, Or you may not have enough gold.")
                        }
                    }
                    
                }
                
            }
        } else if (command === "gamble") {
            sendMessage("*sips beer* LeTs Do TiS MeN");
            
            let your = getRandomInt(0, 6)
            const mines = getRandomInt(0, 6)
            let amounts = args[0]
            
            if (amounts === "all")
                amounts = parseInt(msg.author.bits)
            else
                amounts = parseInt(args[0]);
            sendMessage("You had " + your + ", I Had " + mines)
            if (your > mines) {
                sendMessage("Crap. You get some muneys. Twice your amount!")
                msg.author.bits += amounts * 2
                sendMessage("GG!")
            } else if (mines > your) {
                sendMessage("YOU LOST GG! You lose your bits.")
                msg.author.bits -= amounts
                save()
            }
        } else if (command === "code" || command === "source") {
            let meemd = new discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor("Hello!")
                .setDescription("Hey there " + msg.author.username + ", You can find the code [Here!](https://github.com/Kai-Builder/CryptKeeper/), The 2.0 Code can be found [in this area.](https://www.github.com/Kai-Builder/CryptKeeper/tree/c2.0)")
            sendMessage(meemd)
        }
        else if (command === "support") {
            let msge = new discord.MessageEmbed()
                .setColor('RANDOM')
                .setAuthor('Hey there, Some ways to support are:')
                .addField("Contributing", "Help make CryptKeeper Awesome!", true)
                .addField("Inviting the bot!", "Inviting the bot to your servers not only helps it get verified, But also helps cryptkeeper get more users to give honest feedback.", true)
            sendMessage(msge);
        }
        else if (command === "profile") {
            if (!args[0])
                sendMessage("You need to Say a user first.")
            else {
                sendMessage("Searching that user's profile. . .")
                try {
                    const member = msg.mentions.members.first()
                    const user = require('./usrs/' + member.id + ".json")
                    const u = new discord.MessageEmbed()
                        .setColor(user.color)
                        .setAuthor(args[0] + "'s profile")
                        .setDescription(user.bio)
                        .addField("Inventory", "Bits: " + user.bits + "\nUser Bonus: " + user.inventory.bonus + "\nUser Gold: " + user.inventory.gold + '\n', true)
                    sendMessage(u)
                }
                catch (e) {
                    sendMessage("That user's profile has not been made yet.")
                }
            }
        }
        else if (command === "newprofile") {
            if (msg.author.bits < 800)
                sendMessage("Hey! You can't make a profile with just " + msg.author.bits + " alone. You need about 800 of them to continue. Legalities.")
            else {
                if (!args[0] || args[0] === "how" || args[0] === "help") {
                    sendMessage("Create a profile to flex on your buddies! Requires 800 Bits.\n" +
                        "Command Syntax: ~$newprofile <showpoints=true> <color=discordcolor> <favcommand> <bio>")
                } else {
                    sendMessage("Creating you a profile Now!")
                    
                    
                    let color = args[0]
                    let favcommand = args[1]
                    
                    let bio = args.slice(2).join(' ');
                    fs.writeFileSync('usrs/' + msg.author.id + '.json', `{
  "name": "${msg.author.username}",
  "favorite_command": "${favcommand}",
  "bio": "${bio}",
  "bits": ${msg.author.bits},
  "displaycolor": "${color}",
  "inventory": {,
  "upvotes": 0,
\t"bonus": ${msg.author.bonus},
    "gold": ${msg.author.gold},
    "licenses": [],
    "profileable": true,
    "owner": false
  }
}`)
                }
            }
        }
        else if (command === "show_bits") {
            sendMessage("`" + msg.author.bits + "`")
        } else if (command === "guide") {
            sendMessage("How to get rich:\nStart your quest by saying `~$mine`\nEarn Money by Doubling money earnings by Buying CPUs & Bonuses! `~$shop buy core`\nPrestige to earn BIGGER Bonuses! `~$prestige`\nTrain Your Skill to earn FREE CPU!\nParticipate In CryptKeeper Events To earn BANK! ~$events play\nBuy A PC To earn ultimate stocks. ~$shop buy pc\nBecome the richest CryptKeeper User!")
        } else if (command === "train") {
            msg.author.maxbitlevel += getRandomInt(0, 50)
            sendMessage("You've been running some valve stress tests, and your max bit level has been upgraded!\nNow: " + msg.author.maxbitlevel)
        } else if (command === "faq") {
            sendMessage("FAQ\nDataBase Used? **None.**\nHow Long? **The Work of 1 Developer in one night.**\nLanguage? **JavaScript.**")
        } else if (command === "upgrade") {
            if (args[0] === "cpu-goldmine" && msg.author.bits > 10000000) {
                msg.author.bits -= 10000000
                sendMessage("Your CPU can now produce Gold! When was that added?")
                msg.author.goldmine = true
            } else if (args[0] === "cpu-doubler" && msg.author.bits > 200000000) {
                msg.author.bits -= 200000000
            } else if (args[0] === "list") {
                sendMessage("Upgrades your mining experience!\nList:\n- Gold Mine (200000000) Gives a chance to give you a random amount of gold every mine.\nCPU Doubler (10000000) Doubles your current Bit level.")
            } else {
                sendMessage("You may not have enough. Say ~$upgrade list To see why.")
            }
        } else if (command === "chat") {
            const res = fetch(`https://api.snowflakedev.xyz/api/chatbot?message=${encodeURIComponent(message.content)}`, {
                headers: {
                    "Authorization": client.user
                }
            });
            const json = res.json();
            return msg.channel.send(json.message);
        } else if (command === "reset") {
            sendMessage("Data Broken? Already won? Try Restarting. Your karma stays, All of your objects go (Bits, Bonuses, etc.)")
            msg.author.bits = 0
            msg.author.maxbitlevel = 10
            msg.author.gold = 0
            msg.author.bonus = 0
            fs.writeFileSync("./" + msg.author.id, "0\n0\n10\n0\n0\nfalse")
        }
        else if (command === "ships") {
            sendMessage("Are you challenging me? Well, Stats have it that")
            let mine = getRandomInt(1, 31)
            let yours = parseInt(args[0])
            if (yours < mine && yours < 31)
                sendMessage("You lost! I Had " + mine + " ships. You had " + yours + " :)")
            else if (mine < yours && yours <= 31) {
                sendMessage("Damn! You had " + yours + " ships, I had " + mine)
                let cur = getRandomInt(1, 700)
                sendMessage("Here you go. Here's your pay of " + cur + " bits.")
                msg.author.bits += cur
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
        }
        else if (command === "spend") {
            if (!args[0] || args[0] === "help") {
                sendMessage("Spend your karma on ranks!\nWe have MVP, BIGUSER, ULTRAUSER, And many more. To see them all, Say ~$spend list")
            }
            else if (args[0] === "list") {
                const e = new discord.MessageEmbed()
                    .setAuthor("Ranks Available")
                    .setDescription("All ranks available now!")
                    .addField('RANKS', "∘ MVP | 190000 Karma\n∘ BIGUSER | 203900309 .Karma\n∘ ULTRAUSER | 2980182937129632536172357 Karma\n∘ MVP++ | 121803789126397123 Karma | Gives you access to special commands 7u7\n∘ CODER | nil Karma | Only the OWNER Of this bot can give you this rank.", true)
                    .addField('HOW', 'You can earn karma by buying items in the shop.')
                
                sendMessage(e)
            }
            else if (args[0] === "super_user") {
                if (msg.author.bits < 100002301031) {
                    sendMessage("You do not have enough bits to buy the super_user Rank.")
                }
                else {
                    msg.author.bits -= 100002301031;
                    msg.author.rank = "SUPERUSER"
                    sendMessage("Finished! Your new rank is `" + msg.author.rank + "`")
                }
            }
            
        }
        else if (command === "superuserlounge") {
            if (msg.author.rank !== "SUPERUSER") {
                sendMessage("You can not enter Without the Rank!\n" +
                    "Required Rank: SUPERUSER\n" +
                    "Your Rank: " + msg.author.rank)
            }
            else {
                const em = new discord.MessageEmbed()
                    .setColor('BLUE')
                    .setAuthor("Super User Rank Lounge")
                    .addField("What do we do here?", "You can play, Add profiles, do other cool things, In the SUSER LOUNGE!")
                sendMessage(em)
            }
        }
        else if (command === "better-guide") {
            sendMessage("How to get rich x2\n" +
                "First: Train Using `~$train` Until about 50.\n" +
                "Next: Mine for 5 minutes until you have about 200 Bits. `~$mine`\n" +
                "After: Buy a core to double your mines. `~$shop buy core`\n" +
                "Finally, Buy some gold and go to the Rich Shop. `~$shop buy gold | ~$rshop buy crate [rarity | Level]`\n" +
                "For a list of commands, Say `~$commands` :)")
        }
        else if (command === "commands") {
            const helpmessage = new discord.MessageEmbed()
                .setAuthor("List of Commands", msg.author.avatarURL())
                .setTitle("Commands")
                .addField("Currency Checking", "`~$inv | ~$inventory | ~$me` View Your Inventory.\n" +
                    "`~$show_bits` Deprecated. Shows your current Bit amount.\n" +
                    "\n")
                .addField("Games",
                    "`~$ships [amount]` Plays the good ol' game of ships. Can give up to 1000 bits.\n" +
                    "`~$gamble [all | amount: integer]` Gambles an amount of money. You get double or minus the amount you set.\n" +
                    "\n")
                .addField("Core Classes And Commands",
                    "`~$mine` Gives you some money.\n" +
                    "`~$shop | ~$shop buy list` Lists Items in the shop.\n" +
                    "`~$shop buy [item]` Buys an item from the shop.\n" +
                    "`~$shop buy list` Deprecated Since 1.8. Shows items of the shop. You can use `~$shop help | ~$shop [nothing]` To view Items.\n" +
                    "`~$ecosystem [system]` Since 1.5 This system has been giving information about classes of cryptkeeper.\n" +
                    "`~$guide` Pretty self-explanatory. ")
                .addField("Scheduled-for-demolition Commands",
                    "`~$show_bits` Shows your bits.\n" +
                    "`~$guide` Soon to be replaced with `~$better-guide`, `~$guide` Gives basic information about how to win. Outdated now.\n" +
                    "`~$save` Saves your data. Soon to be replaced with autoLoad and removed.\n" +
                    "`~$load` Loads the data. Soon to be replaced with autoLoads and autowrites.\n")
                .addField("Social Profiling",
                    "`~$profile [mention] | ~$profile [id]` Gets a user's profile.\n" +
                    "`~$newprofile [favoritecolor] [displaycolor] [bio]` Makes a new profile.\n")
                .addField("Owner Only",
                    "`~$give` Gives a user some bits.")
                .addField("Hierarchy Tools",
                    "`~$superuserlounge` Requires SUPERUSER. Allows you to flex your wealth with the SUser Lounge :)\n")
                .addField("Miscellaneous",
                    "`~$code | ~$source` Shows where you can find the github repository.\n" +
                    "`~$support` Ways to support CryptKeeper Development.\n" +
                    "`~$reset` Resets all your data. No going back!")
                
            sendMessage(helpmessage)
        }
        
        
    }
})

client.login(process.env.TOKEN).then(() => function () {
    console.log("logged in")
})