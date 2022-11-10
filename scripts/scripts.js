function setUsers()
{
    var users = Math.round(Math.random() * (7000 - 3000) + 3000);
    users = users.toString();
    users = users[0] + "," + users[1] + users[2] + users[3];
    document.getElementsByClassName("counter")[0].innerHTML = users;
}

function randomTime()
{
    var hours = Math.round(Math.random() * (5 - 2) + 2);
    var minutes = Math.round(Math.random() * (59 - 1) + 1);
    var seconds = Math.round(Math.random() * (59 - 1) + 1);

    var min = minutes
    var sec = seconds

    if(seconds < 10)
    {
        sec = "0" + seconds;
    }
    if(minutes < 10)
    {
        min = "0" + minutes;
    }


    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}

function play()
{
    var rickroll = document.getElementById("rickroll");
    var screen = document.getElementsByClassName("screen")[0];
    screen.remove();

    var player = document.createElement("video");
    var source = document.createElement("source");
    player.setAttribute("class", "rickroll");
    player.setAttribute("autoplay", "");
    player.setAttribute("loop", "");
    source.setAttribute("src", "https://drive.google.com/uc?export=download&id=1jzHBaCY2PW-EtNg-AYGOmon6Zl_eEe3J");
    source.setAttribute("type", "video/mp4");

    player.appendChild(source);

    rickroll.appendChild(player);
}

function randomUsers()
{
    var rand = Math.ceil(Math.random()) * (Math.round(Math.random()) ? 1 : -1)

    var counter = document.getElementsByClassName("counter")[0].innerHTML;
    counter = counter.toString();
    counter = counter[0] + counter[2] + counter[3] + counter[4];
    counter = parseInt(counter);
    var result = counter + rand;
    if(result >= 0)
    {
        result = result.toString();
        result = result[0] + "," + result[1] + result[2] + result[3]
        document.getElementsByClassName("counter")[0].innerHTML = result;
    }
}

