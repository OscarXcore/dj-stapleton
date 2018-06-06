/***************
* DJ Stapleton *
* playlist.js  *
****************/

module.exports = function() {
    let meta = {
        name: `playlist`,
        desc: `Lists everything in the playlist for the current server.`,
        sub: {},
        usage: 'playlist'.prefixed().inlineCode(),
        example: 'playlist'.prefixed().inlineCode(),
        type: `Playlist`,
        disabled: false,
        reason: null
    }

    musicbot.commands.set(meta.name, main);
    musicbot.meta.set(meta.name, meta);
}

function main(messageEvent) {
    
}