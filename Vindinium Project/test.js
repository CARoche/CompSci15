var Bot = require('bot');
var PF = require('pathfinding');
//var bot = new Bot('zvfwvgf4', 'arena', 'http://vindinium.org'); //Put your bot's code here and change training to Arena when you want to fight others.
var bot = new Bot('noev19vg', 'arena', 'http://52.8.116.125:9000'); //Put your bot's code here and change training to Arena when you want to fight others.
var goDir;
var Promise = require('bluebird');
Bot.prototype.botBrain = function() {
    return new Promise(function(resolve, reject) {
        _this = bot;
        //////* Write your bot below Here *//////
        //////* Set `myDir` in the direction you want to go and then bot.goDir is set to myDir at the bottom *////////
        /*                                      * 
         * This Code is global data!            *
         *                                      */
        // Set myDir to what you want and it will set bot.goDir to that direction at the end.  Unless it is "none"
        var myDir;
        var myPos = [bot.yourBot.pos.x, bot.yourBot.pos.y];
        var enemyBots = [];
        if(bot.yourBot.id != 1) enemyBots.push(bot.bot1);
        if(bot.yourBot.id != 2) enemyBots.push(bot.bot2);
        if(bot.yourBot.id != 3) enemyBots.push(bot.bot3);
        if(bot.yourBot.id != 4) enemyBots.push(bot.bot4);
        //This sets a variable for what is not my mines
        var notMyMines = [];
        notMyMines = notMyMines.concat(bot.freeMines);
        if(bot.yourBot.id != 1) notMyMines = notMyMines.concat(bot.bot1mines);
        if(bot.yourBot.id != 2) notMyMines = notMyMines.concat(bot.bot2mines);
        if(bot.yourBot.id != 3) notMyMines = notMyMines.concat(bot.bot3mines);
        if(bot.yourBot.id != 4) notMyMines = notMyMines.concat(bot.bot4mines);
        var totalMines = bot.freeMines.length + notMyMines.length
        /*                                      * 
         * This Code Decides WHAT to do         *
         *                                      */
        var task;
        if(bot.yourBot.life < 40) {
            task = "needHealth";
        } else if(Math.floor(100 * bot.enemyBots.mineCount / notMyMines < 50)) {
            task = "fiteme";
        } else if(bot.enemyBots.life < 60) {
            task = "fiteme"
        } else {
            task = "freemines"
        }
        /*                                      * 
         * This Code Determines HOW to do it    *
         *                                      */
        // This Code find the nearest freemine and sends hero to the direction // 
        if(task === "freemines") {
            var closestMine = notMyMines[0];
            for(i = 0; i < notMyMines.length; i++) {
                if(bot.findDistance(myPos, closestMine) > bot.findDistance(myPos, notMyMines[i])) {
                    closestMine = notMyMines[i];
                }
            }
            console.log("Claiming whats mine! *slaps knee*");
            myDir = bot.findPath(myPos, closestMine);
        }
        // This code means that our bot will Attack whomever has the most mines //        
        if(task === "fiteme") {
            var closestBotPos = [bot.enemyBots[0].pos.x, bot.enemyBots[0].pos.y];
            for(i = 0; i < bot.enemyBots.length; i++) {
                if(bot.findDistance(myPos, closestBotPos) > bot.findDistance(myPos, [bot.enemyBots[i].pos.x, bot.enemyBots[i].pos.y])) {
                    closestBotPos = [bot.enemyBots[i].pos.x, bot.enemyBots[i].pos.y];
                }
            }
            console.log("Come at me!");
            myDir = bot.findPath(myPos, closestBotPos);
        }
        //This code means that whenever someone is in the proximity of my hero, and they have low health, 
        // This code will send our bot to the tavern to get health //
        if(task === "needHealth") {
            var closestTavPos = bot.taverns[0];
            for(i = 0; i < bot.taverns.length; i++) {
                if(bot.findDistance(myPos, closestTavPos) > bot.findDistance(myPos, bot.taverns[i])) {
                    closestTavPos = bot.taverns[i];
                }
            }
            console.log("I need to regain my Health!");
            myDir = bot.findPath(myPos, closestTavPos);
        }
        /*                                                                                                                              * 
         * This Code Sets your direction based on myDir.  If you are trying to go to a place that you can't reach, you move randomly.   *
         * Otherwise you move in the direction set by your code.  Feel free to change this code if you want.                            */
        if(myDir === "none") {
            console.log("Going Random!");
            var rand = Math.floor(Math.random() * 4);
            var dirs = ["north", "south", "east", "west"];
            bot.goDir = dirs[rand];
        } else {
            bot.goDir = myDir;
        }
        ///////////* DON'T REMOVE ANTYTHING BELOW THIS LINE *//////////////
        resolve();
    });
};
bot.runGame();