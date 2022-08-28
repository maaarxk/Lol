const language = {
 loadevent: "Loaded player event",
 loadcmd: "Loaded command",
 ready: " successfully connected.",
 loadslash: "Successfully reloaded application [/] commands.",
 error1: "The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!",
 error2: "Please set the bot token in token.js or in your .env file in your project!",
 loadclientevent: "Loaded client event",
 embed1: "You must have the <@&{djRole}>(DJ) role set on this server to use this command. Users without this role cannot use the {cmdMAP}",
 message1: "You are not connected to an audio channel. ❌",
 message2: "You are not on the same audio channel as me. ❌",
 message3: "Missing permission",
 msg4: "Something went wrong",
 msg5: "No music currently playing. ❌",
 msg6: "Save Music",
 msg7: "Write playlist name.",
 msg8: "This song is live streaming, no duration data to display. 🎧",
 msg9: "**✅ Success:** Time data updated.",
 msg10: "You don't already have a playlist with this name. ❌",
 msg11: "This music is already in this playlist. ❌",
 msg12: "added to your music playlist.",
error3: "Error reloading application [/] commands: ",
error4: "WARN: It looks like you didn't write the mongodb url? That's fine, but if you don't add the mongodb url you won't be able to use some commands!",
error5: `ERROR EXAMPLE:IF THE BOT IS WORKING, RESPONDING TO COMMANDS BUT NO SOUND, FOLLOW THESE STEPS;
Enter the page of your project that you opened on replit.com.
Click on the one that says shell from the boxes that say console and shell above the opened box at the bottom right.
Type npm uni discord-player
Type npm i discord-player@5.3.0-dev.2
Type npm uni ytdl-core
Type npm i ytdl-core@4.10.0
Turn off and on the bot from the button that says "Stop" or "Run" in the middle of the replit screen`,
msg13: `🎵 Now playing: **{track?.title}** -> Channel: **{queue?.connection.channel.name}** 🎧`,
msg14: "Queue is empty. You can play some more music, byebye... ✅",
msg15: "I disconnected because there is no one left in my channel. ❌",
msg16: "I'm having trouble connecting to the voice channel. ❌ Like someone disconnected me? Im very sad. 😔",
msg17: "There is no previous track! ❌",
msg18: "Now playing **{queue.previousTracks[1].title}**. ✅",
msg19: " Bot Statistics",
msg20: "Refresh",
msg21: "**Your Time Ended!**",
msg22: "**✅ Data Updated.**",
msg23: "The queue is empty. ❌",
msg24: "The queue has just been cleared. 🗑️",
error6: "Please set mongodbURL in config.js file to be able to use this command.",
msg26: "If you don't specify a DJ role, you won't be able to use the command!",
msg25: "The DJ role is successfully set to <@&{role}>.",
msg27: "The DJ role is successfully deleted.",
msg28: "The DJ role is not already set.",
msg29: `Please enter a valid filter name. ❌\n\`bassboost, 8D, nightcore, mono, karaoke\``,
msg30: `I couldn't find a filter with that name. ❌\n\`bassboost, 8D, nightcore, mono, karaoke\``,
msg31: `Applied: **{filter}**, Filter Status: **{status}**\n **Remember, if the music is long, the filter application time may be longer accordingly.**`,
msg32: "It's time to listen to music on your discord server with a completely free and advanced interface. Music bot that supports playing music on many platforms that will make your server feel special. Create your own music bot: https://github.com/umutxyp/MusicBot",
msg33: "Bot Commands",
msg34: "You already have an active command here. ❌",
msg35: "Queue",
msg36: "Now Playing Music",
msg37: "Close Loop",
msg38: "Loop System",
msg39: `> **How about making a choice?**
> **Queue:** Loops the queue.
> **Now Playing Music:** Loops the current song.
> **Close Loop:** Closes the loop.`,
msg40: "Queue Loop Mode",
msg41: "Something went wrong. ❌",
msg42: "Now Playing Music Loop Mode",
msg43: "Loop mode is already inactive. ❌",
msg44: `Loop Mode **Closed** 🔁`,
msg45: "Time's Up",
msg46: "Loop System - Ended",
msg47: 'Save Playlist',
msg48: "music paused! ✅",
msg49: `Message Ping`,
msg50: `Message Latency`,
msg51: `API Latency`,
msg52: `There is no playlist. ❌`,
msg53: `You don't have permission to play this playlist. ❌`,
msg54: `You don't already have a music with this name. ❌`,
msg55: `I can't join your voice channel. ❌`,
msg56: `Loading playlist... ✅`,
msg57: `<@{interaction.member.id}>, Added **{music_filter.length}** tracks to the queue. ✅`,
msg58: `There is no playlist with this name. ❌`,
msg59: `Write the name of the track you want to search. ❌`,
msg60: `No results found! ❌`,
msg61: "named list added to the playlist. ✅",
msg62: "added to queue ✅",
msg63: `Queue is empty. ❌`,
msg64: "Server Music List",
msg65: "Currently Playing",
msg66: "Requested by",
msg67: "Page",
msg68: `The command processor has been cancelled. ✅`,
msg69: `Server Music List - Time Ended!`,
msg70: `Your time has expired to use this command, you can type \`/queue\` to use the command again.`,
msg71: `Something went wrong. ❌ It's like you haven't stopped the music before.`,
msg72: "Track resumed! ✅",
msg73: `Please enter a valid song name. ❌`,
msg74: `No search results found! ❌`,
msg75: "Searched Music",
msg76: "Choose a song from **1** to **{maxTracks.length}** ⬇️",
msg77: `Music search cancelled. ✅`,
msg78: `Loading... 🎧`,
msg79: "added to queue. ✅",
msg80: `Song search time expired ❌`,
msg81: "Cancel",
msg82: `The number you entered is higher than the amount of songs in the queue. ❌`,
msg83: "Skipped song ✅",
msg84: `This song is live streaming, no duration data to display. 🎧`,
msg85: `Music stopped. See you next time! ✅`,
msg86: "Update",
msg87: `Current volume: **{queue.volume}** 🔊\n**To change the volume, with \`1\` to \`{maxVol}\` Type a number between.**`,
msg88: `The volume you want to change is already the current volume ❌`,
msg89: `**Type a number from \`1\` to \`{maxVol}\` to change the volume .** ❌`,
msg90: "Volume changed:",
msg91: `Write the name of the playlist you want to create. ❌`,
msg92: `A playlist with this name already exists. ❌`, 
msg93: `You can't have more than 30 playlists. ❌`,
msg94: "Creating playlist... 🎧",
msg95: "Playlist created! 🎧",
msg96: `You don't already have a playlist with this name. ❌`,
msg97: "Deleting playlist... 🎧",
msg98: "Playlist deleted! 🎧",
msg99: `Write the name of the track you want to search. ❌`,
msg100: `Write the name of the playlist you want to add the music to. ❌`,
msg101: `You can't have more than {max_music} musics in a playlist. ❌`,
msg102: "Loading music(s)... 🎧",
msg103: "All musics added to your playlist! 🎧",
msg104: `This music is already in this playlist. ❌`,
msg105: "added to the playlist! 🎧",
msg106: `Write the name of the playlist you want to delete the music to. ❌`,
msg107: `You don't already have a music with this name. ❌`,
msg108: "Deleting music... 🎧",
msg109: "Music deleted! 🎧",
msg110: "Write the name of the playlist you want to search. ❌",
msg111: `You don't have any music in this playlist. ❌`,
msg112: "Top Public Playlists",
msg113: `Your time has expired to use this command, you can type \`/playlist top\` to use the command again.`,
msg114: `There is no public playlist. ❌`,
msg115: "Your Playlists",
msg116: `musics`,
msg117: `You don't have any playlist. ❌`,
msg118: "Your time has expired to use this command, you can type \`/playlist list {name}\` to use the command again.",
msg119: "Use the **/play playlist <list-name>** command to listen to these playlists."
}
module.exports = language;
