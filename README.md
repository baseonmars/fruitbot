Fruitbot
========

An XMPP bot for tech teams.

## Getting Started

<em>note, this doesn't actually work yet</em>

Install the module with: `npm install fruitbot`

Create a config.js file using config.sample.js as a guide.

    var config = {};

    config.jid       = "you@example.com";
    config.password  = "h<£$%TEfdsdfWQ";
    config.room      = {};
    config.room.jid  = "team@conference.example.com";
    config.room.nick = "fruitbot";

    module.exports = config;

Write some code: 

    var fb = new Fruitbot({config_path: "~/fruitbot_config.js"});
    fb.connect(function() { console.log("online"); });

Then start it up:

    node test.js 

## Future development

 * Display JIRA updates
 * Display git commit messages
 * Send Josh Top Gun facts at random intervals
 * Change ticket status.
 * Report teapot status
 * Report Bamboo build statuses
 * Print an ascii burndown
 * Trigger bamboo build
 * Search wiki

## License
Copyright (c) 2013 Dan Etherington (baseonmars)  
Licensed under the MIT license.
