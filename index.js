#!/usr/bin/env node

let chalk = require('chalk')

let colors = `black
red
green
yellow
blue
magenta
cyan
white
blackBright
redBright
greenBright
yellowBright
blueBright
magentaBright
cyanBright
whiteBright`.split('\n')

for (let color of colors) {
    let s = color
    while(s.length < 15) s += ' '

    console.log(chalk[color](s) + ' ' + chalk[color].bold(s))
}