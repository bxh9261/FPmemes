const Discord = require("discord.js");
const client = new Discord.Client();

//FOWL PLAY MEMES BOT
//Don't add anything that'll be extremely disruptive to chat or too offensive

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.author.bot) return;	

    if (message.content.toLowerCase().includes("radiohead"))
    {
      message.channel.send("Love you Logan, but here's Radiohead " + getRadioheadSong())
    }
    if (message.content.includes("!info"))
    {
        message.channel.send("This is the fowl play bot made by Brad. Say !ship or !hottest. Or some other secret phrases.");
    }
    if (message.content.includes("!hottest"))
      {
        var fpName = getFPMember();
        message.channel.send("You wanna know who's the hottest in Fowl Play? It's " + fpName + ".");
      }
    if (message.content.includes("!ship"))
      {
        var fpName = getFPMember();
        var time = 500;
        var fpName2 = getFPMember();
        if((fpName == "Basil" && fpName2 == "Mike") || (fpName == "Mike" && fpName2 == "Basil")){
            message.channel.send("You wanna know who are the best of friends? It's " + fpName + " and " + fpName2 + ".");
        }
        else{
            message.channel.send("You wanna know who in Fowl Play should date? It's " + fpName + " and " + fpName2 + ".");
        }


      } 
    if (message.content.toLowerCase().includes("orgy")){
        message.channel.send("No Fowl Play Orgy this semester. Please keep your distance and wear a mask.");
    }
    if ((message.content.toLowerCase().includes("goose")) && 
        (message.content.toLowerCase().includes("picture"))){
        var fpName = getFPMember();
        if(fpName == "Mo")
        { 
            message.channel.send("Not Mo lmao.");
        }
        else{message.channel.send(fpName + " took the picture of the goose.");}

    }
    
    function getFPMember() 
    {
        var members = ["Brad", "Tess", "Danyell", "Logan", "Mo", "Mike", "Nate", "Basil", "Rowan", "Duncan", "Nick", "Latrell", "Marten", "Matt", "Lemole", "Colin", "Teddy", "Cleo"];
        var rand = Math.floor(Math.random() * members.length);
        return(members[rand]);
    }
    
    function getRadioheadSong(){
        var radiohead = ["https://www.youtube.com/watch?v=XFkzRNyygfk",
                        "https://www.youtube.com/watch?v=u5CVsCnxyXg",
                        "https://www.youtube.com/watch?v=n5h0qHwNrHk",
                        "https://www.youtube.com/watch?v=7qFfFVSerQo",
                        "https://www.youtube.com/watch?v=Ze9Z-Fhp0EE",
                        "https://www.youtube.com/watch?v=4VNCSU4tGD0",
                        "https://www.youtube.com/watch?v=1uYWYWPc9HU",
                        "https://www.youtube.com/watch?v=50rlHVe6g9Q",
                        "https://www.youtube.com/watch?v=QfzV-oHgRxU",
                        "<https://www.youtube.com/watch?v=dQw4w9WgXcQ>"];
        var rand = Math.floor(Math.random() * radiohead.length);
        return(radiohead[rand]);
    }
    
    
})

client.login("TOKEN");