function setTime()
{
    var hours = parseInt(document.getElementById("hours").innerHTML);
    var minutes = parseInt(document.getElementById("minutes").innerHTML);
    var seconds = parseInt(document.getElementById("seconds").innerHTML);

    seconds++;

    if(seconds == 60)
    {
        minutes++;
        seconds = 0;
    }
    if(minutes == 60)
    {
        hours++;
        minutes = 0;
    }

    var sec = seconds;
    var min = minutes;
    if(seconds < 10)
    {
        sec = "0" + seconds;
    }
    if(minutes < 10)
    {
        min = "0" + minutes;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}

function chat()
{
    var chat = document.getElementsByClassName("text-chat")[0];

    var nickNames = ["legion_tenprawdziwy", "macius_2006", "SargeGamer", "Funny_player4", "Malder222", "fire_gamer", "gejmer_", "yessir__", "urmom", "Matto", "MattUK", "BigFish23", "BigFan_", "user32", "MushRoom", "__DiabloRigs__", "ColtGamer", "ReaperGaming45", "Cutie_patootie", "Cuddle_bunny", "DbDPlayer__", "_Hillbilly_", "Pitbullfan", "ModernTalkingFan", "AnimeGurl", "PlsHelp", "americanPsycho", "Player222", "Adam2008", "kotlin__", "RedFox44", "RupertGameDev", "mrGreen", "LemonHawkv2", "Luan", "elefelen", "exijoz", "fart335", "mayo32", "mayezon__", "ketchuppp78", "fast_gamer", "speed_RUNNER", "_WaLlHaCkEr_", "Potatus_", "Sussss21", "Gamer23", "fat_player", "elfdf", "Lordofrings", "DogeFFF", "DeadMan", "PirateGuy", "Alice<3", "LoveYa__", "Knower56", "SkyManFall__", "Moonshiners"];

    var messages = ["Oh shoot", "Oh sh.t", "Oh sh*t", "What the f*ck", "What the fu.k", "Wow", "Hahahah", "Hehehaha", "!rules", "Can I join your lobby?", "This killer has bad ping", "You can make this", "Come on", "Sorry", "I have to go", "Bye bye", "Bye", "Got to go", "Love you man", "Hahaha", "Crying baby", "What the dog doin", "What the dog doing?", "What the dog doin?", "What the dog doin'?", "Not like this", "Yo", "I main Hillbilly", "sus hit", "sus", "What the flick", "What the flip", "Killer is malding", "Fire movement", "Dude", "Bro", "...", "Bruh", "How did that hit?", "How?", "That was close", "C'mon", "Report this guy", "EZ", "How you all doin?", "Hi there!", "Hello there!", "Hello", "Hi", "+1", "XDD", "XD", "XDDDD", "CatJAM", "POGGERS", "POG", "Sadge", "I CANT", "OMEGALUL", "FeelsGoodMan", "FeelsWierdMan", "gg", "gg ez", "ggez", "gg wp", "gg's", "ggwp", "wp", "Wow!", "Well played", "You did good!", "It's Billy guys!!!", "Let's go!", "What?", "I love versing Billy", "Im a Billy main btw", "I hate DbD", "What the...", "Is that a hacker?", "Yes", "No", "Who asked", "Lmao", "Lol", "Your mom", "Wtf", "Wtf just happened", "Ey yo", "What the hell?", "??", "?", "Sheesh", "It's hacker", "He's cheating", "This guy is cheating!", "OMG", "OMFG!", "OMFG", "OMG!", "I am in your lobby :O", "I'm your big fan", "Im your fan", "Im your big fan", "I love your vids", "Howdy", "Hello people", "Thanks", "Thank you", "Yoooo", "Rat gaming"];

    var nickLength = nickNames.length-1;
    var msgLength = messages.length-1;

    var getNick = Math.round(Math.random() * nickLength);
    var getMsg = Math.round(Math.random() * msgLength);

    var getColor = Math.round(Math.random() * 15);

    var checkIfEmoji = Math.round(Math.random());
    var getEmoji = Math.round(Math.random() * 24);
    var emoji = "";
    if(checkIfEmoji == 1 && getEmoji != 0)
    {
        emoji = `<img src='./emoji/${getEmoji}.png' style='height: 1.3020833333333333vw' class='emoji'>`;
    }

    var getCase = Math.round(Math.random() * 2);
    var msg = messages[getMsg];

    switch(getCase)
    {
        case 0:
            msg = msg.toLowerCase();
            break;
        case 1:
            msg = msg.toUpperCase();
            break;
        default:
            msg = msg;
            break;
    }

    var color = "";

    switch(getColor)
    {
        case 1:
            color = "blue";
            break;
        case 2:
            color = "coral";
            break;
        case 3:
            color = "dodgerblue";
            break;
        case 4:
            color = "springgreen";
            break;
        case 5:
            color = "yellowgreen";
            break;
        case 6:
            color = "green";
            break;
        case 7:
            color = "orangered";
            break;
        case 8:
            color = "red";
            break;
        case 9:
            color = "goldenrod";
            break;
        case 10:
            color = "hotpink";
            break;
        case 11:
            color = "cadetblue";
            break;
        case 12:
            color = "seagreen";
            break;
        case 13:
            color = "chocolate";
            break;
        case 14:
            color = "blueviolet";
            break;
        case 15:
            color = "firebrick";
            break;
    }


    var checkIfHasBadge = Math.round(Math.random());
    var getBadge = Math.round(Math.random() * 5);
    var badge = "";

    if(checkIfHasBadge == 1 && getBadge != 0)
    {
        badge = `<img src='./badges/${getBadge}.png' style='vertical-align: middle; height: 1.3595166163141994vw'>`;
    }

    if(emoji != "")
    {
        chat.innerHTML += `<span style='display: inline-block; width: 19.53125vw; position: relative; z-index: 0; vertical-align: middle;font-size: 0.8463541666666666vw; padding:0.3255208333333333vw; line-height: 1.3020833333333333vw;' class='message'><span style='color: ${color}; margin-left:0.3255208333333333vw; margin-right:0.3255208333333333vw; font-weight: bold;' class='nick'>${badge} ${nickNames[getNick]}<span style='color: white'>:</span></span><span style='vertical-align: middle'>${msg}</span> ${emoji}<img src='reply.png' class='reply' style='vertical-align: middle'></span><br>`;
    }
    else
    {
        chat.innerHTML += `<span style='display: inline-block; width: 19.53125vw; position: relative; z-index: 0; vertical-align: middle;font-size: 0.8463541666666666vw; padding:0.3255208333333333vw; line-height: 1.3020833333333333vw;' class='message'><span style='color: ${color}; margin-left:0.3255208333333333vw; margin-right:0.3255208333333333vw; font-weight: bold' class='nick'>${badge} ${nickNames[getNick]}<span style='color: white'>:</span></span><span style='vertical-align: middle'>${msg}</span><img src='reply.png' class='reply'></span><br>`;
    }
    chat.scroll({ top: chat.scrollHeight});
}

var timer = Math.round(Math.random() * (15000 - 1000) + 1000);
var chatTimer = Math.round(Math.random() * (700 - 10) + 10);
window.setInterval(randomUsers, timer);
window.setInterval(setTime, 1000);
window.setInterval(chat, 400);