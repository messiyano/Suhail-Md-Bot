const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_12_11_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjExLFxuICAgICAgICA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjN6czVBVmFqT0Z1RjcyQzRla2lNL3BIRURIalBmZ3FpRHRjamxvTXoyNHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtzZ3lLcVJsU0IyQTE3OThmdE9mQmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjU2NjE5MzItYmJjMy00YzhjLWFiYTEtNzQyN2IyZjA5MjA1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDEwNixcbiAgICAgIDgwLFxuICAgICAgMTA1LFxuICAgICAgMTgzLFxuICAgICAgMjMxLFxuICAgICAgMTkwLFxuICAgICAgMTYyLFxuICAgICAgMTU3LFxuICAgICAgMTkzLFxuICAgICAgMTAwLFxuICAgICAgNTQsXG4gICAgICAxNTksXG4gICAgICAyMTIsXG4gICAgICAxMixcbiAgICAgIDIxNixcbiAgICAgIDQzLFxuICAgICAgMTU0LFxuICAgICAgMTg0LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDQwLFxuICAgICAgMjI1LFxuICAgICAgNzQsXG4gICAgICAxMTYsXG4gICAgICAzOCxcbiAgICAgIDI1NSxcbiAgICAgIDYsXG4gICAgICA2NCxcbiAgICAgIDM3LFxuICAgICAgODgsXG4gICAgICAxOTMsXG4gICAgICAxMTksXG4gICAgICA2LFxuICAgICAgMjYsXG4gICAgICAyMDUsXG4gICAgICAxODMsXG4gICAgICA5MCxcbiAgICAgIDExMixcbiAgICAgIDE4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXNEpCUzk2MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzU1ODM1MDU0OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTY5MzQwNzA0OTc0MjU6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5Jbm9RRUVQR2ZqN2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4b1loUXlqSk0wbkE5UUVJOW16OEZXVWx5SDlwdU5Ud1ozSlZGcDR0a0Y4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFQSXFyR1Q1cmNQM3dHYlNVSkhGeGFpM2R0WkdUZGl6OHJuKzdnSTlRandyeGZJZXIvK3REZjI1Nlp4cHdWaGxLRlNLM2g3UytOTUt4aFRWdWhLZ0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjR0NDlHZFpxVlBmVy9aSzFQMUFaNDFOcmdTNHZ1Ri9mTGFQUUJFSTZ2aUsxNVBSZUE4NWxXenlBemtRWXMzeklQTHd2VXVIVGtjeFF2aFZkUitiZ2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1NTgzNTA1NDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODMwMzA5M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
