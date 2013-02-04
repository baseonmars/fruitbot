/******************************
* scratch board
*****************************/
var bats = ["^v^", "(^+.+^)", "/|\\( ;,;)/|\\"];
    
var xmpp  = require('node-xmpp'),
app       = require('./config'),
sys       = require('sys'),
jid       = app.config.jid,
password  = app.config.password,
room_jid  = app.config.room.jid,
room_nick = app.config.room.nick,
conn      = new xmpp.Client({
    jid       : jid,
    password  : password
});

conn.on('online', function () {

    console.log('online');
    conn.send(new xmpp.Element('presence', { to: room_jid +'/' + room_nick }).
    c('x', { xmlns: 'http://jabber.org/protocol/muc' }));

    conn.send(new xmpp.Element('message', { to: room_jid, type: 'groupchat' }).
    c('body').t('(^+.+^) fruitbot initialising...\ntype !help for commands.'));

    conn.send(new xmpp.Message({ to: "dan@chat.greekattic.com" }).
    c('body').t('Hello'));
    console.log("setup");
});

conn.on('stanza', function(stanza) {
    sys.puts(stanza);
});

conn.on('error', function(e) {
    sys.puts(e);
});

