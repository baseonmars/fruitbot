Fruitbot
========

Fruitbot will act as a jabber bot that can sit in a teams room.

Initial features:

 * Display JIRA updates
 * Display git commit messages
 * Send Josh Top Gun facts at random intervals

## Usage

Create a config.js in the same directory as fruitbat.js using sample.js as a guide

    var config = {};

    config.jid       = "you@example.com";
    config.password  = "h<£$%TEfdsdfWQ";
    config.room      = {};
    config.room.jid  = "team@conference.example.com";
    config.room.nick = "fruitbot";

    module.exports = config;

Then start it up:

    node fruitbat.js 

## Future development

 * Change ticket status.
 * Report teapot status
 * Report Bamboo build statuses
 * Print an ascii burndown
 * Trigger bamboo build
 * Search wiki


