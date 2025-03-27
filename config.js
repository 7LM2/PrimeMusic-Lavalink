

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["439314143150080002", ""], 
  mongodbUri : "mongodb+srv://7LM:7LM@discordbot.g8ejp.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret : "199a619d22dd4e55a4a2c1a7a3d70e63",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Avinan",
      password: "pokemon",
      host: "new-york-node-1.vortexcloud.xyz",
      port:  9376,
      secure: false
    }
  ]
}
